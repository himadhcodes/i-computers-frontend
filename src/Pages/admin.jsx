import { Link, Route, Routes } from "react-router-dom"
import { FaListUl} from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";
import { LuUsersRound } from "react-icons/lu";
import AdminProductsPage from "./admin/adminProductsPage";
import AdminAddProductPage from "./admin/adminAddProductPage";


export default function AdminPage(){
    

    return(

        <div className="w-full h-full flex flex-row bg-accent">
            <div className="w-75 h-full bg-accent flex flex-col text-white text-xl">
                
                <h1 className="text-3xl font-bold p-5 border-b-4 border-white">Admin Panel</h1>
                <Link className="flex w-full p-[10px] gap-3 items-center hover:bg-white hover:text-accent" to="/admin/"><FaListUl />Oders</Link>
                <Link className="flex w-full p-[10px] gap-3 items-center hover:bg-white hover:text-accent" to="/admin/products"><MdOutlineInventory2 /> Product</Link>
                <Link className="flex w-full p-[10px] gap-3 items-center hover:bg-white hover:text-accent" to="/admin/users"><LuUsersRound />users</Link>
            </div>
            
            <div className="w-[calc(100%-300px)] h-full border-8 border-accent rounded-2xl bg-primary p-4 overflow-y-scroll hide-scroll-track">
                <Routes>
                    <Route path="/" element={<h1>Oders Page</h1>}/>
                    <Route path="/products" element={<AdminProductsPage/>}/>
                    <Route path="/add-product" element={<AdminAddProductPage />}/>
                    <Route path="/users" element={<h1>Users Page</h1>}/>
                </Routes>
            </div>
            
        </div>
    )
}
