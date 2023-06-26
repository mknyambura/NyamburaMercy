import React from 'react'

const DSBody = () => {
  return (
    <div>
        <div className='flex flex-col items-center'>
            <div className='h-[1px] bg-[#FF9B00] w-3/4 mt-6'></div>
            <ul className='px-12  py-12 gap-8 flex flex-row flex-wrap justify-evenly  items-center list-disc marker:text-[#FF9B00]'>
                <li>Machine learning algorithms (retail location prediction, churn analysis, analysis of clicks on digital ads and others)</li>
                <li>Deep learning algorithms (image classifiers)</li>
                <li>Natural language processing applications (language models, sentiment analysis)</li>
                <li>Time series analysis</li>
            </ul>
        </div>
        <div>

        </div>
    </div>
  )
}

export default DSBody