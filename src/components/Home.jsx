import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {
    const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
const img3 =
'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg'
const img4 =
'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg'
const img5 =
'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'
const img6 =
'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
const img7 =
'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'
const img8 =
'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'
const img9 =
'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg'
const img10 =
'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg'
const productList =[
    {
        name:'Apple Macbook Air',
        price:1200000,
        imgSrc:img1,
        id:'234267'

    },
    {
        name:'Neeman shoes',
        price:2000,
        imgSrc:img2,
        id:'2345'

    },
    {
        name:'Solid Gold Petite Micropave',
        price:1000,
        imgSrc:img3,
        id:'233'

    },
    {
        name:'"WD 2TB Elements Portable External Hard Drive - USB 3.0',
        price:4000,
        imgSrc:img4,
        id:'2363'

    },
    {
        name:'"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
        price:7000,
        imgSrc:img5,
        id:'238963'

    },
    {
        name:'Mens Cotton T-shirt',
        price:1500,
        imgSrc:img6,
        id:'23613'

    },
    {
        name:'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor',
        price:8000,
        imgSrc:img7,
        id:'23631'

    },
    {
        name:`BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats`,
        price:2400,
        imgSrc:img8,
        id:'232673'

    },
    {
        name:`MBJ Women's Solid Short Sleeve Boat Neck V`,
        price:4000,
        imgSrc:img9,
        id:'236243'

    },
    {
        name:`Opna Women's Short Sleeve Moisture`,
        price:4000,
        imgSrc:img10,
        id:'25662'

    },
   ];

   const dispatch = useDispatch()

const addToCartHandler = (options)=>{
    // console.log(options)
    dispatch({type:'addToCart', payload:options})
    dispatch({type:'calculatePrice'});
    toast.success('Added To Cart')
}
  return (
    <div className='home' >
      
    {
        productList.map(i=>(<ProductCard 
            key={i.id}
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
            handler={addToCartHandler} />
            

            ))
    }


    </div>
  )
}
const ProductCard = ({name, id, price, handler, imgSrc})=>{
  return       (
        <div className='productcard' > 
            <img src={imgSrc} alt="" />
            <p>{name}</p>
            <h4>₹{price}/-</h4>
            <button onClick={()=>handler({name, price, id,  quantity:1, imgSrc})} >Add To Cart</button>
            
        </div>
     )
}
export default Home
