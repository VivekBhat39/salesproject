import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    fetch('https://658d9f197c48dce9473980df.mockapi.io/product')
      .then(response => response.json())
      .then(data => {
        // Process data for the bar chart
        const processedData = data.map(item => ({
          label: item.name,
          data: parseFloat(item.price) + (parseFloat(item.price) * parseFloat(item.gst)) / 100,
        }));

        setData(processedData);
      });
  }, []);

  // Set options for the bar chart
  const options = {
    scales: {
      y: {
        type: 'linear', // Explicitly specify the type of scale for the y-axis
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Bar data={{ datasets: [{ data: data.map(item => item.data) }], labels: data.map(item => item.label) }} options={options} />
    </div>
  );
};

export default BarChart;
