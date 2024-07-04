// import { Avatar,Box,Grid, Rating } from '@mui/material'
// import React from 'react'

// function ProductReviewCard() {
//   return (
//     <div>
//       <Grid container spacing={2} gap={3} >
//         <Grid item xs={1}>
//             <Box>
//                 <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>
//                     R
//                 </Avatar>
//             </Box>
//             </Grid>
//             <Grid item xs={9}>
//                 <div className='spacey-y-2' >
//                    <div>
//                      <p className='font-semibold text:lg'>Ram</p>
//                     <p className='opacity-70'>June 28,2024</p>
//                     </div>
//                 </div>
//                 <Rating value={4.5} name='half-rarting' readOnly precision={0.5}/>
//                 <p className=''>Fine Fabric, awesome product</p>
//             </Grid>
       
//       </Grid>
//     </div>
//   )
// }

// export default ProductReviewCard


import { Avatar, Box, Grid, Rating } from '@mui/material';
import React from 'react';

function ProductReviewCard() {
  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1}>
          <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>
            R
          </Avatar>
        </Grid>
        <Grid item xs={11}>
          <div className='space-y-2'>
            <div>
              <p className='font-semibold text-lg mb-1'>Ram</p>
              <p className='opacity-70 mb-1'>June 28, 2024</p>
            </div>
            <Rating value={4.5} name='half-rating' readOnly precision={0.5} />
            <p className='mb-1'>Fine Fabric, awesome product</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductReviewCard;
