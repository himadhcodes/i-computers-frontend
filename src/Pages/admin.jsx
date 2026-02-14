import { Link, Route, Routes } from "react-router-dom"

export default function AdminPage(){
    return(

        <div className="w-full h-full flex flex-row">

            <div className="w-75 h-full bg-amber-800 flex flex-col">
                <h1 className="font-bold">Using A tag</h1>
                <a href="/admin/">Oders Page</a>
                <a href="/admin/products">Product Page</a>
                <a href="/admin/users">users Page</a>
                <h1 className="font-bold">Using Link tag</h1>
                <Link to="/admin/">Oders</Link>
                <Link to="/admin/products">Product</Link>
                <Link to="/admin/users">users</Link>
            </div>
            
            <div className="w-[calc(100%-300px)] h-full bg-cyan-300">
                <Routes>
                    <Route path="/" element={<h1>Oders Page</h1>}/>
                    <Route path="/products" element={<h1>Products Page</h1>}/>
                    <Route path="/users" element={<h1>Users Page</h1>}/>
                </Routes>
            </div>
            
        </div>
    )
}
