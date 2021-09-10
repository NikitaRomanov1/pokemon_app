import React from "react";
import { ModalContentStyle, ModalStyle } from "../../styles/styles";

const MyModal = ({ children, visible, setVisible }) => {
  return (
    <ModalStyle
      className={visible ? "active" : null}
      onClick={() => setVisible(false)}
    >
      {/*чтобы клик по инпутам не закрывал модалку нужно написать stopPropagation
        прекращение всплытия т.к снизу вверх пойдет событие
    */}
      <ModalContentStyle onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContentStyle>
    </ModalStyle>
  );
};

export default MyModal;
