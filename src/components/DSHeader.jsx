import React from 'react'

const DSHeader = () => {
  return (
    <div>
        <div className=' h-[50vh] py-12 px-12 '>
            <div className=' flex flex-col gap-8 items-center justify-center'>
                <h1 className='text-black font-bold text-2xl'>Mercy Nyambura Kariuki</h1>
                <div className='items-center w-3/4 flex flex-col relative gap-8'>
                    <div className='flex items-center justify-center w-[40%] bg-[#FF9B00] h-[3px]'></div>
                    <div className='absolute top-[-5px] h-[15px] w-[15px] rounded-full bg-[#FF9B00]'></div>
                </div>
            </div>
            <div className='flex flex-col gap-6 justify-center px-12 py-12 text-center item-center'>
                <p>
                    Hi! Glad to see you here.
                    <br/>
                    <br/>
                    I translate data into valuable and comprehensible insights. My goal is to improve results, make the right decisions and save costs.
                </p>
                <p>
                    For more information about each project (description and code), hover the mouse over the pictures and click on them.
                </p>
            </div>
        </div>
    </div>
  )
}

export default DSHeader