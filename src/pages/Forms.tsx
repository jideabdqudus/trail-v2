import React, {useEffect} from "react";
import { useState, useRef} from "react";
import { Button, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { FormTable } from "../components/FormTable";
import { Header } from "../layouts/header";
import { SideBar } from "../layouts/sidebar";
import { IAuthenticate } from "../type.d";
import { getForms, filterForm, clearFilter, deleteForm, getForm, downloadRawData} from "../redux/actions/form";
import { IForms } from "../type.d";

export const Forms = () => {
  const { Footer } = Layout;
  const { user } = useSelector((state: IAuthenticate) => state.auth);
  const { loading, forms, pagination, filtered} = useSelector((state: IForms) => state.form);
  const [page, setPage]=useState(1)
  const filterText=useRef<any>('')
  const dispatch = useDispatch();
  const history=useHistory()
  useEffect(() => {
    dispatch(getForms(page));
  }, [dispatch, page]);
  const handlePageChange = (_page: number) => setPage(_page)
  const inputChange=(e: any)=>{
    if(filterText.current.value!== ""){
      dispatch(filterForm(e.target.value))
    }else{
      dispatch(clearFilter())
    }
  }
  const deleteFormRow=(id:number)=>{
    dispatch(deleteForm(id))
  }

  const setCurrentForm=(id:any)=>{
      dispatch(getForm(id))
  }

  const downloadFormRawData=(id:number,key:string, fileName:string, history:any)=>{
    dispatch(downloadRawData(id,key, fileName, history))
    console.log(key, 'key')
  }

  //download filetype
  const menu =(id:number, formName:string)=> (
    <Menu onClick={({key})=>downloadFormRawData(id,key,key==='excel'?`${formName.split(' ').join('')}.xlsx`:`${formName.split(' ').join('')}.${key}`, history)}>
      <Menu.Item key="csv">CSV</Menu.Item>
      <Menu.Item key="excel">EXCEL</Menu.Item>
      {/* <Menu.Item key="pdf">PDF</Menu.Item> */}
    </Menu>
  );
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
                  <Button className="new-programme-btn" 
                    style={{backgroundColor: "#d66f0f",color: "white",width: "140px"}}
                  >
                    <Link to="/app/form-build"> New Form</Link>
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
                    deleteFormRow={deleteFormRow}
                    setCurrentForm={setCurrentForm}
                    menu={menu}
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
