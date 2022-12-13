import { ShieldCheck } from 'phosphor-react'
import React from 'react'

export default function StepOne({ nextStep, handleChange, state }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    }
    return (
        <div>
            <p className='text-info text-base font-semibold'>Step1</p>
            <h1 className='text-2xl font-extrabold'>LLP Document Collection</h1>
            <p className='text-subtitle'>You will receive the agreements for e-signing within 7 business days.</p>
            <form className='mt-8' onSubmit={handleSubmit}>
                <div>
                    <label className='text-base font-semibold'>Full Name <span className='text-red-500'>*</span></label>
                    <div className='flex gap-3 mt-3'>
                        <input className='input-field' type="text" name="firstName" placeholder='First Name' required onChange={handleChange} value={state.firstName} />
                        <input className='input-field' type="text" name="lastName" placeholder='Last Name' required onChange={handleChange} value={state.lastName} />
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='text-base font-semibold'>Mobile No <span className='text-red-500'>*</span></label>
                    <div className='mt-3'>
                        <input className='input-field' type="text" name="mobileNumber" placeholder='Enter your Mobile No' required onChange={handleChange} value={state.mobileNumber} pattern={"^[0-9]{10}$"} title="Please enter valid phone number" />
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='text-base font-semibold'>Mail ID <span className='text-red-500'>*</span></label>
                    <div className='mt-3'>
                        <input className='input-field' type="email" name="emailId" placeholder='Enter your Emai ID' required onChange={handleChange} value={state.emailId} />
                    </div>
                </div>
                <button type='submit' className='info-btn'  >
                    Proceed
                </button>
                <div className='flex mt-6 flex-col items-center justify-end gap-3'>
                    <ShieldCheck size={26} color={"#808080"} />
                    <p className='text-center text-xs [color:#808080]'>
                        Your Data is completely <br /> safe with Sateeq
                    </p>
                </div>
            </form>
        </div>
    )
}
