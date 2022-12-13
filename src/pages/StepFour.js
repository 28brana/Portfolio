import { ShieldCheck } from 'phosphor-react'
import React from 'react'
import UploadInput from '../component/UploadInput'

export default function StepFour({ nextStep, handleSetState }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    }


    return (
        <div>
            <p className='text-info text-base font-semibold'>Step 4</p>
            <h1 className='text-2xl font-extrabold'>Personal KYC</h1>
            <p className='text-subtitle'>You will receive the agreements for e-signing within 7 business days.</p>
            <form className='mt-8' onSubmit={handleSubmit}>
                <div>
                    <label className='text-base font-semibold'>Aadhar Card (Front)
                        <span className='text-red-500'>*</span></label>
                    <div className='mt-3'>
                        <UploadInput name={'adhaarCardFront'} handleChange={handleSetState} />
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='text-base font-semibold'>Aadhar Card (Back)
                        <span className='text-red-500'>*</span></label>
                    <div className='mt-3'>
                        <UploadInput name={'adhaarCardBack'} handleChange={handleSetState} />
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='text-base font-semibold'>PAN Card
                        <span className='text-red-500'>*</span></label>
                    <div className='mt-3'>
                        <UploadInput name={'panCard'} handleChange={handleSetState} />
                    </div>
                </div>
                <button className='info-btn'>
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
