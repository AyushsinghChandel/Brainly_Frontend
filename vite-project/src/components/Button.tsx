import { ReactElement } from "react";

interface ButtonProps{
    varaint : "primary" | "secondary";
    text : string;
    startIcon? : ReactElement
    onClick? :  () => void;
    fullwidth? : boolean;
    loading? : boolean;
}
const varaintClasses = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-200 text-purple-600"
}

const defaulStyles = "px-4 py-2 rounded-md font-light flex items-center"

export function Buttton(props : ButtonProps){
    return <button onClick={props.onClick} className={varaintClasses[props.varaint]+ " " + defaulStyles + `${props.fullwidth? " w-full flex justify-center items-center " : ""} ${props.loading? "opacity-45": ""}`} disabled={props.loading }>
        <div className="pr-2">
        {props.startIcon}
        </div> 
        {props.text}
        </button>
}