import React from 'react'

const InputField = ({ label, type, htmlfor, id, placeholder, register, required, className = 'border border-[#9F9F9F] p-2 text-sm w-72 rounded-md' }) => {
    return (
        <div className='flex flex-col gap-2 py-3'>
            <label htmlFor={htmlfor} className='text-xs font-medium'>{label}</label>
            <input type={type} id={id} placeholder={placeholder} className={className} />
        </div>
    )
}

export default InputField
