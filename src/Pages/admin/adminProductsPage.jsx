import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import getFormattedPrice from "../../../utils/price-format";

{/*const smapleProducts = [
  {
    productId: "P1001",
    name: "Wireless Bluetooth Headset",
    description: "High quality wireless headset with noise cancellation.",
    altName: ["Bluetooth Headphones", "Wireless Headset"],
    price: 8500,
    labelledPrice: 9900,
    catagory: "Electronics",
    images: [
      "/images/headset-1.png",
      "/images/headset-2.png"
    ],
    isVisible: true,
    brand: "SoundMax",
    model: "SX-900"
  },
  {
    productId: "P1002",
    name: "Gaming Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard for professional gamers.",
    altName: ["Mechanical Keyboard", "Gaming Keyboard"],
    price: 12500,
    labelledPrice: 14900,
    catagory: "Electronics",
    images: [
      "/images/keyboard-1.png",
      "/images/keyboard-2.png"
    ],
    isVisible: true,
    brand: "KeyPro",
    model: "MK-87"
  },
  {
    productId: "P1003",
    name: "Men's Casual T-Shirt",
    description: "Premium cotton casual t-shirt for everyday wear.",
    altName: ["Casual Tee", "Cotton T-Shirt"],
    price: 2500,
    labelledPrice: 3200,
    catagory: "Clothing",
    images: [
      "/images/tshirt-1.png",
      "/images/tshirt-2.png"
    ],
    isVisible: true,
    brand: "UrbanStyle",
    model: "Summer Fit"
  },
  {
    productId: "P1004",
    name: "Smart LED TV 43 Inch",
    description: "4K Ultra HD Smart LED TV with built-in streaming apps.",
    altName: ["4K Smart TV", "LED Television"],
    price: 125000,
    labelledPrice: 139000,
    catagory: "Electronics",
    images: [
      "/images/tv-1.png",
      "/images/tv-2.png"
    ],
    isVisible: false,
    brand: "ViewTech",
    model: "VT-43UHD"
  },
  {
    productId: "P1005",
    name: "Running Shoes",
    description: "Lightweight and comfortable running shoes for daily workouts.",
    altName: ["Sports Shoes", "Jogging Shoes"],
    price: 7800,
    labelledPrice: 9500,
    catagory: "Footwear",
    images: [
      "/images/shoes-1.png",
      "/images/shoes-2.png"
    ],
    isVisible: true,
    brand: "FastTrack",
    model: "RunPro X"
  }
]; */}
export default function AdminProductsPage(){

    const [products , setProducts] = useState([])

    useEffect(
      ()=>{
        const token = localStorage.getItem("token")

        axios.get(import.meta.env.VITE_API_URL+"/products" ,
          { headers: { Authorization: "Bearer " + token,}, }
        
        ).then(
          (response)=>{
            setProducts(response.data)
          }
        )
      } , []
    );

    return(

        <div>
            {/* Plain Table 
            <table>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Labled</th>
                        <th>Catogory</th>
                        <th>Image</th>
                        <th>Visibility</th>
                        <th>Brand</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody>
                    {smapleProducts.map(
                        (item)=>{
                            return(
                                <tr key={item.productId}>

                                    <td>{item.productId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.labelledPrice}</td>
                                    <td>{item.catagory}</td>
                                    <td><img src={item.images[0]} alt={item.name} /></td>
                                    <td>{item.isVisible}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.model}</td>

                                </tr> )
                        }
                    )}
                </tbody>
            </table> */}

            {/*ChatGpt V1*/}
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
  <thead className="bg-secondery text-white text-sm uppercase tracking-wider">
    <tr>
      <th className="px-6 py-4 text-left">Product Id</th>
      <th className="px-6 py-4 text-left">Name</th>
      <th className="px-6 py-4 text-left">Price</th>
      <th className="px-6 py-4 text-left">Labeled</th>
      <th className="px-6 py-4 text-left">Category</th>
      <th className="px-6 py-4 text-left">Image</th>
      <th className="px-6 py-4 text-left">Visibility</th>
      <th className="px-6 py-4 text-left">Brand</th>
      <th className="px-6 py-4 text-left">Model</th>
    </tr>
  </thead>

  <tbody className="text-gray-700 text-sm divide-y divide-gray-200">
    {products.map((item) => {
      return (
        <tr
          key={item.productId}
          className="hover:bg-primary transition duration-200"
        >
          <td className="px-6 py-4 font-medium text-secondery">
            {item.productId}
          </td>

          <td className="px-6 py-4">{item.name}</td>

          <td className="px-6 py-4 font-semibold text-accent">
            {getFormattedPrice(item.price)}
          </td>

          <td className="px-6 py-4 line-through text-gray-400">
            {getFormattedPrice(item.labelledPrice)}
          </td>

          <td className="px-6 py-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-secondery">
              {item.catagory}
            </span>
          </td>

          <td className="px-6 py-4">
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-12 h-12 object-cover rounded-lg border"
            />
          </td>

          <td className="px-6 py-4">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                item.isVisible
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {item.isVisible ? "Visible" : "Hidden"}
            </span>
          </td>

          <td className="px-6 py-4">{item.brand}</td>

          <td className="px-6 py-4 text-gray-500">{item.model}</td>
        </tr>
      );
    })}
  </tbody>
            </table>



            <Link
            to="/admin/add-product"
            className="bg-accent text-white h-[50px] w-[50px] flex justify-center items-center text-2xl rounded-[20px] hover:rounded-full fixed bottom-[30px] right-[30px]"  >
                <FaPlus />
            </Link>
        </div>
    )
}

