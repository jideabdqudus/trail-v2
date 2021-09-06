import { Fragment} from "react";
import { useSelector} from "react-redux";
import { Layout} from "antd";

// import 
import { Header } from "../layouts/header";
import { SideBar } from '../layouts/sidebar';
import { IAuthenticate} from '../type.d'
import { PreviewSection } from "./PreviewSection";


export const FormPreview = () => {
    const {Footer}= Layout;
    
    const { user } = useSelector((state: IAuthenticate) => state.auth);

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
                        <PreviewSection/>
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
