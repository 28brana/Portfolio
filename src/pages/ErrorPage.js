import { Warning } from 'phosphor-react'
import React from 'react'

export default function ErrorPage() {
    return (
        <div className='text-center'>
            <div className='flex justify-center'><Warning size={48} weight="fill" color='#FF3333' /></div>
            <h1 className='text-2xl font-extrabold mt-5'>Error</h1>
            <p className='text-subtitle mt-4'>Our Site is facing some issue at the moment. Please try to fill this form after sometime</p>
        </div>
    )
}
