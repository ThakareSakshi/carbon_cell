
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
//   import { Chart } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
import { Line } from 'react-chartjs-2';

const LineChart = (props) => {
    console.log(props.data);
  const chartData = {

    labels: props.data.map(entry => entry.Year),
    datasets: [
      {
        label: 'Population',
        data: props.data.map(entry => entry.Population),
        fill: false,
        borderColor: '#2AB42A',
        tension: 0.1,
      },
    ],
  };
  
  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Years'
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

  return <Line data={chartData} options={chartOptions}/>;
};

export default LineChart;
