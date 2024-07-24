// import React, { useEffect, useState } from 'react';
// import { Pie } from 'react-chartjs-2';

// const PieChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from your API
//     fetch('https://658d9f197c48dce9473980df.mockapi.io/product')
//       .then(response => response.json())
//       .then(data => {
//         // Process data for the pie chart
//         const processedData = data.map(item => ({
//           label: item.name,
//           data: parseFloat(item.price) + (parseFloat(item.price) * parseFloat(item.gst)) / 100,
//         }));

//         setData(processedData);
//       });
//   }, []);

//   // Set options for the pie chart
//   const options = {
//     title: {
//       display: true,
//       text: 'Product Prices with GST',
//       fontSize: 16,
//     },
//   };

//   return (
//     <div style={{ width: '80%', margin: '0 auto' }}>
//       <Pie data={{ datasets: [{ data: data.map(item => item.data) }], labels: data.map(item => item.label) }} options={options} />
//     </div>
//   );
// };

// export default PieChart;
