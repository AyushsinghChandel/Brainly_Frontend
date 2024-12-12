import { useEffect, useState } from "react";
import { Buttton } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SiderBar } from "../components/SideBar";
import { useContent } from "../hooks/useContent";


export default function Dashboard() {
  const [modalOpen,setModalOpen]=useState(false);
  const {contents, refresh} = useContent ();
  useEffect(()=>{
    refresh();
  },[modalOpen])
  return (
    <div>
      <SiderBar />
       <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
      <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false);
      }} />
      <div className="flex justify-end gap-4">
      <Buttton onClick={() => {
        setModalOpen(true)
      }} varaint="primary" text="Add content" startIcon={<PlusIcon />}></Buttton>
      <Buttton varaint="secondary" text="Share brain" startIcon={<ShareIcon />}></Buttton>
      </div>
      <div className="flex gap-4 flex-wrap">
        {contents.map(({type,link, tittle})=> <Card type={type} link={link} tittle={tittle}></Card>)}
      <Card type="twitter" link="https://x.com/AyushSi96182190/status/1864645831925878871" tittle="First tweet"/>

      <Card type="youtube" link="https://www.youtube.com/watch?v=Lyy1eai_Ntc" tittle="First tweet"/>
      
      </div>
      </div>
    </div>
  )
}