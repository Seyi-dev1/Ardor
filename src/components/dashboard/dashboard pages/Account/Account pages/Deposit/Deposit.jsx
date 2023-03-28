import React from 'react'
import './Deposit.scss'
import CInput from '../../../../../CInput/CInput'
import CButton from '../../../../../CButton/CButton'

const Deposit = () => {
  const [details, setDetails] = React.useState({
    amount: '',
    plan: '',
    country: '',
    paymentPath: ''
  })

  const handleChange =(event)=>{
    const {name, value} = event.target

    setDetails(
      prevInfo =>({
          ...prevInfo,
          [name]: value
      })
  )
  }

  const handleSubmit = async(event)=>{
    event.preventDefault()

    try{
      setDetails({
        amount: '',
        plan: '',
        country: '',
        paymentPath: ''
      })
   
  } catch(error){
      console.log(error)
  }
  }
  return (
    <div className='deposit'>
    <h3 className="title">Deposit Funds</h3>
    <form onSubmit={handleSubmit} className='form'>
     <CInput
    type='text'
    name='amount'
    value={details.amount}
    required={true}
    id='amount'
    label="Amount"
    handleChange={handleChange}
    />
    <CInput
    type='text'
    name='plan'
    value={details.plan}
    required={true}
    id='plan'
    label="Investment plan"
    handleChange={handleChange}
    />
    <CInput
    type='text'
    name='country'
    value={details.country}
    required={true}
    id='country'
    label="country"
    handleChange={handleChange}
    />
    <CInput
    type='text'
    name='paymentPath'
    value={details.paymentPath}
    required={true}
    id='paymentPath'
    label="Payment options"
    handleChange={handleChange}
    />
    <CButton text='Pay Now'/>
    </form>
    </div>
  )
}

export default Deposit