import React from 'react'
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from "uuid";
export default function Task({TaskList,SetTaskList}) {
  const {register,handleSubmit,reset}=useForm()
  return (
    <>
      <div className='fixed bottom-1 lg:w-8/12 w-11/12 mx-auto left-0 right-0 p-3 bg-white border rounded-lg mb-2'>
        <form className="flex justify-between gap-2" onSubmit={handleSubmit((data)=>{
          reset()
          const newTask = {
            task: data.task,
            id: uuidv4()
          };
          SetTaskList([...TaskList,newTask])
          localStorage.setItem(
            "LOCTODO",
            JSON.stringify([...TaskList,newTask])
          )
        })}>
          <input  className='w-full'placeholder='Enter the text '{...register("task")}/>
          <button type='submit' className='bg-blue-600 text-white rounded-lg px-3 py-2'>
            Submit</button>
        </form>
      </div>
    </>
  )
}
