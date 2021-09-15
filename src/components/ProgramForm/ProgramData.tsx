import React from 'react'
import { Form, Input, Row, Col, Divider } from 'antd';
import PlacesAutocomplete from 'react-places-autocomplete';
import Dropzone from "react-dropzone";

interface Props {
  file: any,
  fileForm: any,
  addressed: any, 
  selectedPlace: any, 
  location: any,
  mapCenter: any, 
  formData: any, 
  handleDrop: (file: any)=> void,
  handleSelectPlace: (address?: any, selectedPlace?: any, location?: any)=> void,
  handleChangePlace:(address: any)=> void
  onChangeForm: (e: any)=> void
  onSubmitForm:()=>void
}

export const ProgramData:React.FC<Props> = ({
  fileForm, 
  addressed, 
  formData, 
  handleDrop, 
  handleSelectPlace, 
  handleChangePlace, 
  onChangeForm, 
  onSubmitForm }) => {  
  const {name, description, code, totalNumberOfBeneficiaries, budget } =formData
  return (
    <div>
       <Divider orientation="right">Program Data</Divider>
       <Form  name="normal_login" onFinish={onSubmitForm}>
         <Row gutter={[10, 30]}>
           <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <span>Program Name</span>
              <Form.Item name="name" rules={[{ required: true, message: "Confirm your Input" },]}>
                  <Input className="login__input" placeholder="Enter program name" type="text" name="name" value={name} onChange={onChangeForm}  />
              </Form.Item>
           </Col>
           <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <span>Program Budget</span>
              <Form.Item name="budget" rules={[{ required: true, message: "Confirm your Input" },]}>
                <Input className="login__input" placeholder="Enter program budget" type="number" name="budget" value={budget} onChange={onChangeForm}  />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <span>No. of Beneficiaries</span>
              <Form.Item name="totalNumberOfBeneficiaries" rules={[{ required: true, message: "Confirm your Input" },]}>
                <Input className="login__input" placeholder="Enter program beneficiaries" type="number" name="totalNumberOfBeneficiaries" value={totalNumberOfBeneficiaries} onChange={onChangeForm}  />
              </Form.Item>
            </Col>
           </Row>
           <Row gutter={[10, 30]}>
             <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <PlacesAutocomplete  value={addressed}  onChange={value => handleChangePlace(value)}  onSelect={handleSelectPlace}
                >
                  {({getInputProps, suggestions,  getSuggestionItemProps,  loading,}) => (
                    <div> 
                       <span>Program Location</span>                
                      <input required  style={{ height:"40px", fontSize:"0.9rem", padding: "15px", width: "100%", border: "1px solid #D7DCE0", }}
                        {...getInputProps({
                          placeholder: "Enter program location",
                          className: "location-search-input",
                        })}
                      />
                      <div className="autocomplete-dropdown-container">
                        {loading && <div>...</div>}
                        {suggestions.map((suggestion) => {
                          const className = suggestion.active
                            ? "suggestion-item--active"
                            : "suggestion-item";
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? { backgroundColor: "#fafafa", cursor: "pointer" }
                            : { backgroundColor: "#ffffff", cursor: "pointer" };
                          return (
                            <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                            >
                              <span >{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
             </Col>
             <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                <span>Program Code</span>
                <Form.Item name="code" rules={[{ required: true, message: "Confirm your Input" },]}>
                  <Input className="login__input" placeholder="Enter program code" type="text" name="code" value={code} onChange={onChangeForm}  />
                </Form.Item>
              </Col >
              <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                <Dropzone  onDrop={handleDrop} multiple={false} accept="image/png">
                  {({ getRootProps, getInputProps }) => (<>
                        <span>Program Cover</span>
                      <div {...getRootProps({ className:"drop-zone" })}>
                        <input {...getInputProps()} required />
                        <p style={{textAlign:"center", color:"#1354D3", paddingTop:"8px"}}>Upload program image</p>
                        {fileForm.name === undefined ? <span>PNG or JPEG format only. Maximum size is 600kb</span> :<span>{fileForm.name}</span> }
                      </div>
                    </>
                  )}
                </Dropzone>
                <br/><br/>
               </Col>
           </Row>
           <Row>
             <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Form.Item name="description" rules={[{ required: true, message: "Confirm your Input" },]}>
                <span>Program Description</span>
                <Input.TextArea className="login__input" placeholder="Enter program description" name="description" rows={4} value={description} onChange={onChangeForm}  />
              </Form.Item>
             </Col>
           </Row>
        </Form>
    </div>
  )
}
