import { Fragment, useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { Layout} from "antd";
import { useParams } from 'react-router-dom';

import { Header } from "../layouts/header";
import { SideBar } from '../layouts/sidebar';
import { IAuthenticate, IForms} from '../type.d'
import { getForm } from '../redux/actions/form';
import { PreviewSection } from "../components/PreviewSection";

export const FormPreview = () => {
    const {Footer}= Layout;
    const { user } = useSelector((state: IAuthenticate) => state.auth);
    const {form, loading} = useSelector((state: IForms) => state.form)
    const {id}= useParams<any>()
    const dispatch = useDispatch()
     useEffect(()=>{
         dispatch(getForm(id))
         // eslint-disable-next-line
     },[])
    return (
        <div>
            <Header user={ user }/>
            <div className="page-body-wrapper" style={{ marginTop: "60px" }}>
            <SideBar />
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row page-title-header">
                        <div className="col-12">
                            <Fragment>
                                <PreviewSection form={form} loading={loading}/>
                            </Fragment>
                        </div>
                    </div>
                </div>
                <Footer style={{ textAlign: "center" }}>Trail ©2021 by GSV</Footer>
            </div>
            </div>
        </div>
    )
}