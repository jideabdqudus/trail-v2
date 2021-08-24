import {useState} from "react";
import {Popconfirm,Popover,Skeleton,Row,Col,Layout,Pagination} from "antd";
import { Link } from "react-router-dom";
import MenuDoted from "../../assets/colored_burger_menu.svg";


//IMPORTS

import { FormFilter } from "./FormFilter";
import { IForms } from "../../type.d";
import {IPagination} from "../../type.d"

interface Props{
  loading: any;
  forms: any;
  pagination: any;
  handleChange: any;
  inputChange: any;
  filtered: any
}

export const FormTable = ({loading, forms, pagination, handleChange, inputChange, filtered}: Props) => {
  
  
  const content = (
    <div>
      <Link to="/">View</Link>
      <Link to="/">Delete</Link>
    </div>
  );
  const pageSizeOption: string[]=["10", "20", "50" ,"100"];
  console.log(pagination)
  return (
    <Layout>
      <div>
        <div className="card"  style={{backgroundColor: "#fff"}}>
          <div className="card-body">
            <Row>
              <Col span={14}>
                <h4 className="card-title" style={{ fontSize: "20px" }}>
                  <span
                    style={{
                      color: "gray",
                      fontSize: "20px",
                    }}
                  >
                    {forms ? `${forms.length}` : null}
                  </span>{" "}
                  ||
                  {forms.length > 1 ? " Forms" : "Form"}
                </h4>
              </Col>
              <Col span={6}>
                <FormFilter filtered={filtered} inputChange={inputChange} />
              </Col>
              <Col span={1}></Col>
              <Col span={3}>
                <Pagination current={pagination.currentPage} size="small"
                pageSizeOptions={pageSizeOption} 
                total={(+pagination.totalPages ||0) * (+pagination?.limit || 0)} onChange={handleChange}/>
              </Col>
            </Row>
            <Row>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Form Name</th>
                    <th>Form Link</th>
                    <th></th>
                  </tr>
                </thead>
                {!loading ? (
                  <tbody>
                    {forms.map((form: any) => {
                      return (
                        <tr key={form.id}>
                          <td>{form.name}</td>
                          <td>
                            <a href={form.formlink} target="_blank">
                              {form.formlink.length > 20
                                ? form.formlink.substring(0, 50) + "..."
                                : form.formlink}{" "}
                            </a>
                          </td>
                          <td>
                            <Popover content={content}>
                              <img src={MenuDoted} alt="menu" />
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
