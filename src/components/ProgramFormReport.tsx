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

interface Props {
  report: any
}

export const ProgramFormReport:React.FC<Props> = () => {
  return (
    <div>
      <h1>Form Report</h1>
    </div>
  )
}
