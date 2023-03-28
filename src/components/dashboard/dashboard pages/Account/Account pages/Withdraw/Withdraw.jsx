import React from 'react'
import './withdraw.scss'
import CInput from '../../../../../CInput/CInput'
import CButton from '../../../../../CButton/CButton'

const Withdraw = () => {
  const [details, setDetails] = React.useState({
    fullName: '',
    bankName: '',
    accountNumber: '',
    amount: ''
  })

  const handleSubmit = async (event)=>{
    event.preventDefault()
    try{
        setDetails({
          fullName: '',
          bankName: '',
          accountNumber: '',
          amount: ''
        })
     
    } catch(error){
        console.log(error)
    }
}

  const handleChange =(event)=>{
    const {name, value} = event.target
    setDetails(
        prevInfo =>({
            ...prevInfo,
            [name]: value
        })
    )
}

  return (
    <div className='withdraw'>
    <h3 className="title">Withdraw</h3>
    <form onSubmit={handleSubmit} className='form'>
    <CInput
    type='text'
    name='fullName'
    value={details.fullName}
    required={true}
    id='fullName'
    label="Account Name"
    handleChange={handleChange}
    />
    <CInput
    type='text'
    name='bankName'
    value={details.bankName}
    required={true}
    id='bankName'
    label="Bank Name"
    placeholder="bank name without abbreviations"
    handleChange={handleChange}
    />
    <CInput
    type='text'
    name='accountNumber'
    value={details.accountNumber}
    required={true}
    id='accountNumber'
    label="Account Number"
    handleChange={handleChange}
    />
    <CInput
    type='text'
    name='amount'
    value={details.amount}
    required={true}
    id='amount'
    label="Amount"
    handleChange={handleChange}
    />

    <CButton text='Next'/>
    </form>
    </div>
  )
}

export default Withdraw