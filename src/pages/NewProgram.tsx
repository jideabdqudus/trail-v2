import React, {useState, useEffect} from "react";
import { Layout, Button } from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {geocodeByAddress,getLatLng} from 'react-places-autocomplete';


import {SideBar} from "../layouts/sidebar"
import {Header} from "../layouts/header"
import { ProgramData, SdgGroup } from "../components";
import { IAuthenticate,IProgramEach, IPrograms  } from '../type.d'
import { toastify, validateNumbers, validateString } from "../helpers";
import { getAllSdgsAndIndicators, createProgram} from "../actions/program";

export const NewProgram:React.FC = () => {
  const { Footer } = Layout;
  const {user} = useSelector((state: IAuthenticate) => state.auth)
  const {loading, sdgsAndIndicators, indicatorsUnderSdgs} = useSelector((state: IPrograms) => state.program)
  const dispatch = useDispatch()
  const [file, setFile] = useState<any>({})
  const [fileForm, setFileForm] = useState<any>({})
  const [addressed, setAddressed] = useState<any>("")
  const [selectedPlace, setSelectedPlace] = useState<any>("")
  const [location, setLocation] = useState<any>("")
  const [mapCenter, setMapCenter] = useState<any>("")
  const [sdgId, setSdgId] = useState<any>([])
  const [formData, setFormData] = useState<IProgramEach>({
    name:"",
    description:"",
    code:"",
    totalNumberOfBeneficiaries: 0,
    budget: 0,
    locations:{},
    activeMarker:location,
    image:"",
    sdgs:[],
    organisationId: 0
  })
  const {name, description, code, totalNumberOfBeneficiaries, budget, locations, activeMarker, image, sdgs, organisationId} = formData
  let selectedSdgs: any = []
  const handleDrop = (file: any) => {
    setFile(file.map((file: any) =>
      Object.assign(file, {
          preview: URL.createObjectURL(file),
      })
    ))
    setFileForm(file[0])
    setFormData({ ...formData, image: file[0] });
  }
  const handleChangePlace = (address: any) => {
    setAddressed(address)
  }
  const handleSelectPlace = (address?: any, selectedPlace?: any, location?: any) => {
    setAddressed(address)
    setSelectedPlace(selectedPlace)
    setLocation(location)
    console.log(location)
    setFormData({ ...formData, locations: location, activeMarker: location });
    geocodeByAddress(addressed).then((results) => getLatLng(results[0])).then((latLng) => {
    setMapCenter(latLng)}).catch((error) => toastify.alertWarning(`Warning: ${error}`, 1500))
  }
  const onChangeForm = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const onClickSdg = (e: any)=>{
  console.log(e.target.value)
  setSdgId([...sdgId, e.target.value])
}


const getIndicators = ()=>{
  sdgsAndIndicators?.filter((sdgs : any)=>{
    sdgId.map((ava: any)=>{
      if(sdgs.id === ava){
          selectedSdgs.push(sdgs)
      }
      return null
    })
    return null
  })
}
const onSubmitForm = ()=>{
  if (
    name === "" ||
    description === ""||
    code === "" ||
    totalNumberOfBeneficiaries === null ||
    budget === null ||
    locations === {} ||
    activeMarker === {} ||
    sdgs === [] ||
    image === ""
  ){
    toastify.alertError("All fields are compulsory", 5000)
  }else if(validateString(name)){
    toastify.alertWarning("Name can't start with number or special character")
  }else if(validateNumbers(budget)){
    toastify.alertWarning("Budget should contain only numbers")
  } else if(validateNumbers(totalNumberOfBeneficiaries)){
    toastify.alertWarning("Number of Beneficiiaries should contain only numbers")
  } else if(validateString(code)){
    toastify.alertWarning("Program code can't start with number or special character")
  } 
  else{
    let submissionPayload = new FormData()
    submissionPayload.append('name', name)
    submissionPayload.append('description', description)  
    submissionPayload.append('code', code)  
    submissionPayload.append('totalNumberOfBeneficiaries', totalNumberOfBeneficiaries.toString())  
    submissionPayload.append('budget', budget.toString())  
    submissionPayload.append('organisationId', organisationId.toString())
    submissionPayload.append('locations', JSON.stringify(locations))
    submissionPayload.append('activeMarker', JSON.stringify(activeMarker))
    submissionPayload.append('sdgs', JSON.stringify(sdgs))
    submissionPayload.append('image', image)
    dispatch(createProgram(submissionPayload))
  }
}
useEffect(() => {
  dispatch(getAllSdgsAndIndicators())
  // eslint-disable-next-line
},[])
  return (
    <div className="container-scroller">
      <Header user={user} />
      <div className="page-body-wrapper" style={{marginTop:"60px"}}>
        <SideBar  />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row page-title-header">
              <div className="col-12">
                <div className="top-header">
                  <h1 className="view-title">Create New Programme</h1>
                </div>
                   <div className="dashboard-card">
                      <ProgramData 
                        file={file} 
                        fileForm={fileForm} 
                        addressed={addressed} 
                        selectedPlace={selectedPlace} 
                        location={location} 
                        mapCenter={mapCenter} 
                        formData={formData} 
                        handleDrop={handleDrop} 
                        handleSelectPlace={handleSelectPlace} 
                        handleChangePlace={handleChangePlace} 
                        onChangeForm={onChangeForm} 
                        onSubmitForm={onSubmitForm} 
                      />
                      <SdgGroup 
                        sdgsAndIndicators={sdgsAndIndicators} 
                        onClickSdg={onClickSdg} 
                        indicatorsUnderSdgs={indicatorsUnderSdgs}
                        loading={loading}
                        sdgId={sdgId}
                        selectedSdgs={selectedSdgs}
                        getIndicators={getIndicators}
                        formData={formData} 
                        setFormData={setFormData}
                      />
                      <div style={{ paddingTop:"200px"}}>
                        <Button type="primary" onClick={onSubmitForm}>Primary Button</Button>
                      </div>
                   </div>
              </div>
            </div>
          </div>
           <Footer style={{ textAlign: 'center' }}>Trail ©2021 by GSV</Footer>
        </div>
      </div>
    </div>
  );
};