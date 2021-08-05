import React from 'react'
import { Row, Col, Card, Image, Popover } from "antd";

//Imports
import { assets } from '../assets/assets';
import {IProgramEach} from "../type.d"

interface Props {
  programs?: IProgramEach[]
  renderSdgs: (sdg: any)=> any
}
export const Program:React.FC<Props> = ({programs, renderSdgs}) => {
  const content = (
    <div>
      <p className="content-p"> View</p>
      <p className="content-p"> Delete</p>
    </div>
  );
  return (
    <div className="program">
      {programs?.map((program)=>(
           <Card className="card"
           cover={
             <Image src={program.image} className="image"
               fallback="https://codespeedy.com/wp-content/uploads/2019/03/Chrome-Broken-Image-Icon.png"
             />
           }
         >
           <Row>
             <Col span={22}>
               <h3 className="project-name">{program.name}</h3>
             </Col>
             <Col span={2}>
               <Popover content={content} placement="bottom">
                 <img src={assets.menuDots} alt="Menu" height="20" />
               </Popover>
             </Col>
           </Row>
           <Row gutter={[48, 32]}>
             <Col span={12} style={{ paddingBottom: "0px" }}>
               <p className="project-sub-headline">Impact</p>
               <p className="project-headline">{renderSdgs(program.sdgs)}</p>
             </Col>
             <Col span={12} style={{ paddingBottom: "0px" }}>
               <p className="project-sub-headline">Location</p>
               <p className="project-headline">{program.locations[0].description}</p>
             </Col>
           </Row>
         </Card>
      ))}
    </div>
  )
}
