import React from 'react'
import { Form, Input, Row, Col, Button } from 'antd';
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

export const ProgramData:React.FC<Props> = ({file, fileForm, addressed, selectedPlace, location, mapCenter, formData, handleDrop, handleSelectPlace, handleChangePlace, onChangeForm, onSubmitForm}) => {  
  const {name, description, code, totalNumberOfBeneficiaries, budget}=formData
  return (
    <div>
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
                    <div> <input required  style={{ padding: "15px", width: "100%", border: "1px solid rgba(0, 0, 0, 0.23)",   borderRadius: "4px", }}
                        {...getInputProps({
                          placeholder: "Programme Location",
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
                <span>Programme Code</span>
                <Form.Item name="code" rules={[{ required: true, message: "Confirm your Input" },]}>
                  <Input className="login__input" placeholder="Enter program code" type="text" name="code" value={code} onChange={onChangeForm}  />
                </Form.Item>
              </Col >
              <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                <Dropzone  onDrop={handleDrop} multiple={false} 
                    accept="image/png"
                  >
                  {({ getRootProps, getInputProps }) => (<>
                      <div {...getRootProps({ className:"drop-zone" })}>
                        <input {...getInputProps()} required />
                        <p className="dropzone-text">Upload Image</p>
                          {file? file.name : ""}
                          {/* {file? file.map((file: any) => 
                          <div>
                            {file.name}
                            <img
                              src={file.preview}
                              alt="profile"
                              height="100"
                              width="100"
                              key={file.size}
                            />
                          </div>) : null} */}
                      </div>
                    </>
                  )}
                </Dropzone>
               </Col>
           </Row>
           <Row>
             <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Form.Item name="description" rules={[{ required: true, message: "Confirm your Input" },]}>
                <Input.TextArea className="login__input" placeholder="Enter program description" name="description" value={description} onChange={onChangeForm}  />
              </Form.Item>
             </Col>
           </Row>
           <Row>
            <Col xs={{ span: 12 }} lg={{ span: 24 }}>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login__btn" >
                  Sign Up
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
    </div>
  )
}
