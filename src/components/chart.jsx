// import React from 'react';
// import AreaChart from '@bit/recharts.recharts.area-chart';
// import Area from '@bit/recharts.recharts.area';
// import XAxis from '@bit/recharts.recharts.x-axis';
// import YAxis from '@bit/recharts.recharts.y-axis';
// // import CartesianGrid from '@bit/recharts.recharts.cartesian-grid';
// // import Line from '@bit/recharts.recharts.line';
// import Tooltip from '@bit/recharts.recharts.tooltip';
 
// const Chart = ({imc}) => {
//     // let metros = altura / 100
//     // metros = metros * metros
//     // let imc = peso / metros
//     // imc = imc.toFixed(1)

//     const data = [
//         {
//             name: 'mes1', uv: 30, pv: 0, amt: 0,
//         },
//         {
//             name: 'mes2', uv: 20, pv: 0, amt: 0,
//         },
//         {
//             name: 'mes3', uv: 10, pv: 0, amt: 0,
//         },
//     ];
//     return(
//     <>
//         <h3>Resultado de Test:</h3>
//         {/* <p>{ imc }</p> */}
//         <AreaChart
//             width={300}
//             height={200}
//             data={data}
//             margin={{
//                 top: 10, right: 30, left: 0, bottom: 0,
//             }}
//             >
//             {/* <CartesianGrid strokeDasharray="3 3" /> */}
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
//         </AreaChart>
//     </>
//     )
// }
// export default Chart
