import React from 'react'
import { Grid } from '@mui/material'
import AdjustSharp from '@mui/icons-material/AdjustSharp';
import { useNavigate } from 'react-router-dom';
const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border '>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6} >
            <div className='flex cursor-pointer'>
                <img className='w-[3rem] h-[5rem] object-top' src='https://m.media-amazon.com/images/I/41dtHbkLEYL._AC_UL320_.jpg' alt='' />
                <div className='ml-5 space-y-2'>
                    <p className='mb-2'>Women Solid Chambrey Regular Formal Shirt</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                </div>
            </div>
        </Grid>

        <Grid item xs={2}>
            <p> ₹569 </p>
        </Grid>

        <Grid item xs={4}>
            { true && <div>
                <p>
                    <AdjustSharp xs={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text sm' />
                    <span>Delivered on Mar, 03</span>
                   
                </p>
            </div>}
            <p className='text-xs'>
            Your order's been delivered
            </p>
            {false && <p>
                <span>
                    Expected Delievery is by Mar, 03
                </span>
            </p>}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
