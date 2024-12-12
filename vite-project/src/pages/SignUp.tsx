import { useRef } from "react";
import { Buttton } from "../components/Button";
import { InputBox } from "../components/InputBox";
import axios from "axios";
import { Backed_URl } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();
    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(Backed_URl + "/api/v1/signup",{
            username,
            password
        })
        navigate("/signin")
        alert("You have signed up")

    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
        <InputBox reference={usernameRef} placeholder="Username"/> 
        <InputBox reference={passwordRef} placeholder="Password"/> 
        <div className="flex justify-center pt-4">
            <Buttton onClick={signup} varaint="primary" text="Signup" fullwidth={true} loading={false} />
        </div>
        </div>
    </div>
}