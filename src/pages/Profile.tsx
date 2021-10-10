import React, {Fragment, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { IAuthenticate, IProfile} from '../type.d'
import { Header } from '../layouts/header'
import { SideBar } from '../layouts/sidebar'
import {ProfileCard} from "../components/ProfileCard"
import { get_profile } from '../redux/actions/profile'

export const Profile = () => {
    const dispatch=useDispatch()
    const {user} = useSelector((state:IAuthenticate) => state.auth)
    const {profile}=useSelector((state:IProfile)=>state.profile)
    
    useEffect(()=>{
        dispatch(get_profile(user.id))
        console.log(profile)
        // eslint-disable-next-line
    },[])
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
                                    <ProfileCard profile={profile}/>
                                </Fragment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
