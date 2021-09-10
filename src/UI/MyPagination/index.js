import React from "react";
import { PageWrapperStyle } from "../../styles/styles";
import MyButton from "../MyButton";
import { getPagesArray } from "../../utils/pages";
const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <PageWrapperStyle>
      {pagesArray.map((p) => (
        <MyButton
          className={
            page === p ? "PageButtonStyle pageCurrentStyle" : "PageButtonStyle"
          }
          key={p}
          onClick={() => changePage(p)}
        >
          {p}
        </MyButton>
      ))}
    </PageWrapperStyle>
  );
};

export default Pagination;
