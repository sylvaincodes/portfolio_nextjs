import React from 'react'
import { LoadingIcon } from './icons'

const Loader = () => {
    return (
        <div className='min-h-screen w-full bg-white flex justify-center items-center'>
            <div role="status">
                <LoadingIcon />
            </div>
        </div>
    )
}

export default Loader
