import React from "react";
import Backdrop from "../Backdrop";
import { ModalContentStyle } from "../../styles/styles";
import { PostForm } from "../../components/PostForm";
import MyButton from "../MyButton";
const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const MyModal = ({ handleClose, createPost }) => {
  return (
    <Backdrop onClick={handleClose}>
      {/*чтобы клик по инпутам не закрывал модалку нужно написать stopPropagation
//         прекращение всплытия т.к снизу вверх пойдет событие
//     */}
      <ModalContentStyle
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onClick={(e) => e.stopPropagation()}
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <PostForm createPost={createPost} />
      </ModalContentStyle>
    </Backdrop>
  );
};

export default MyModal;
