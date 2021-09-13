import React from "react";
import MySelect from "../../UI/MySelect";
import MyInput from "../../UI/MyInput";
//этот компонент нужен для сортировок и фильтрации
const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        placeholder="Поиск..."
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
          { value: "id", name: "По номеру" },
        ]}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  );
};

export default PostFilter;
