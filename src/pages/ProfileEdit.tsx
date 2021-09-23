import React, {Fragment, useState, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useHistory } from 'react-router'

import { IAuthenticate, IProfile} from '../type.d'
import { Header } from '../layouts/header'
import { SideBar } from '../layouts/sidebar'
import {ProfileForm} from "../components/ProfileForm"
import { profile_update } from '../redux/actions/profile'
import { toastify, verifyString } from '../helpers';

export const ProfileEdit = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    const {user} = useSelector((state: IAuthenticate) => state.auth)
    const {loading, profile}=useSelector((state:IProfile)=>state.profile)
    const [fileForm, setFileForm]=useState({})
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

    const handleDrop=(file:any)=>{
     file.map((file:any)=>{
          return  Object.assign(file,{preview: URL.createObjectURL(file)})
        })
        setFileForm(file[0])
        setFormData({...formData, image: file[0]})
    }

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
                                    onFinish={onFinish}
                                    loading={loading}
                                    handleDrop={handleDrop}
                                    fileForm={fileForm}
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
