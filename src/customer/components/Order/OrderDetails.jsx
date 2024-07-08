import React from 'react'
import AddressCard from '../Checkout/AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import {  deepPurple } from '@mui/material/colors'
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>
        <Grid className="space-y-5" container>
            {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:'space-between'}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>         
                        <img className='w-[4rem] h-[7rem] ' src='https://m.media-amazon.com/images/I/61b6mxjvpZL._AC_UL320_.jpg' alt=''/>

                        <div className='space-y-2 ml-5'>
                            <p > FUNDAY FASHION </p>
                            <p className='space-x-5 '>Women Regular Fit Solid V Collered Casual Shirt</p>  
                            <p className='space-x-5 font-semibold text-xs opacity-50'><span> Color:Green</span> <span>Size:M</span></p>  
                            <p>₹429  </p>  
                                                 
                        </div>
                    </div>
                </Grid>

                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderPurple500SharpIcon sx={{fontSize:"3rem"}} className="px-2 text-5xl" />
                        <span>
                            Rate & Review Product
                        </span>
                    </Box>
                </Grid>
            </Grid>)}
            

        </Grid>
    </div>
  )
}

export default OrderDetails
