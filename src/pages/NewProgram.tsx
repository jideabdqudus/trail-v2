import React, {useState, useEffect} from "react";
import { Layout } from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {geocodeByAddress,getLatLng} from 'react-places-autocomplete';


import {SideBar} from "../layouts/sidebar"
import {Header} from "../layouts/header"
import { ProgramData, SdgGroup } from "../components";
import { IAuthenticate,IProgramEach, IPrograms  } from '../type.d'
import { toastify } from "../helpers";
import { getAllSdgsAndIndicators, getIndicatorsUnderSdgs } from "../actions/program";

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
  const [formData, setFormData] = useState<IProgramEach>({
    name:"",
    description:"",
    code:"",
    totalNumberOfBeneficiaries: 0,
    budget: 0,
    locations:{},
    activeMarker:{},
    image:"",
    sdgs:[]
  })
  useEffect(() => {
    dispatch(getAllSdgsAndIndicators())
    // eslint-disable-next-line
  },[])

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
    setFormData({ ...formData, locations: location });
    geocodeByAddress(addressed).then((results) => getLatLng(results[0])).then((latLng) => {
      setMapCenter(latLng)}).catch((error) => toastify.alertWarning(`Warning: ${error}`, 1500))
 }
 const onChangeForm = (e: any) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
const onClickSdg = (e: any)=>{
  console.log(e.target.value)
  dispatch(getIndicatorsUnderSdgs(e.target.value))
}
const onSelectIndicator = (checkedValues: any) => {
  console.log('checked = ', checkedValues);
}
const onSubmitForm = ()=>{
  console.log(formData)
}
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
                        sdgsAndIndicators={sdgsAndIndicators} onClickSdg={onClickSdg} indicatorsUnderSdgs={indicatorsUnderSdgs} onSelectIndicator={onSelectIndicator}
                        loading={loading}
                      />
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