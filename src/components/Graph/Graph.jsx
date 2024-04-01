import React, { useEffect, useState } from 'react'
import LineChart from './LineChart';
import BarChart from './BarChart';

const Graph = () => {
    const [populationData ,setPopulationData]=useState(null);

    useEffect(()=>{
        const fetchPopulation=async()=>{
             const response=await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
              const result=await response.json();
              setPopulationData(result.data.reverse());
        }
        fetchPopulation();
    },[])
  return (
    <div className="text-white w-full p-4">
      
     <div className='flex gap-8 max-md:flex-col'>
     <div className='w-1/2 p-2 bg-[#1A1E1C] rounded-lg max-md:w-full '>
     <div className='flex justify-between'>
        <h1 className='text-xl font-medium text-white max-md:text-base'>Population Line Chart</h1>
        <p  className='text-gray-500'>{populationData && populationData[0].Nation}</p>
      </div>
        {
            populationData? <LineChart data={populationData} />:null
        }
      </div>
      <div className='w-[45%] p-2 bg-[#1A1E1C] rounded-lg max-md:w-full '>
      <div className='flex justify-between '>
        <h1 className='text-xl font-medium text-white max-[445px]:text-base'>Population Bar Chart</h1>
        <p  className='text-gray-500'>{populationData && populationData[0].Nation}</p>
      </div>
       
       {
            populationData? <BarChart data={populationData} />:null
        }
      
      </div>
     </div>
    </div>
  )
}

export default Graph;
