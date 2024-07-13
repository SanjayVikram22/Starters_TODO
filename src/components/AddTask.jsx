import React from "react";

export default function AddTask({ TaskList, SetTaskList }) {
  return (
    <>
      <div className="flex flex-col gap-2 mx-3 rounded-lg">
        {TaskList.map((i) => (
          <div  className=" border rounded-2xl flex flex-row mt-3 bg-blue-200 p-3 justify-between text-black text-center">
            <h1 className="font-bold text-2xl">{i.task}</h1>
            <button className="bg-red-600 p-2 rounded-lg text-white"
              onClick={() => {
                const NewTaskList = TaskList.filter(
                  (task) => task.id !== i.id
                );
                SetTaskList(NewTaskList);
                localStorage.setItem("LOCTODO", JSON.stringify(NewTaskList));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
