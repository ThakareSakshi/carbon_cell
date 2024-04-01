import React from 'react'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const CryptosCard = (props) => {
  return (
    <div className='bg-[#1A1E1C] p-4 rounded-lg w-[250px] max-md:w-fit max-[742px]:w-full '>
               <div className='flex gap-3 items-center justify-between'>
               <span className='text-white rounded-full w-10 h-10 flex items-center justify-center font-medium' style={{backgroundColor:props.color}}> <CurrencyBitcoinIcon/></span>
                 
               <div>
               <p className=' text-white pt-2 text-xl text-right max-md:text-lg'>{props.code}</p>
               <p className='text-gray-400 font-light'>{props.description}</p>
               </div>
               </div>
              
              <div className='flex justify-between items-center'>
                
               <h1 className='text-2xl font-medium text-white flex items-center my-2 max-md:text-lg'>{props.icon} {props.rate}</h1>
               <InfoOutlinedIcon style={{color:props.color}}/>
              </div>

              
            </div>
  )
}

export default CryptosCard
