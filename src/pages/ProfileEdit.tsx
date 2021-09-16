import React, {Fragment, useState, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useHistory } from 'react-router'

import { IAuthenticate, IProfile} from '../type.d'
import { Header } from '../layouts/header'
import { SideBar } from '../layouts/sidebar'
import {ProfileForm} from "../components/ProfileForm"
import { profile_update } from '../actions/profile'
import { toastify, verifyString } from '../helpers';

export const ProfileEdit = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    const {user} = useSelector((state: IAuthenticate) => state.auth)
    const {loading, profile}=useSelector((state:IProfile)=>state.profile)
    const [formData, setFormData]= useState({
        id: profile.id,
        firstName: '',
        lastName: '',
        email: '',
        organizationName: '',
        organizationType: '',
        image: '',
    })
    
    useEffect(()=>{
        setFormData(profile)
    },[profile])
    const handleInputChange=(e: any)=>{
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    //UPLOAD IMAGE
    const onChange=(e:any)=>{
        const file=e.target.files[0]
        // const fileSize = e.target.files[0].size / 1024 / 1024;
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if(!allowedExtensions.exec(formData.image) ){
            setFormData({...formData, image:''})
            toastify.alertWarning(`not accepted`)
           
        }else{
            setFormData({...formData, image:file})
        }
        
    }
    console.log(formData)

    const onFinish=()=>{
        const formProfile = (({
            firstName,
            lastName,
            organizationName,
            organizationType,
            email,
            image,
        }) => ({
            firstName,
            lastName,
            organizationName,
            organizationType,
            email,
            image,
        }))(formData)
        
        if(!verifyString(formData.firstName) || !verifyString(formData.lastName)){
            toastify.alertWarning('Name Field cannot contain Digit or special Characters')
        }else{
            dispatch(profile_update(profile.id, formProfile, history))
        }
        
        
    }
    return (
        <div className="container-scroller">
            <Header  user={user} />
            <div className="page-body-wrapper" style={{ marginTop: "60px" }}>
                <SideBar/>
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row page-title-header">
                            <div className="col-12">
                                <div>
                                    <h4 className="view-title">Profile</h4>
                                </div>
                                <Fragment>
                                    <ProfileForm 
                                    user={user}
                                    formData={formData}
                                    handleInputChange={handleInputChange}
                                    onChange={onChange}
                                    onFinish={onFinish}
                                    loading={loading}
                                    />
                                </Fragment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
