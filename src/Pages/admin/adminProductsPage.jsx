import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa";



export default function AdminProductsPage(){
    return(
        <div>
            <Link
            to="/admin/add-product"
            className="bg-accent text-white h-[50px] w-[50px] flex justify-center items-center text-2xl rounded-[20px] hover:rounded-full fixed bottom-[30px] right-[30px]"  >
                <FaPlus />
            </Link>
        </div>
    )
}