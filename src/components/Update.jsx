import { nanoid } from 'nanoid'
import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { productcontext } from '../contexts/ProductContext'

const Update = () => {
    const [localProds, setlocalProds] = useState(JSON.parse(localStorage.getItem("products"))|| [])
    const [prods, setprods] = useContext(productcontext)

    const {id} = useParams()
    const prod = localProds.find(prod => prod.id === id)
    const navigate = useNavigate()


    const [title, settitle] = useState(prod.title)
    const [image, setimage] = useState(prod.image)
    const [desc, setdesc] = useState(prod.description)
    const [rate, setrate] = useState(prod.rate)
    const [count, setcount] = useState(prod.count)
    const [category, setcategory] = useState(prod.category)
    const [price, setprice] = useState(prod.price)

    const submitHandler = (e) => {

        e.preventDefault()
        // local prod updation
        const index = localProds.findIndex(prod=>prod.id ===id)
        const copyLocalProds = [...localProds]
        copyLocalProds[index]={id,title,image,desc,rate,count,category,price}
        setlocalProds(copyLocalProds)

        // context prod updation
        const index1 = prods.findIndex(prod=>prod.id ===id)
        const copyProds = [...prods]
        copyProds[index1]={id,title,image,desc,rate,count,category,price}
        setprods(copyProds)
        
        localStorage.setItem("products",JSON.stringify(copyLocalProds))

        settitle('')
        setimage('')
        setdesc('')
        setrate('')
        setcount('')
        setcategory("men's clothing")
        setprice('')
        navigate(`/product/${id}`)
        



        

    }

    return (
        <>
            <div className="w-full min-h-screen">
                <div className="back px-40 py-4 bg-gray-100 ">
                    <Link to='/'>
                        <h1 className="px-2 w-max cursor-pointer py-2 text-xl flex items-center gap-4">&#60; <span className='font-normal'>back</span></h1>
                    </Link>
                </div>
                <div className="w-[50%] mt-10 mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-64 before:h-40 before:absolute before:bg-slate-200 before:rounded-full before:-z-10 before:blur-2xl after:w-80 after:h-32 after:absolute after:bg-slate-200 after:rounded-full after:-z-10 after:blur-xl after:bottom-24 after:-right-12">
                    <h2 className="text-2xl text-sky-900 font-bold mb-6">Update Product</h2>

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
                            <label className="block text-sm font-medium text-gray-600" htmlFor="category"
                            >Category</label>
                            <select defaultValue={category} onChange={e => setcategory(e.target.value)} className='mt-1 p-2 w-full border rounded-md' name="" id="">
                                <option value="men's clothing">men's clothing</option>
                                <option value="women's clothing">women's clothing</option>
                                <option value="jewelery">jewelery</option>
                                <option value="electronics">electronics</option>
                            </select>
                        </div>


                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600" htmlFor="bio"
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
                                Update Product
                            </button>
                        </div>
                    </form>
                </div>

            </div>



        </>
    )
}

export default Update