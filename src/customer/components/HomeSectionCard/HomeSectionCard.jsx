import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-[15rem] mx-3'>

        <div className='h-[13rem] w-[10rem]'>
            <img className="object-cover object-top w-full h-full" src="https://imgs.search.brave.com/HP2HGZN_8wFI_Q6G3nLFrGhr6MkoRVVLYVyufIvZUJI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWVlc2hvLmNv/bS9pbWFnZXMvcHJv/ZHVjdHMvMjIxMjI5/MDAvZTBmODhfNDAw/LmpwZw" alt=""/>

        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-grey-900'> Brand </h3>
            <p className='mt-2 text-sm textgrey-500'> Men Solid Pure Cotton Straight Kurta</p>
        </div>
      
    </div>
  )
}

export default HomeSectionCard
