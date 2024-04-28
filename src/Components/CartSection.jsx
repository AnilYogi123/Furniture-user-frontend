import React from 'react'
import product1 from '../assets/product1.png';
import del from '../assets/delete.png';
import { Link } from 'react-router-dom'

const CartSection = () => {
    return (
        <div className='flex justify-around py-16 sm:flex-col md:flex-col'>
            <div>
                <div className='grid grid-cols-5 gap-10 bg-[#F9F1E7] px-4 py-4'>
                    <p className='text-sm font-medium'>Product</p>
                    <p className='text-sm font-medium'>Price</p>
                    <p className='text-sm font-medium'>Quantity</p>
                    <p className='text-sm font-medium'>Subtotal</p>
                </div>
                <div className='grid grid-cols-5 gap-10 px-4 py-4 items-center'>
                    <div className='flex gap-2 items-center sm:flex-col'>
                        <img src={product1} alt="product" className='w-12 h-12' />
                        <p className='text-sm text-[#9F9F9F] font-normal'>Asgaard sofa</p>
                    </div>
                    <p className='text-sm text-[#9F9F9F] font-normal'>Rs250,000.00</p>
                    <input type="number" defaultValue={1} min={1} className='border-2 border-gray-200 w-12 h-10 p-2 rounded-lg' />
                    <p className='text-sm font-normal'>Rs250,000.00</p>
                    <img src={del} alt="delete" className='w-5 h-5' />
                </div>
            </div>
            <div className='flex flex-col bg-[#F9F1E7] justify-center px-10 py-8 gap-6 sm:m-10 md:m-20 md:w-80'>
                <h2 className='text-lg font-semibold'>Cart Totals</h2>
                <div className='flex gap-5'>
                    <h5 className='text-xs font-medium'>Subtotal</h5>
                    <p className='text-xs font-medium text-[#9F9F9F]'>Rs. 250,000.00</p>
                </div>
                <div className='flex gap-10'>
                    <h5 className='text-xs font-medium'>Total</h5>
                    <p className='text-sm font-medium text-[#B88E2F]'>Rs. 250,000.00</p>
                </div>
                <Link to='/checkout'>
                    <button className='items-center border border-black w-28 h-10 rounded'>Checkout</button>
                </Link>
            </div>
        </div>
    )
}

export default CartSection
