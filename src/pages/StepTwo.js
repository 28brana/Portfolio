import { ShieldCheck } from 'phosphor-react'
import React from 'react'

export default function StepTwo({ nextStep, handleChange, state }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    }
    return (
        <div>
            <p className='text-info text-base font-semibold'>Step 2</p>
            <h1 className='text-2xl font-extrabold'>Personal KYC</h1>
            <p className='text-subtitle'>You will receive the agreements for e-signing within 7 business days.</p>
            <form className='mt-8' onSubmit={handleSubmit}>

                <div>
                    <label className='text-base font-semibold'>Fathers Name<span className='text-red-500'>*</span></label>
                    <div className='mt-3'>
                        <input className='input-field' type="text" name="fathersName" placeholder='Enter your Father Name' onChange={handleChange} value={state.fathersName} required />
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='text-base font-semibold'>Residential Address<span className='text-red-500'>*</span></label>
                    <div className='mt-3'>
                        <textarea className='input-field [height:112px]' name='residentialAddress' placeholder='Enter Your Residential Address' onChange={handleChange} value={state.residentialAddress} required />
                    </div>
                </div>
                <button className='info-btn' >
                    Continue
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
