import React from 'react'

const LoadingDetails = () => {
    return (
        <>
            <div className="animate-pulse h-screen  justify-center flex items-center gap-8 w-full">
                <div>
                    <div className="w-[28vw] aspect-square bg-slate-200 rounded-md"></div>
                </div>
                <div className="w-1/2 space-y-4">

                    <div className="h-7 bg-slate-200 w-1/2 rounded-md"></div>
                    <div className="h-7 bg-slate-200 w-1/2 rounded-md"></div>
                    <div className="h-7 bg-slate-200 w-1/2 rounded-md"></div>
                    <div className="h-7 bg-slate-200 w-1/2 rounded-md"></div>
                </div>
            </div>
        </>
    )
}

export default LoadingDetails