import { Route, Routes } from "react-router-dom";
import AdminPage from "./Pages/admin";
import HomePage from "./Pages/home";
import LoginPage from "./Pages/login";



function App() {
  
  return (
    <div className="w-full h-screen bg-[#faffdd] border-4 border-b-blue-600">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App
