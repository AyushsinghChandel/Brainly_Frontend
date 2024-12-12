import { CrossIcon } from "../icons/CrossIcon";
import { InputBox } from "./InputBox";
import { Buttton } from "./Button";
import { useRef, useState } from "react";
import { Backed_URl } from "../config";
import axios from "axios";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal({open,onClose}){
    const tittleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type,setType] = useState(ContentType.Youtube);
    async function addContent(){
        const tittle = tittleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post(`${Backed_URl}/api/v1/content`,{
            link,
            tittle,
            type 
        },{
            headers:{
                Authorization : localStorage.getItem("token")
            }            
        })
        onClose();
    }
    return (
        <div>
            {open && (
                <div>
                    {/* Background overlay */}
                    <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60"></div>

                    {/* Modal content */}
                    <div className="w-screen h-screen fixed left-0 flex justify-center items-center">
                        <div className="flex flex-col justify-center">
                            <span className="bg-white p-4 rounded opacity-100">
                                <div className="flex justify-end">
                                    <div onClick={onClose} className="cursor-pointer">
                                        <CrossIcon />
                                    </div>
                                </div>
                                <div>
                                    <InputBox reference={tittleRef} placeholder={"Title"} />
                                    <InputBox reference={linkRef} placeholder={"Link"} />
                                </div>
                                <div>
                                    <h1 className="ml-4">Type</h1>
                                    <div className="flex gap-1 p-4">
                                        <Buttton
                                            text="Youtube"
                                            varaint={type === ContentType.Youtube ? "primary" : "secondary"}
                                            onClick={() => {
                                                setType(ContentType.Youtube);
                                            }}
                                        ></Buttton>
                                        <Buttton
                                            text="Twitter"
                                            varaint={type === ContentType.Twitter ? "primary" : "secondary"}
                                            onClick={() => {
                                                setType(ContentType.Twitter);
                                            }}
                                        ></Buttton>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center">
                                        <Buttton onClick={addContent} varaint="primary" text="Submit" />
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}