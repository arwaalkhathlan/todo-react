import React from "react";
import Form from "@/app/components/Form";
import Header from "@/app/components/Header";
import TODOHero from "./components/TODOHero";
import TODOList from "./components/TODOList";

export default function Home() {
  return (
      <div className="wrapper">
        <Header/>
        <TODOHero todos_completed={0} total_todos={0}/>
        <Form/>
        <TODOList todos={[]}/>
        
        
      </div>

  );
}

