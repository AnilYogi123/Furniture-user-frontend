import React from 'react';
import ProductItem from '../Components/ProductItem';
import Banner from '../Components/Banner';
import ShopFilter from '../Components/ShopFilter';
import BannerButtom from '../Components/BannerButtom';
import { useNavigate } from 'react-router-dom';
import { useProductData } from '../hooks/useQueryData';


const Shop = () => {
    const navigate = useNavigate()
    const handleProductClick = (item) => {
        navigate('/product',{state:{item}})
    }
    const {data} = useProductData()
    const filterData = data?.data?.filter((item)=> !item?.isRohan)

    return (
        <div>
            <Banner title="Shop" />
            <ShopFilter />
            <div className='m-20'>
                <div className='grid grid-cols-4 gap-6 justify-center sm:grid-cols-1 md:grid-cols-2'>
                {filterData?.map((item, i) => {
                    return <ProductItem handleClick={()=>handleProductClick(item)} key={i} id={item.id} coverImg={item?.images?.[0]?.url} title={item.name} discount={item.discount} description={item.description} newPrice={item.price} oldPrice={item.oldPrice} />
                })}
                </div>
                {/* <div className='flex justify-center my-10 gap-5'>
                    <div className='bg-[#B88E2F] text-white px-4 py-2 rounded-xl text-sm'>1</div>
                    <div className='bg-[#F9F1E7] px-4 py-2 rounded-xl text-sm'>2</div>
                    <div className='bg-[#F9F1E7] px-4 py-2 rounded-xl text-sm'>3</div>
                    <div className='bg-[#F9F1E7] px-4 py-2 rounded-xl text-sm'>Next</div>
                </div> */}
            </div>
            <BannerButtom />
        </div>
    );
};

export default Shop;
