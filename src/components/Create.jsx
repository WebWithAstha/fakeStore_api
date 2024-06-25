import { nanoid } from 'nanoid'
import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { productcontext } from '../contexts/ProductContext'

const Create = () => {
    const [prods,setprods] = useContext(productcontext)
    const [localProds, setlocalProds] = useState(JSON.parse(localStorage.getItem("products"))|| [])
    const navigate = useNavigate()


    const [title, settitle] = useState('')
    const [image, setimage] = useState('')
    const [desc, setdesc] = useState('')
    const [rate, setrate] = useState('')
    const [count, setcount] = useState('')
    const [category, setcategory] = useState("men's clothing")
    const [price, setprice] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        const updatedProd = {id:nanoid(),title,image,description:desc,rating:{rate,count},category,price}
        setprods([updatedProd,...prods])
        localStorage.setItem("products", JSON.stringify([updatedProd,...localProds]))
        settitle('')
        setimage('')
        setdesc('')
        setrate('')
        setcount('')
        setcategory("men's clothing")
        setprice('')
        navigate("/")
        



        

    }

    return (
        <>
            <div className="w-full min-h-screen">
                <div className="back px-40 py-4 bg-slate-100 ">
                    <Link to='/'>
                        <h1 className="px-2 w-max cursor-pointer py-2 text-xl flex items-center gap-4">&#60; <span className='font-normal'>back</span></h1>
                    </Link>
                </div>
                <div className="w-[50%] mt-10 mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-64 before:h-40 before:absolute before:bg-slate-200 before:rounded-full before:-z-10 before:blur-2xl after:w-80 after:h-32 after:absolute after:bg-slate-200 after:rounded-full after:-z-10 after:blur-xl after:bottom-24 after:-right-12">
                    <h2 className="text-2xl text-slate-900 font-bold mb-6">Upload Product</h2>

                    <form onSubmit={submitHandler} method="post" action="#">
                        <div className="mb-4">
                            <input onChange={(e) => settitle(e.target.value)} value={title} className="mt-1 shadow-inner p-2 w-full border rounded-md" type="text" placeholder='Title' />
                        </div>
                        <div className="mb-4">
                            <input onChange={e => setimage(e.target.value)} value={image} className="mt-1 p-2 w-full border rounded-md" type="text" placeholder='Img Url' />
                        </div>
                        <div className="mb-4">
                            <input onChange={e => setprice(e.target.value)} value={price} className="mt-1 p-2 w-full border rounded-md" type="Number" min="1" max="100000" placeholder='Price' />
                        </div>
                        <div className="mb-4">
                            <input onChange={e => setrate(e.target.value)} value={rate} className="mt-1 p-2 w-full border rounded-md" type="Number" min="0" max="5" placeholder='Customer rate' />
                        </div>
                        <div className="mb-4">
                            <input onChange={e => setcount(e.target.value)} value={count} className="mt-1 p-2 w-full border rounded-md" type="Number" min="0" max="100000" placeholder='Rate count' />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-600" htmlFor="category"
                            >Category</label>
                            <select defaultValue={category} onChange={e => setcategory(e.target.value)} className='mt-1 p-2 w-full border rounded-md' name="" id="">
                                <option value="men's clothing">men's clothing</option>
                                <option value="women's clothing">women's clothing</option>
                                <option value="jewelery">jewelery</option>
                                <option value="electronics">electronics</option>
                            </select>
                        </div>


                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-600" htmlFor="bio"
                            >Description</label>
                            <textarea
                                onChange={e => setdesc(e.target.value)}
                                value={desc}
                                className="mt-1 p-2 w-full border rounded-md"
                                rows="3"
                                name="bio"
                                id="bio"
                            ></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button
                                className="[background:linear-gradient(144deg,#9a9ea3,#7b89b0_50%,#3b4256)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                                type="submit"
                            >
                                Upload Product
                            </button>
                        </div>
                    </form>
                </div>

            </div>



        </>
    )
}

export default Create