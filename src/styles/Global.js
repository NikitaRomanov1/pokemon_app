import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}
${
  "" /* #root {
  display: flex;
  flex-direction: column;
  align-items: center;
} */
}
}
`;

export default Global;

// ::-webkit-scrollbar {
//     width: 0;
//   }
