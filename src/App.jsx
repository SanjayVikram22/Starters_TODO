import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Task from './components/Task'

export default function App() {
  const[TaskList,SetTaskList]=useState([])
  useEffect(()=>{
    const Store=JSON.parse(localStorage.getItem("LOCTODO")||"[]")
    if (Store) SetTaskList(Store)
  },[])
  return (
    <>
      <Header/>
      <AddTask TaskList={TaskList} SetTaskList={SetTaskList}/>
      <Task TaskList={TaskList} SetTaskList={SetTaskList}/>
    </>
  )
}
