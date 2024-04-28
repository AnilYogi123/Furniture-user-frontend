import React, { useState } from 'react'
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import star from '../assets/fullstar.png'
import halfStar from '../assets/half-star.png'
import facebook from '../assets/share-facebook.png'
import linkedin from '../assets/share-linkedin.png'
import twitter from '../assets/share-twitter.png'

const ProductDisplay = () => {
    const [selectedImage, setSelectedImage] = useState(product1)
    const images = [product1, product2, product3, product4]
    return (
        <div>
            <div className='flex px-28 py-16 gap-24 sm:flex-col md:flex-col sm:px-5 sm:gap-2 md:gap-6'>
                <div className='flex gap-10 sm:gap-2'>
                    <div className='flex flex-col gap-6'>
                        {images.map((item) => {
                            return <img onClick={() => setSelectedImage(item)} src={item} alt="Image 1" className='mini-image bg-[#F9F1E7] w-16 h-14 cursor-pointer' />
                        })}
                    </div>
                    <div>
                        <img src={selectedImage} alt="Image 1" id='displayImage' className='cursor-pointer' />
                    </div>
                </div>
                <div className='w-96 flex flex-col gap-2'>
                    <h2 className='text-2xl	font-normal'>Asgaard sofa</h2>
                    <p className='text-lg font-medium text-[#9F9F9F]'>Rs. 250,000</p>
                    <div className="rating flex gap-1">
                        <img src={star} alt="star" className='w-3.5 h-3.5' />
                        <img src={star} alt="star" className='w-3.5 h-3.5' />
                        <img src={star} alt="star" className='w-3.5 h-3.5' />
                        <img src={star} alt="star" className='w-3.5 h-3.5' />
                        <img src={halfStar} alt="star" className='w-3.5 h-3.5' />
                    </div>
                    <p className='text-xs font-normal'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                    <div className="size">
                        <p className='text-[#9F9F9F] text-xs mb-1'>Size</p>
                        <div className='flex gap-4'>
                            <div className='text-sm text-white bg-[#B88E2F] px-2 rounded'>S</div>
                            <div className='text-sm bg-[#F9F1E7] px-2 rounded'>L</div>
                            <div className='text-sm  bg-[#F9F1E7] px-2 rounded'>XL</div>
                        </div>
                    </div>
                    <div className="color">
                        <p className='text-[#9F9F9F] text-xs'>Color</p>
                    </div>
                    <div className='flex gap-4'>
                        <input type="number" defaultValue={1} min={1} className='border-2 border-gray-200 w-16 h-10 p-4 rounded-lg' />
                        <button className='border-2 border-black h-10 py-1 px-6 rounded-xl'>Add to Cart</button>
                        <button className='border-2 border-black h-10 py-1 px-6 rounded-xl'>+ Compare</button>
                    </div>
                    <hr className='my-10 sm:my-5' />
                    <div className='flex gap-4'>
                        <p className='text-sm text-[#9F9F9F]'>SKU:</p>
                        <p className='text-sm text-[#9F9F9F]'>SS001</p>
                    </div>
                    <div className='flex gap-4'>
                        <p className='text-sm text-[#9F9F9F]'>Category:</p>
                        <p className='text-sm text-[#9F9F9F]'>Sofas</p>
                    </div>
                    <div className='flex gap-4'>
                        <p className='text-sm text-[#9F9F9F]'>Tags:</p>
                        <p className='text-sm text-[#9F9F9F]'>Sofa, Chair, Home, Shop</p>
                    </div>
                    <div className='flex gap-4'>
                        <p className='text-sm text-[#9F9F9F]'>Share:</p>
                        <img src={facebook} alt="facebook" className='w-4 h-4' />
                        <img src={linkedin} alt="linkedin" className='w-4 h-4' />
                        <img src={twitter} alt="twitter" className='w-4 h-4' />
                    </div>
                </div>
            </div>
            <div>
                <hr className='my-10 sm:my-5' />
                <div className='flex gap-4 justify-center'>
                    <button className='text-lg font-medium'>Description</button>
                    <button className='text-[#9F9F9F] text-lg font-normal'>Additional Information</button>
                    <button className='text-[#9F9F9F] text-lg font-normal'>Reviews [5]</button>
                </div>
                <div className='py-10 px-28 sm:px-5'>
                    <p className='text-xs text-[#9F9F9F] font-normal'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <br />
                    <p className='text-xs text-[#9F9F9F] font-normal'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
