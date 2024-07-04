import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CartItems = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        {/* <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h[9rem]'> */}
        <div>
          <img
            className="w-[7rem] h-[12rem] object-cover object-top"
            src="https://m.media-amazon.com/images/I/61rnjnQrFtL._AC_UL320_.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="opacity-70">FUNDAY FASHION</p>
          <p className="font-semibold">Women Regular Fit Solid Casual Shirt</p>
          <p className="opacity-70">Size: L, White</p>
          <div className="flex space-x-5 item-center text-lg lg:text-xl text-gray-900 mt-6">
            <p className="font-semibold">Rs199</p>
            <p className="opacity-50 line-through">Rs219</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg-space-x-10 pt-4">
        <div className=" flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm"> 3 </span>
            <IconButton sx={{color:'RGB(145 85 253)'}}>
              <AddCircleOutlineIcon />
            </IconButton>
          
        </div>
        <div>
          <Button sx={{color:'RGB(145 85 253)'}}> Remove Item</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
