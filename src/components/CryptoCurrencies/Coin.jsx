import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Coin = ({ coin }) => {
  return (
    <div className=" p-2 bg-[#1A1E1C]  min-w-[250px] h-[200px]  max-sm:min-w-full rounded-lg  overflow-hidden">
      <div className="flex gap-1 items-center justify-between">
        <div className="flex items-center gap-2">
        <img src={coin.item.small} className="h-10 w-10 rounded-full" />
        <p className=" text-[white]">{coin.item.symbol}</p>
        </div>
        <span
          className="px-2 p-[2px] bg-[#333333] rounded-md text-sm"
          style={{
            color:
              coin.item.data.price_change_percentage_24h.usd > 0
                ? "green"
                : "red",
           
          }}
        >
          <ArrowDropDownIcon />
          {Math.round(coin.item.data.price_change_percentage_24h.usd * 100) /
            100}
          %
        </span>
      </div>
      <p className="text-gray-500">Market Cap</p>
      <h2 className=" text-xl font-medium text-white">{coin.item.data.market_cap}</h2>
     <div className="flex justify-center">
     <img src={coin.item.data.sparkline} className="p-4 w-[60%]" />
     </div>
    </div>
  );
};

export default Coin;
