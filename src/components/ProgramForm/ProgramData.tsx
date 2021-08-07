import React, {useState} from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Dropzone from "react-dropzone";



export const ProgramData = () => {
  // const [file, setFile] = useState<any>("")
  // const [fileForm, setFileForm] = useState<any>("")
  // const thumbs = file.map(
  //   (file: any) => file.name
  //   // <img
  //   //   src={file.preview}
  //   //   style={thumbsContainer}
  //   //   alt="profile"
  //   //   key={file.size}
  //   // />
  // );
  
//   const handleDrop = (file: any) => {
//     setFile(file.map((file: any) =>
//     Object.assign(file, {
//         preview: URL.createObjectURL(file),
//     })
// ))
// setFileForm(file[0])
// console.log(file, "file")
// console.log(fileForm, "fileForm")
// }

//   const [addressed, setAddressed] = useState<any>("")
//   const [selectedPlace, setSelectedPlace] = useState<any>("")
//   const [location, setLocation] = useState<any>("")
//  const handleChangePlace = (address: any) => {
//    setAddressed(address)
// }
// const handleSelectPlace = (address?: any, selectedPlace?: any, location?: any) => {
//   setAddressed(address)
//   setSelectedPlace(selectedPlace)
//   setLocation(location)
//     // this.setState({ address, selectedPlace, location })
//     console.log(address, selectedPlace, location)
//     geocodeByAddress(addressed)
//         .then((results) => getLatLng(results[0]))
//         .then((latLng) => {
//             // update center state
//             console.log({mapcenter: latLng})
//             // this.setState({ mapCenter: latLng })
//         })
//         .catch((error) => console.error('Error', error))
//     // this.setState({ buttonBool2: false })
// }
  return (
    <div>
       <Form  name="normal_login">
         <Row gutter={[10, 30]}>
           <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <span>Program Name</span>
          <Form.Item name="name" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" placeholder="Enter program name" type="text" name="programName"  />
          </Form.Item>
           </Col>
           <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <span>Program Budget</span>
          <Form.Item name="programBudget" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" placeholder="Enter program budget" type="number" name="programBudget"  />
          </Form.Item>
             </Col>
             <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <span>No. of Beneficiaries</span>
          <Form.Item name="programBeneficiaries" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" placeholder="Enter program beneficiaries" type="number" name="programBeneficiaries"  />
          </Form.Item>
             </Col>
           </Row>

           <Row gutter={[10, 30]}>
             <Col xs={{ span: 24 }} lg={{ span: 8 }}>
             <PlacesAutocomplete
                // value={addressed}
                // onChange={value => handleChangePlace(value)}
                // onSelect={handleSelectPlace}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      required
                      style={{
                        padding: "15px",
                        width: "100%",
                        border: "1px solid rgba(0, 0, 0, 0.23)",
                        borderRadius: "4px",
                      }}
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
                            <span>{suggestion.description}</span>
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
          <Form.Item name="programCode" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input className="login__input" placeholder="Enter program code" type="text" name="programCode"  />
          </Form.Item>
               </Col >

               <Col xs={{ span: 24 }} lg={{ span: 8 }}>
               {/* <Dropzone
          onDrop={handleDrop}
          multiple={false}
          // style={{
          //   width: "10px",
          //   height: "100px",
          //   borderRadius: "50%",
          //   objectFit: "cover",
          //   objectPosition: "center",
          //   border: " 1px dashed",
          // }}
          accept="image/png"
        >
          {({ getRootProps, getInputProps }) => (
            <>
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} required />

                <p className="dropzone-text">Upload Image</p>
                {file? file.map(
    (file: any) => 
    <div>
      {file.name}
      <img
        src={file.preview}
        alt="profile"
        height="100"
        width="100"
        key={file.size}
      />
      </div>
  ) : ""}
              </div>
            </>
          )}
        </Dropzone> */}
               </Col>
           </Row>
           <Row>
             <Col xs={{ span: 24 }} lg={{ span: 8 }}>
             <Form.Item name="programDescription" rules={[
              { required: true, message: "Confirm your Input" },
            ]}>
            <Input.TextArea className="login__input" placeholder="Enter program description" name="programDescription"  />
          </Form.Item>
             </Col>
           </Row>
        </Form>
    </div>
  )
}
