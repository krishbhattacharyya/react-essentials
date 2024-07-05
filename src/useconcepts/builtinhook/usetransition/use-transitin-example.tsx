import {useState, useTransition, Suspense} from 'react';
import Home from "./home";
import About from './about';
import Post from './post';
import Tab from './Tab'

export default function UseTransitionExample(){
    const [isPending, startTransition] = useTransition();
    const [tab, setTab]=useState('home');

    function handleClick(name:string){
        startTransition(()=>{
            setTab(name)
        })
    }

    if(isPending){
        return(<p>Loading...</p>)
    }

    return(
        <div>
            <Tab handleClick={()=>handleClick('home')} isActive={tab==='home'}>Home</Tab>
            <Tab handleClick={()=>handleClick('about')} isActive={tab==='about'}>about</Tab>
            <Tab handleClick={()=>handleClick('post')} isActive={tab==='post'}>post</Tab>
            {tab==='home' && <Home />}
            {tab==='about' && <About />}
            {tab==='post' && <Post />}
        </div>
    )
}