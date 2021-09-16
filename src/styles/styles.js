import styled, { css } from "styled-components";
import theme from "./theme";

import { motion } from "framer-motion";

export const PostContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid ${theme.colors.green};
  margin-top: 20px;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 10px;
  min-height: 200px;
  cursor: pointer;
`;

export const ButtonStyle = styled(motion.button).attrs((props) => ({
  className: props.className,
}))`
  color: ${theme.colors.green};
  padding: 5px 15px;
  font-size: 15px;
  background: transparent;
  border: 1px solid ${theme.colors.green};
  cursor: pointer;
  border-radius: 10px;
  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
  &.PageButtonStyle {
    margin-left: 10px;
  }
  &.pageCurrentStyle {
    background: rgba(0, 0, 0, 0.1);
  }
  ${(props) =>
    props.light &&
    css`
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
    `}
`;

export const InputStyle = styled.input`
  width: 100%;
  margin: 5px 0;
  padding: 5px 15px;
  color: ${theme.colors.green};
  font-size: 15px;
  background: transparent;
  border: 2px solid ${theme.colors.green};
  border-radius: 10px;
  :focus {
    outline: none;
  }
`;

export const SelectStyle = styled.select`
  width: 20%;
  border: 1px solid ${theme.colors.green};
  color: ${theme.colors.green};
  border-radius: 10px;
  margin-top: 5px;
  :focus {
    outline: none;
  }
`;

export const ModalContentStyle = styled(motion.div)`
  width: clamp(15%, 600px, 90%);
  height: min(50%, 200px);

  margin: auto;
  background: white;
  padding: 25px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// export const ModalStyle = styled(motion.div).attrs((props) => ({
//   className: props.className,
// }))`
//   &.active {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   display: none;
//   background: rgba(0, 0, 0, 0.5);
// `;
export const BackdropStyle = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderStyle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px dotted ${theme.colors.green};
`;

export const PageWrapperStyle = styled(motion.div)`
  margin: 20px auto;
  display: flex;
  justify-content: center;
`;

export const NavbarStyle = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background: ${theme.colors.red};
  z-index: 100;
  position: sticky;
  top: 0;
`;

export const GridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px 20px;
  margin-left: 15px;
  margin-right: 15px;
`;
