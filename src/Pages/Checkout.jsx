import React from 'react'
import Banner from '../Components/Banner'
import BannerButtom from '../Components/BannerButtom'
import CheckoutForm from '../Components/CheckoutForm'

const Checkout = () => {
    return (
        <div>
            <Banner title="Checkout" />
            <CheckoutForm />
            <BannerButtom />
        </div>
    )
}

export default Checkout
