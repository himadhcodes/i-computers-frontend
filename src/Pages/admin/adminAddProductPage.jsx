import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function AdminAddProductPage(){

    const [productId , setProductId] = useState()
    const [name , setName] = useState()
    const [description , setDescription] = useState()
    const [altName , setAltName] = useState()
    const [price , setPrice] = useState()
    const [labelledPrice , setLabelledPrice] = useState()
    const [catagory , setCatagory] = useState()
    const [brand , setBrand] = useState()
    const [model , setModel] = useState()
    const [isVisible , setIsVisible] = useState()
    

    const navigate = useNavigate()

    async function handleAddProduct(){
        try{
            const token = localStorage.getItem("token")
            if(token == null){
                toast.error("Please Login")
                navigate("/login")
                return;
            }

            await axios.post(import.meta.env.VITE_API_URL+"/products/" ,{
                productId: productId,
                name: name,
                description: description,
                altName: altName,
                price: price,
                labelledPrice: labelledPrice,
                catagory: catagory,
                brand: brand,
                model: model,
                isVisible: isVisible,
            }, {headers: {Authorization : "Bearer "+token}}
         )
         navigate("/admin/products")

        }catch(err){
            toast.error(err?.response?.data?.message || "Failed to Add Product");
            return;
        }
    }

    return(

        <div className="w-full max-h-full flex flex-wrap items-start  overflow-y-scroll hide-scroll-track">
            <h1 className="w-full text-3xl font-bold mb-4 sticky top-0 bg-primary"> Add Product </h1>
            
            <div className="w-[50%]   h-[120px] flex flex-col">
                <label className="font-bold ml-2">Product ID</label>
                <input value={productId} onChange={(e)=>{setProductId(e.target.value)}} placeholder="Ex: ID001" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:bg-accent/5 outline-none"/>
            </div>

            <div className="w-[50%]   h-[120px] flex flex-col">
                <label className="font-bold ml-2">Product Name</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Ex: Gaming RGB Keyboard" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:bg-accent/5 outline-none"/>
            </div>

            <div className="w-full h-[170px] flex flex-col">
                <label className="font-bold ml-2">Description</label>
                <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Ex: Gaming RGB Keyboard" className="border-4 border-accent rounded-[10px] h-[100px] p-2 m-2 focus:bg-accent/5 outline-none"></textarea>
            </div>

            <div className="w-[100%]   h-[120px] flex flex-col">
                <label className="font-bold ml-2">Alt Name (Coma Seperated)</label>
                <input value={altName} onChange={(e)=>{setAltName(e.target.value)}} placeholder="Ex: Keyboard,Wireless,Gaming" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:bg-accent/5 outline-none"/>
            </div>

            <div className="w-[50%]   h-[120px] flex flex-col">
                <label className="font-bold ml-2">Price</label>
                <input value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Ex: 15000" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:bg-accent/5 outline-none"/>
            </div>

            <div className="w-[50%]   h-[120px] flex flex-col">
                <label className="font-bold ml-2">Lablled Price</label>
                <input value={labelledPrice} onChange={(e)=>{setLabelledPrice(e.target.value)}} placeholder="Ex: 15000" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:bg-accent/5 outline-none"/>
            </div>

            <div className="w-[25%]   h-[120px] flex flex-col">
                <label className="font-bold ml-2">Catogry</label>
                <select value={catagory} onChange={(e)=>{setCatagory(e.target.value)}} className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:bg-accent/5 outline-none" >
                    <option value="Option 1">Option 1</option>
                    <option value="Option 4">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    
                    <option>Option 4</option>
                </select>
            </div>

            <div className="w-[25%]   h-[120px] flex flex-col">
                <label className="font-bold ml-2">Model</label>
                <select value={model} onChange={(e)=>{setModel(e.target.value)}} className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:bg-accent/5 outline-none" >
                    <option value="Option 1">Option 1</option>
                    <option value="Option 4">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
            </div>

            <div className="w-[25%]   h-[120px] flex flex-col">
                <label className="font-bold ml-2">Brands</label>
                <select value={brand} onChange={(e)=>{setBrand(e.target.value)}} className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:bg-accent/5 outline-none" >
                    <option value="Option 1">Option 1</option>
                    <option value="Option 4">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
            </div>

            <div className="w-[25%]   h-[120px] flex flex-col">
                <label className="font-bold ml-2">isVisble</label>
                <select value={isVisible} oncChange={(e)=>{setIsVisible(e.target.value)}} className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:bg-accent/5 outline-none" >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>

            <div className="w-full h-[80px] bg-white sticky bottom-0 rounded-b-2xl flex justify-end items-center p-4 gap-4 ">
                <button className="bg-gray-400 text-white font-bold px-6 py-3 rounded-[10px] hover:bg-gray-500">Cancel</button>
                <button onClick={(handleAddProduct)} className="bg-accent text-white font-bold px-6 py-3 rounded-[10px] hover:bg-secondery">Add Product</button>
            </div>

        </div>
    )
}