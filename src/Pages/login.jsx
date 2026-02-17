import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

export default function LoginPage(){

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    async function login(){
        
                try{
            const response = await axios.post(import.meta.env.VITE_API_URL + "/users/login" ,  
                {email : email , password : password})
                console.log(response)
                toast.success("Successfully Logged In")
            
        }catch(err){
            console.log(err)
            toast.error("Login Failed")
        }
     }       

    return(

        <div className="w-full h-full bg-[url('/background.jpg')] bg-cover bg-center flex">
            
            <div className="w-[50%] h-full flex justify-center items-center flex-col">
                <img src="logo.png" className="w-[350px]"/>
                <h1 className="text-secondery font-black mt-7 text-[35px] bg-primary p-2 pr-5 pl-5 rounded-2xl">ISURI COMPUTERS</h1>
            </div>

            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[400px] h-[500px] backdrop-blur-2xl rounded-[20px] flex flex-col border border-white border-2 shadow-2xl justify-center items-center">
                   
                    <input onChange={
                        (e)=>{
                            setEmail(e.target.value)
                        }
                    } type="email" placeholder="Email" className="w-[90%] m-5 p-5 rounded-2xl text-white border outline-0" />
                   
                    <input onChange={(e)=>{
                            setPassword(e.target.value)
                        }
                    } type="password" placeholder="Password" className="w-[90%] m-5 p-5 rounded-2xl text-white border outline-0" />
                   
                    <p className="text-white w-full text-right mt-[-15px] pr-5">Forgot Password? <Link className="text-accent hover:text-white">Reset</Link></p>
                   
                    <button onClick={login} className="mt-5 p-5 rounded-2xl w-[90%] font-bold text-secondery bg-primary hover:bg-secondery hover:text-white hover:border" >Login</button>
                    <button className="mt-5 mb-5 p-5 rounded-2xl w-[90%] font-bold text-secondery bg-primary hover:bg-secondery hover:text-white hover:border" >Login With Google</button>
                   
                    <p className="text-white w-full text-center">Don't Have an Account? <Link className="text-accent hover:text-white">SignUP</Link></p>
                </div>
            </div>


        </div>
    )
}
