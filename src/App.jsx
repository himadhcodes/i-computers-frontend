import { Route, Routes } from "react-router-dom";
import AdminPage from "./Pages/admin";
import HomePage from "./Pages/home";
import LoginPage from "./Pages/login";
import { Toaster } from "react-hot-toast";



function App() {
  
  return (
    <div className="w-full h-screen bg-primary">
      <Toaster position="top-right"/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App
