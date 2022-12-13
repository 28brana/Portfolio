import { ShieldCheck } from 'phosphor-react'
import React from 'react'
import UploadInput from '../component/UploadInput'

export default function StepFive({ handleSetState, handleFinalUpload }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleFinalUpload();
    }
    return (
        <div>
            <p className='text-info text-base font-semibold'>Step 5</p>
            <h1 className='text-2xl font-extrabold'>Document Collection</h1>
            <p className='text-subtitle'>You will receive the agreements for e-signing within 7 business days.</p>
            <form className='mt-8' onSubmit={handleSubmit}>

                <div>
                    <label className='text-base font-semibold'>Identity Proof
                        <span className='text-red-500'>*</span></label>
                    <p className='text-subtitle'>Please upload image of Passport or Driving License or Election Card (Any one)</p>
                    <div className='mt-3'>
                        <UploadInput name={'identityProof'} handleChange={handleSetState} />
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='text-base font-semibold'>Proof of Residence
                        <span className='text-red-500'>*</span></label>
                    <p className='text-subtitle'>Please upload a clear image of Electricity Bill / Bank Statement / Mobile Bill / Telephone Bill (Any One)</p>
                    <div className='mt-3'>
                        <UploadInput name={'proofOfResidence'} handleChange={handleSetState} />
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='text-base font-semibold'>Passport Size Photograph
                        <span className='text-red-500'>*</span></label>
                    <div className='mt-3'>
                        <UploadInput name={'passportSizePhoto'} handleChange={handleSetState} />
                    </div>
                </div>
                <button className='info-btn' >
                    Submit
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
