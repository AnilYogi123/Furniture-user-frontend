import React from 'react'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'

const products = [
    { image: product1, title: 'Asgaard Sofa', price: 'Rs 250,000' },
    { image: product2, title: 'Outdoor Sofa Set', price: 'Rs. 224,000' },
]
const general = [
    { name: 'Sales Package' },
    { name: '1 sectional sofa' },
    { name: '1 Three Seater, 2 Single Seater' },
    { name: 'Model Number' },
    { name: 'TFCBLIGRBL6SRHS' },
    { name: 'DTUBLIGRBL568' },
    { name: 'Secondary Material' },
    { name: 'Solid Wood' },
    { name: 'Solid Wood' },
    { name: 'Configuration' },
    { name: 'L-shaped' },
    { name: 'L-shaped' },
    { name: 'Upholstery Material' },
    { name: 'Fabric + Cotton' },
    { name: 'Fabric + Cotton' },
    { name: 'Upholstery Color' },
    { name: 'Bright Grey & Lion' },
    { name: 'Bright Grey & Lion' },
]

const product = [
    { name: 'Filling Material' },
    { name: 'Foam' },
    { name: 'Matte' },
    { name: 'Finish Type' },
    { name: 'Bright Grey & Lion' },
    { name: 'Bright Grey & Lion' },
    { name: 'Adjustable Headrest' },
    { name: 'No' },
    { name: 'Yes' },
    { name: 'Maximum Load Capacity' },
    { name: '280 KG' },
    { name: '300 KG' },
    { name: 'Origin of Manufacture' },
    { name: 'India' },
    { name: 'India' },
]
const dimension = [
    { name: 'Width' },
    { name: '265.32 cm' },
    { name: '265.32 cm' },
    { name: 'Height' },
    { name: '76 cm' },
    { name: '76 cm' },
    { name: 'Depth' },
    { name: '167.76 cm' },
    { name: '167.76 cm' },
    { name: 'Weight' },
    { name: '45 KG' },
    { name: '65 KG' },
    { name: 'Seat Height' },
    { name: '41.52 cm' },
    { name: '41.52 cm' },
    { name: 'Leg Height' },
    { name: '5.46 cm' },
    { name: '5.46 cm' },
]

const ProductCompare = () => {
    return (
        <div className='flex flex-col gap-8 px-44 py-12 sm:px-2 md:px-4'>
            <div className='flex sm:flex-col md:flex-col'>
                <div className='grid grid-cols-3 gap-12'>
                    <div>
                        <h2 className='text-base font-medium sm:text-sm'>Go to Product page for more Products</h2>
                        <button className='text-xs font-medium text-[#727272]'>View More</button>
                    </div>
                    {products.map((product) => (
                        <div>
                            <img src={product.image} alt="product 1" className='w-32 h-20' />
                            <h3 className='text-sm font-medium py-1'>{product.title}</h3>
                            <p className='text-xs font-medium'>{product.price}</p>
                        </div>
                    ))}
                </div>
                <select className='text-xs text-white bg-[#B88E2F] p-2 h-8 rounded sm:w-36 md:w-36'>
                    <option value=''>Choose a product</option>
                </select>
            </div>
            <div>
                <h2 className='text-lg font-medium my-2'>General</h2>
                <div className='grid grid-cols-3'>
                    {general.map((info) => (
                        <p className='text-sm font-normal py-2 sm:text-xs'>{info.name}</p>
                    ))}
                </div>
                <h2 className='text-lg font-medium my-2'>Product</h2>
                <div className='grid grid-cols-3'>
                    {product.map((info) => (
                        <p className='text-sm font-normal py-2 sm:text-xs'>{info.name}</p>
                    ))}
                </div>
                <h2 className='text-lg font-medium my-2'>Dimension</h2>
                <div className='grid grid-cols-3'>
                    {dimension.map((info) => (
                        <p className='text-sm font-normal py-2 sm:text-xs'>{info.name}</p>
                    ))}
                </div>
                <div className='grid grid-cols-4 mt-10'>
                    <button className='text-xs text-white bg-[#B88E2F] px-8 py-2 rounded w-32'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCompare
