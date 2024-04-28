import React from 'react'
import filter from '../assets/filter.png';
import round from '../assets/round.png';
import viewList from '../assets/view-list.png';

const ShopFilter = () => {
    return (
        <div className='bg-[#F9F1E7] h-24 flex items-center px-20 text-sm justify-between sm:hidden'>
            <div className='flex gap-2'>
                <img src={filter} alt="Filter" className='w-5' />
                <p>Filter</p>
                <div className='pl-4 flex gap-6'>
                    <img src={round} alt="Round" className='w-5' />
                    <img src={viewList} alt="View List" className='w-5' />
                </div>
                <p className='text-xs pl-10'>Showing 1–16 of 32 results</p>
            </div>

            <div className='flex gap-10'>
                <div className='flex items-center gap-2'>
                    <p className='font-medium text-xs'>Show</p>
                    <div className='bg-white text-[#9F9F9F] text-xs p-2'>16</div>
                </div>
                <div className='flex items-center gap-1'>
                    <p className='font-medium text-xs'>Sort by</p>
                    <div className='bg-white text-[#9F9F9F] text-xs px-4 py-2'>Default</div>
                </div>
            </div>
        </div>
    )
}

export default ShopFilter
