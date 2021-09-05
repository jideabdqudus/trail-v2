import React from 'react'
import { Row, Col, Card, Image, Popover } from "antd";
import { useDispatch } from 'react-redux';

//Imports
import { assets } from '../assets/assets';
import {IProgramEach} from "../type.d"
import {deleteProgram} from "../actions/program.js"

interface Props {
  programs?: IProgramEach[]
  renderSdgs: (sdg: any)=> any
}
export const Program:React.FC<Props> = ({programs, renderSdgs}) => {
  const dispatch = useDispatch()
  
  return (
    <div className="program">
      <Row>
      {programs?.map((program)=>{
        const content = (
          <div>
            <p className="content-p"> View</p>
            <p className="content-p" onClick={()=>dispatch(deleteProgram(program.id))}> Delete</p>
          </div>
        );
        return (
        <Col span={8}>
           <Card className="card"
           cover={
             <Image src={program.image} className="image"
               fallback="https://codespeedy.com/wp-content/uploads/2019/03/Chrome-Broken-Image-Icon.png"
             />
           }
         >
           <div className="ant-card-body">
           <Row>
             <Col span={22}>
               <h3 className="program__name">{program.name}</h3>
             </Col>
             <Col span={2}>
               <Popover content={content} placement="bottom">
                 <img src={assets.menuDots} alt="Menu" height="20" />
               </Popover>
             </Col>
           </Row>
           <Row gutter={[48, 32]}>
             <Col span={12}>
               <p className="program__sub-headline">Impact</p>
               <p className="project-headline">{renderSdgs(program.sdgs)}</p>
             </Col>
             <Col span={12}>
               <p className="program__sub-headline" style={{float:"right"}}>Location</p>
               <p className="project-headline" style={{float:"right"}}> {program.locations[0].description.length > 20 ? program.locations[0].description.substring(0, 11) + "..." : program.locations[0].description} </p>
             </Col>
           </Row>
             </div>
         </Card>
        </Col>
      )})}
        </Row>
    </div>
  )
}
