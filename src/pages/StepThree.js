import { ShieldCheck } from 'phosphor-react'
import React from 'react'

export default function StepThree({ nextStep, handleChange, state }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    }
    return (
        <div>
            <p className='text-info text-base font-semibold'>Step 3</p>
            <h1 className='text-2xl font-extrabold'>Bank Account Verification</h1>
            <p className='text-subtitle'>Enter the Account Details where you would like to recieve returns in future</p>
            <form className='mt-8' onSubmit={handleSubmit}>

                <div>
                    <label className='text-base font-semibold'>Account Number
                        <span className='text-red-500'>*</span></label>
                    <div className='mt-3'>
                        <input className='input-field' type="text" name="bankAccountNumber" placeholder='Enter your Account No' value={state.bankAccountNumber} onChange={handleChange} required />
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='text-base font-semibold'>IFSC Code<span className='text-red-500'>*</span></label>
                    <div className='mt-3'>
                        <input className='input-field' type="text" name="bankIfscCode" placeholder='Enter your IFSC Code' value={state.bankIfscCode} onChange={handleChange} required />
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='text-base font-semibold'>UPI ID</label>
                    <div className='mt-3'>
                        <input className='input-field' type="text" name="upiId" placeholder='Enter your UPI ID (Optional)' value={state.upiId} onChange={handleChange} />
                    </div>
                </div>
                <button className='info-btn' >
                    Verify
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
