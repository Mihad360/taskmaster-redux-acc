import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateStatus } from "../../redux/features/tasks/taskSlice";
import TaskDetailsModal from "./taskDetailsModal";

const MyTasks = () => {
  const { tasks, userTask} = useSelector((state) => state.taskSlice);
  const {name} = useSelector((state) => state.userSlice)
  const [isOpen, setIsOpen] = useState(false)
  const [taskId, settaskId] = useState(0)
  const dispatch = useDispatch()
  console.log(tasks,name);

  const handleModal = (id) =>{
    settaskId(id)
    setIsOpen(!isOpen)
  }

  useEffect(()=>{
    dispatch(addUser(name))
  },[name,dispatch,tasks])

  return (
    <div>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId} />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userTask.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button onClick={()=>handleModal(item.id)} className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button onClick={()=>dispatch(updateStatus({id: item.id, status: 'done'}))} className="grid place-content-center" title="Done">
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
