import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Signin } from "./pages/SignIn";
import { Signup } from "./pages/SignUp";
import Dashboard from "./pages/DashBoard";

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>    
    </BrowserRouter>
  )
}