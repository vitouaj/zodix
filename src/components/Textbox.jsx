import React from 'react'

export default function (props) {
    return (
        <div className='max-w-sm rounded shadow-xl mx-auto my-8 py-4 px-4 border border-black-200 h-auto flex-col items-center'>
            <div className='container'>
                <p className='text-black-500'>{props.content}</p>
            </div>
        </div>
    )
}