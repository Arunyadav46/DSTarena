import React from 'react'
import Banner from '../CartDetails/Banner'
import Content from '../CartDetails/Content'
import Contact from '../Node/Contact'
import Footer from '../Footer'

function Cart({cartAllProduct,setCartAllProduct ,setCartCount }) {
  return (
    <div>
        <Banner/>
        <Content cartAllProduct={cartAllProduct} setCartCount={setCartCount} setCartAllProduct={setCartAllProduct}/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Cart