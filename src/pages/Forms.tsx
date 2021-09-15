import React, {useEffect} from "react";
import { useState, useRef} from "react";
import { Button, Layout } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


//IMPORT
import { FormTable } from "../components/FormTable";
import { Header } from "../layouts/header";
import { SideBar } from "../layouts/sidebar";
import { IAuthenticate } from "../type.d";
import { getForms, filterForm, clearFilter} from "../actions/form";
import { IForms } from "../type.d";

export const Forms = () => {
  const { Footer } = Layout;
  const { user } = useSelector((state: IAuthenticate) => state.auth);
  const { loading, forms, pagination, filtered} = useSelector((state: IForms) => state.form);
  const [page, setPage]=useState(1)

  const filterText=useRef<any>('') //Change Type
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForms(page));
    
  }, [dispatch, page]);

  const handlePageChange = (_page: number) => setPage(_page)

  const inputChange=(e: any)=>{
    
    if(filterText.current.value!==""){ // Strict Typing
      
      dispatch(filterForm(e.target.value))
    }else{
      dispatch(clearFilter())
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
                    <Link to="/app/build_form"> New Form</Link>
                  </Button>
                </div>
                <div className="dashboard-card">
                  <FormTable 
                    forms={forms} 
                    loading={loading} 
                    pagination={pagination} 
                    handleChange={handlePageChange} 
                    inputChange={inputChange} 
                    filtered={filtered}
                    filterText={filterText}
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
