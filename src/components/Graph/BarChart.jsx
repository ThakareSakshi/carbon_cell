import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
//   import { Chart } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  )

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.Year),
    datasets: [
      {
        label: 'Population',
        data: data.map(entry => entry.Population),
        backgroundColor: 'rgba(132,204,22,.6)',
        borderColor: 'rgb(132,204,22)',
        borderWidth: 1,
        barThickness: 'flex',
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'x',
    scales: {
      x: {

      
        title: {
          display: true,
          text: 'Year'
        }
      },
      y: {
       
        title: {
          display: true,
          text: 'Population'
        }
      }
    }
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default BarChart;