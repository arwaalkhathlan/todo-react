"use client";
import React, { useEffect, useState } from "react";
import Form from "@/app/components/Form";
import Header from "@/app/components/Header";
import TODOHero from "./components/TODOHero";
import TODOList from "./components/TODOList";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos([
      { title: "Some task", id: crypto.randomUUID(), is_completed: false },
      {
        title: "Some other task",
        id: crypto.randomUUID(),
        is_completed: true,
      },
      { title: "last task", id: crypto.randomUUID(), is_completed: false },
    ]);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={0} total_todos={0} />
      <Form />
      <TODOList todos={todos} />
    </div>
  );
}
