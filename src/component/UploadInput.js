import React, { useState } from 'react'
import { uploadFileToBlob } from '../services/uploadBlob';

export default function UploadInput({ name, handleChange }) {
    const [label, setLabel] = useState('Click here to upload');
    const [hasError, setError] = useState(false);
    const maxSize = 1_048_576 * 4; // 4 MB

    const uploadFile = async (file) => {
        setLabel('Uploading ...');
        uploadFileToBlob(file).then((res) => {
            setLabel(file.name);
            handleChange(name, res);
        }).catch((err) => {
            console.log(err);
        })
    };
    return (
        <div className={`${hasError ? 'upload-field-error' : 'upload-field'} relative`}>
            <p className={`${hasError ? 'text-red-500' : 'text-info'} font-medium`}>{label}</p>
            <input type="file" accept="image/*,application/pdf" name={name} placeholder='Enter your Account No' className='opacity-0 absolute top-0 left-0 w-full h-full' required onChange={(e) => {
                // console.log(e.target.files[0])
                if (e.target.files[0]?.size > maxSize) {
                    setLabel('File is too Big (max size 4mb)');
                    e.target.value = [];
                    setError(true);
                } else {
                    setError(false);
                    uploadFile(e.target.files[0]);
                }
            }} />
        </div>
    )
}
