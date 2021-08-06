import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


export const ProgramData = () => {
  const handleSelect = (address: any) => {
    geocodeByAddress(address)
    .then((results) => getLatLng(results[0]))
    .then((latLng) => {
        // update center state
        console.log({ mapCenter: latLng })
    })
    .catch((error) => console.error('Error', error))
  };
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
                // id="project-code"
                // name={"code"}
                // className={classes.textField}
                // margin="normal"
                // variant="outlined"
                // required
                // value={address}
                // onChange={handleChangePlace}
                // error={formOneErrors.code}
                onChange={value => handleSelect(value)}
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
           </Row>
        </Form>
    </div>
  )
}
