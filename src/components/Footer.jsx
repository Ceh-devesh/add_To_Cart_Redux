import React from 'react'
// import {AiFillAmazonCircle,
//   AiFillGoogleCircle,
//   AiFillYoutube,
//   AiFillInstagram
// } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <h1>ShopCart</h1>
            <p>© Copyright 2020. All Rights Reserved.</p>
        </div>
        <div>
            <h5 className='h5'>Follow Us</h5>
            <div>
                <a href="https://youtube.com" target={'blank'} >Youtube</a>
                <a href="https://instagram.com" target={'blank'} >InstaGram</a>
                <a href="https://twitter.com" target={'blank'} >Twiiter</a>
                <a href="https://facebook.com" target={'blank'} >Facebook</a>
          
          
            </div>
        </div>
    </footer>
  )
}

export default Footer
