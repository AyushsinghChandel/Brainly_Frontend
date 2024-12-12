import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SiderBarItem } from "./SideBarItem";

export function SiderBar(){
    return <div className="h-screen border-r bg-white w-72 fixed top-0 lef-0 pl-6">
        <div className="flex text-2xl pt-6 items-center ">
            <div className="pr-4 text-purple-600 ">
            <Logo />
            </div>
            <div className="font-bold">
            Brainly
            </div>
        </div>
        <div className="pt-8 pl-4">
            <SiderBarItem text="Twitter" icon={<TwitterIcon />} />
            <SiderBarItem text="Youtube" icon={<YoutubeIcon />} />
        </div>
    </div>
}