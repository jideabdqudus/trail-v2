// import React, { Fragment } from 'react'
// import { Layout, Row, Col, Card, Select, Empty } from "antd";
// import { isEmpty } from "lodash";
// import { Bar } from "react-chartjs-2";




// export const ProgramFormReport: React.FC<Props> = ({report}) => {
//   const generateDataObject = (report: any) => {
//     const data = {
//       labels: [report?.submissions[0]?.date || null],
//       datasets: [
//         {
//           label: "Yes",
//           data: [report?.submissions[0]?.positive || 0],
//           backgroundColor: "#1a1aff",
//           maxBarThickness: 20,
//         },
//         {
//           label: "No",
//           data: [report?.submissions[0]?.negative || 0],
//           backgroundColor: "#b0b0fc",
//           maxBarThickness: 20,
//         },
//       ],
//     };

//     return data;
//   };

//   const options = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//           gridLines: {
//             display: true,
//           },
//         },
//       ],
//       xAxes: [
//         {
//           stacked: true,
//           gridLines: {
//             display: false,
//           },
//         },
//       ],
//     },
//   };



//   return (
//     <div>
//       <Row>
//           {isEmpty(report) ? (
//             <Empty style={{ maxWidth: 960, margin: "10rem auto" }} />
//           ) : (
//             report?.map((report: any, idx: any) => (
//               <Col key={idx} xs={{ span: 24 }} lg={{ span: 12 }}>
//                 <Fragment>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       justifyItems: "center",
//                       justifyContent: "space-between",
//                       padding: "0 2rem",
//                     }}
//                   >
//                     <small style={{ fontSize: 15 }}>
//                       {report?.question || ""}
//                     </small>
//                     <small style={{ fontSize: 15 }}>{`Target: ${
//                       report?.targetValue || ""
//                     }`}</small>
//                   </div>
//                   <Bar
//                     data={generateDataObject(report)}
//                     width={100}
//                     height={60}
//                     // options={options}
//                   />
//                 </Fragment>
//               </Col>
//             ))
//           )}
//         </Row>
//     </div>
//   )
// }

import React from 'react'
<<<<<<< HEAD
=======
import { Row, Col, Card, Empty } from "antd";
import { Bar } from "react-chartjs-2";
import { isEmpty } from "lodash";
>>>>>>> 2f8fce27264119e1ead0dbbb8b0c7c90d76f63b1

interface Props {
  report: any
  generateDataObject: (report: any)=> any
  options?: object
}

<<<<<<< HEAD
export const ProgramFormReport:React.FC<Props> = () => {
  return (
    <div>
      <h1>Form Report</h1>
=======
export const ProgramFormReport: React.FC<Props> = ({report, generateDataObject, options}) => {
  return (
    <div>
      <Row gutter={[48, 48]}> 
          {isEmpty(report) ? (
            <Empty className="reportEmpty" />
          ) : (
            report?.map((rep: any, idx: any) => (
              <Col key={idx} xs={{ span: 24 }} lg={{ span: 12 }}>
                <Card className={"indicatorCard"}>
                  <div className="reportCard" >
                    <small>
                      {rep?.question || ""}
                    </small>
                    <small>
                      {`Target: ${rep?.targetValue || ""}`}
                    </small>
                  </div>
                  <Bar data={generateDataObject(rep)} width={100} height={60} options={options}/>
                </Card>
              </Col>
            ))
          )}
        </Row>
>>>>>>> 2f8fce27264119e1ead0dbbb8b0c7c90d76f63b1
    </div>
  )
}