
import { Button,FloatingLabel,Form } from 'react-bootstrap'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice'
import { useState } from 'react'

function App() {
 
  const [amount,setAmount]=useState("0")
  //doing inrement/decrement.. actions using useDispatch
  const dispatch =useDispatch()
// aceesing data from store using useSelector
const count = useSelector(state=>state.counterReducer.count)  
// checking any value is entered in text box
const checkAmount=()=>{
  if(amount){
   dispatch(incrementByAmount(amount))
  }else{
    alert('enter valid amount')
  }
}

  return (
    <>
     <div style={{backgroundColor:"black",height:"100vh"}} className="container-fuild d-flex justify-content-center align-items-center">
      <div style={{backgroundColor:"black",width:"600px"}} className="border rounded d-flex flex-column align-items-center">
        <h1 style={{color:"white",textAlign:'center',fontSize:"60px"}} className='mt-5'>{count}</h1>
        <div className="buttons d-flex mt-5 ">
        <Button onClick={()=>dispatch(decrement())} className='me-3' variant="warning">Decrement</Button>{' '}
        <Button onClick={()=>dispatch(reset())} className='me-3' variant="danger">Reset</Button>{' '}
        <Button onClick={()=>dispatch(increment())} className='me-3' variant="success">Increment</Button>{' '}
        </div>
        <div className="d-flex mt-5 mb-4">
        <FloatingLabel
        controlId="floatingInput"
        label="Enter the amount to be incremented!!"
        className="me-3"
        style={{width:"350px"}}

      >
        <Form.Control onChange={(e)=>setAmount(e.target.value)} type="email" placeholder="Enter the amount to be incremented!!" />
      </FloatingLabel>
      <Button onClick={checkAmount}  variant="primary">Increment by Amount</Button>{' '}
        </div>
      </div>
     </div>
    </>
  )
}

export default App
