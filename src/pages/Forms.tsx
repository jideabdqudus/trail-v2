import React, {useEffect} from "react";
import { useState, useRef } from "react";
import { Button, Layout } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


//IMPORT
import { FormTable } from "../components/FormIO/FormTable";
import { Header } from "../layouts/header";
import { SideBar } from "../layouts/sidebar";
import { IAuthenticate } from "../type.d";
import { getForms, filterForm} from "../actions/form";
import { IForms } from "../type.d";

export const Forms = () => {
  const { Footer } = Layout;
  const { user } = useSelector((state: IAuthenticate) => state.auth);
  const { loading, forms, pagination, filtered } = useSelector((state: IForms) => state.form);
  const [page, setPage]=useState(1)
  const filterInputText=useRef<any>('')

  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getForms(page));

    // handles Search inputs
    if(filtered===null){
      filterInputText.current=''
    }
    
  }, [dispatch, filtered, page]);
  

  const handlePageChange = (_page: number) => setPage(_page)

  const inputChange=(e: any)=>{
    if(filterInputText.current.value!==""){
      dispatch(filterForm(e.target.value))
     
    }else{

    }
  }
 
  return (
    <div className="container-scroller">
      <Header user={user} />
      <div className="page-body-wrapper" style={{ marginTop: "60px" }}>
        <SideBar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row page-title-header">
              <div className="col-12">
                <div className="top-header">
                  <h1 className="view-title">Forms</h1>
                  <Button
                    className="new-programme-btn"
                    style={{backgroundColor: "#d66f0f",color: "white",width: "140px"}}
                  >
                    <Link to=""> New Form</Link>
                  </Button>
                </div>
                <div className="dashboard-card">
                  <FormTable forms={forms} loading={loading} pagination={pagination} handleChange={handlePageChange} 
                  inputChange={inputChange} filtered={filtered}
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer style={{ textAlign: "center" }}>Trail ©2021 by GSV</Footer>
        </div>
      </div>
    </div>
  );
};
