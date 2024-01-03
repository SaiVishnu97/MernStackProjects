import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { addProducts,addProductsToCart,removeProductsFromCart } from '../redux'
function Shoppingbody() {

    const cartproducts=useSelector((output)=>{return output.product.cart;})
    const fullproducts=useSelector(output=>output.product.products)
    console.log(cartproducts)
    const dispatch=useDispatch()

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(output=>{
        console.log(output.data)  
        dispatch(addProducts(output.data))}
        )
    },[])
    function checkincart(prod)
    {
      let res=cartproducts.some((val)=>val.id===prod)
      console.log(res)
      return res;
    }

     function addToTheCart(product)
    {
      let count=1;
      cartproducts.forEach((val)=>{
        if(val.title===product.title)
          count=val.count+1})
      //console.log(count)
      dispatch(addProductsToCart(product,count))
      return count
    }
    function removeFromCart(product)
    {
      let count=1;
      cartproducts.forEach((val)=>{
        if(val.title===product.title)
          count=val.count-1})
      //console.log(count)
      dispatch(removeProductsFromCart(product,count))
      return count
    }
  return (
    <div className='outer'>
      {fullproducts.map((val,index)=>
      {
        return <div className="card" style={{fontSize: "10px",}}>
        <h6>{val.id}</h6>
        <img id="images" className="card-img-top" style={{height:"150px"}}src={val.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title" style={{fontSize: "10px", fontWeight: 700}}>{val.title.substring(0, 20)}</h5>
          <h6 style={{fontWeight: 800}}>INR.{Math.floor(val.price * 85)}</h6>
          <p className="card-text">{val.description.substring(0, 80)}</p>
          <button className="btn btn-primary" style={{fontSize: "15px",}} onClick={function()
          {
             addToTheCart(val)
          }}>ADD TO CART</button>
          <br></br>
          {checkincart(val.id)&&<DisplayPlusAndMinus cartprod={{val,cartproducts}} addToTheCart={addToTheCart} removeFromCart={removeFromCart}/>}
        </div>
      </div>
})
    }
    </div>
  )
}

export function DisplayPlusAndMinus({cartprod,addToTheCart,removeFromCart})
{
  let count
  cartprod.cartproducts.forEach((val1)=>{
    if(cartprod.val.id===val1.id)
    count=val1.count
  })

  return(<div style={{marginTop:"10px"}}>  <button type="button" onClick={()=>removeFromCart(cartprod.val)} className="btn btn-outline-success">-</button>
          <div className="count-display"><h6 style={{fontWeight: 800}}>{count}</h6></div>
          <button type="button" className="btn btn-outline-success" onClick={()=>addToTheCart(cartprod.val)}>+</button>
          </div>)

}
export default Shoppingbody
