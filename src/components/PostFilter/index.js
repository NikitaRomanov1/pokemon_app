import React from "react";
import MySelect from "../../UI/MySelect";
import MyInput from "../../UI/MyInput";
//этот компонент нужен для сортировок и фильтрации
const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        placeholder="Search..."
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        defaultValue="Sorting"
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By description" },
          { value: "id", name: "By number" },
        ]}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  );
};

export default PostFilter;
