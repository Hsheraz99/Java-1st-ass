import React from "react";
import Cards from "./componet/Cards";
import  "./App.css"

function App(){
  const cardDetails=[
    {
      product:"1",
      Name:"civic",
      Price:"500000",
      Tpye:"Stylish",
      Quantity:"5",
      Description:"THis car is very best this car is very new inventon i am very like to this car",
      <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80" />
    }
    {
      product:"2",
      Name:"civic",
      Price:"500000",
      Tpye:"Stylish",
      Quantity:"5",
      Description:"THis car is very best this car is very new inventon i am very like to this car",
      <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80" />
    }
    {
      product:"3",
      Name:"civic",
      Price:"500000",
      Tpye:"Stylish",
      Quantity:"5",
      Description:"THis car is very best this car is very new inventon i am very like to this car"
      <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80" /
    }
  ]
}
const Cards=(props)=>{
  const{Name,image,price,type,quantity,description}=props.item;
  return(
    <div className="card" key={props.key}>
      <h2>{Name}</h2>
      <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80" />
   <div>
    <p>price:{price}</p>
    <p>Name:{name}</p>
    <p>Quantity:{quantity}</p>
   </div>
   <button onClick={()=>props.showAlert(props.item))>Add to Cart</button>
   </div>
  )
}
}
export default App;
