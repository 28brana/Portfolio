import { ShieldCheck } from 'phosphor-react'
import React from 'react'

export default function StepZero({ nextStep }) {
    return (
        <div className='text-center'>
            <div className='flex justify-center'>
                <ShieldCheck size={32} color="blue" />
            </div>
            <p className='text-2xl font-extrabold mt-5'>Document Collection</p>
            <p className='text-sm mt-2 text-subtitle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <button className='info-btn' onClick={nextStep}>Processed</button>
        </div>
    )
}
