import { Route, Routes } from "react-router-dom";
import AdminPage from "./Pages/admin";
function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminPage/>}/>
      </Routes>
    </div>
  )
}

export default App
