import axios from "axios";
import { useEffect, useState } from "react";
import { Backed_URl } from "../config";

export function useContent(){
    const [contents,setContent] = useState([]);
    function refresh(){
         axios.get(`${Backed_URl}/api/v1/content`,{
            headers : {
                 "Authorization" : localStorage.getItem("token")
            }
        })
        .then((response)=>{
            setContent(response.data.content)  
        })
    }

    useEffect(()=>{
        refresh();
        let interval = setInterval(() => {
            refresh();
        }, 10000);
        return()=>{
            clearInterval(interval);
        }
    },[])
    return {contents,refresh};
}