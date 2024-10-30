import { useSelector } from "react-redux";
import Modal from "../../ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { tasks } = useSelector((state) => state.taskSlice);
  const modal = tasks.find((item) => item.id === id);
  console.log(id, modal);

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {modal?.description}
      </Modal>
    </div>
  );
};

export default TaskDetailsModal;
