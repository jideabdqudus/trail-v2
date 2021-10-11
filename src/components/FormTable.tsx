import {Popover,Skeleton,Row,Col,Layout,Pagination, Popconfirm} from "antd";
import { Link } from "react-router-dom";
import { Fragment } from "react";

import { FormFilter } from "./FormFilter";
import {IPagination} from "../type.d"
import {assets} from "../assets/assets"

interface Props{
  loading: boolean;
  forms: [];
  pagination: IPagination;
  handleChange: (_page:number)=>void;
  inputChange: (e: any)=>void
  filtered: [] | null
  filterText:any
  deleteFormRow:(id:any)=>void,
  setCurrentForm:(id:any)=>void
}

export const FormTable = ({loading, forms, pagination, handleChange, filtered, inputChange, filterText, deleteFormRow,setCurrentForm}: Props) => {  
  const content = (id:number)=>{
  return  <Fragment>
      <Link to={`/app/form/preview/${id}`} className="content-p">View</Link>      
      <Popconfirm title="Are you sure you want to delete this?"
        okText="Yes"
        cancelText="No"
        onConfirm={()=>deleteFormRow(id)}
      >
        <p style={{ cursor: 'pointer' }}>Delete</p>
      </Popconfirm>
      <Link to={`/app/form-edit/${id}`} className="content-p" onClick={()=>setCurrentForm(id)}>Edit</Link>
    </Fragment>
  };
  const pageSizeOption: string[]=["10", "20", "50" ,"100"];
  return (
    <Layout>
      <div>
        <div className="card" style={{backgroundColor: "#fff"}}>
          <div className="card-body">
            <Row>
              <Col span={14}>
                <h4 className="card-title" style={{ fontSize: "20px" }}>
                  <span style={{ color: "gray", fontSize: "20px", }} >
                    {forms ? `${forms.length}` : null}
                  </span> ||
                  {forms.length > 1 ? " Forms" : "Form"}
                </h4>
              </Col>
              <Col span={6}>
                <FormFilter 
                inputChange={inputChange}
                filterText={filterText}
                />
              </Col>
              <Col span={1}></Col>
              <Col span={3}>
                {pagination && <Pagination 
                  current={pagination.currentPage} 
                  size="small"
                  pageSizeOptions={pageSizeOption} 
                  total={(+pagination.totalPages ||0) * (+pagination?.limit || 0)} 
                  onChange={handleChange}
                />}
              </Col>
            </Row>
            <Row>
              <table className="table table-bordered" >
                <thead>
                  <tr>
                    <th>Form Name</th>
                    <th>Form Link</th>
                    <th></th>
                  </tr>
                </thead>
                {!loading ? (
                  <tbody>
                    {filtered!==null ? 
                    filtered.map((filt: any)=>{
                      return (
                        <tr key={filt.id}>
                            <td>{filt.name}</td>
                            <td><a href={filt.formlink} target="_blank" rel="noreferrer">
                              {filt.formlink.length> 20? filt.formlink.substring(0,50) + "...": filt.formlink}{" "}
                              </a>
                            </td>
                            <td>
                            <Popover content={content(filt.id)}>
                              <img src={assets.coloredBurger} alt="menu" />
                            </Popover>
                          </td>
                        </tr>
                      )
                    }) :
                    forms.map((form: any) => {
                      return (
                        <tr key={form.id}>
                          <td>{form.name}</td>
                          <td>
                            <Link to={`/form/${form.name.split(' ').join('')}-${form.formid}`} target="_blank" rel="noreferrer">
                              {form.formlink.length > 20
                                ? form.formlink.substring(0, 50) + "..."
                                : form.formlink}{" "}
                            </Link>
                          </td>
                          <td>
                            <Popover content={content(form.id)}>
                              <img src={assets.coloredBurger} alt="menu" />
                            </Popover>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                ) : (
                  <Skeleton />
                )}
              </table>
            </Row>
          </div>
        </div>
      </div>
    </Layout>
  );
};
