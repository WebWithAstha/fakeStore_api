import React from 'react'

const LoadingHome = () => {
    return (
        <>
            <div className="w-full relative">

                <div className="prods flex-1 flex md:flex-row flex-col gap-8">

                    <div className="card cursor-pointer shrink-0 group bg-slate-300 border p-4 md:w-[27vw] lg:w-48">
                        <div className="img w-full h-48 bg-slate-200 mb-2 p-6">
                        </div>
                        <div className="h-6 w-[70%] bg-slate-200"></div>
                    </div>
                    <div className="card cursor-pointer shrink-0 group bg-slate-300 border p-4 md:w-[27vw] lg:w-48">
                        <div className="img w-full h-48 bg-slate-200 mb-2 p-6">
                        </div>
                        <div className="h-6 w-[70%] bg-slate-200"></div>
                    </div>
                  
                    
                    

                </div>

            </div>

        </>
    )
}

export default LoadingHome