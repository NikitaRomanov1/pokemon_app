import React, { useState, useEffect, useRef } from "react";
import PostFilter from "../components/PostFilter";
import { PostForm } from "../components/PostForm/index.js";
import PostList from "../components/PostList";
import { usePosts } from "../customHooks/usePosts.js";
import MyButton from "../UI/MyButton/index.js";
import MyModal from "../UI/MyModal/index.js";
import PostService from "../API/PostService";
import MyLoader from "../UI/MyLoader/index.js";
import { useFetching } from "../customHooks/useFetching.js";
import { getPageCount } from "../utils/pages";
import Pagination from "../UI/MyPagination/index.js";
import { useObserver } from "../customHooks/useObserver";
import MySelect from "../UI/MySelect";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  //раскомментировать для динамической пагинации
  //const lastElement = useRef();

  //кастомный хук для запроса и отображения лоадера
  const [fetchPosts, isPostLoading, error] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      //Для динамической пагинации закомментировать это
      setPosts(response.data);
      // Для динамической пагинации раскомментировать это
      // setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  //Для динамической пагинации раскомментировать это
  // useObserver(lastElement, page < totalPages, isPostLoading, () => {
  //   setPage(page + 1);
  // });

  //Для динамической пагинации закомментировать это
  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  //Для динамической пагинации раскомментировать это
  // useEffect(() => {
  //   fetchPosts(limit, page);
  // }, [page, limit]);

  const changePage = (page) => {
    setPage(page);
  };
  //создание поста
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  //удаление поста по id
  const removePost = (post) => {
    setPosts(posts.filter((p) => post.id !== p.id));
  };

  return (
    <div>
      <div
        style={{
          margin: "0 auto",
          width: "25%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MyButton
          style={{ marginTop: 30, width: "40%" }}
          onClick={() => setModal(true)}
        >
          Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm createPost={createPost} />
        </MyModal>
        <hr style={{ margin: "15px 0" }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        <MySelect
          value={limit}
          defaultValue="Кол-во элементов на странице"
          onChange={(value) => setLimit(value)}
          options={[
            { value: 5, name: "5" },
            { value: 10, name: "10" },
            { value: 25, name: "25" },
            { value: 100, name: "Показать всё" },
          ]}
        />
      </div>
      {error && <h1>Произошла ошибка ${error}</h1>}
      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "150px",
          }}
        >
          <MyLoader />
        </div>
      ) : (
        <div>
          <PostList
            removePost={removePost}
            posts={sortedAndFilteredPosts}
            title="Список постов"
          />
        </div>
      )}
      {/* Для динамической пагинции раскомментировать это */}
      {/* <PostList
        removePost={removePost}
        posts={sortedAndFilteredPosts}
        title="Список постов"
      />
      <div ref={lastElement} />
      {isPostLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "150px",
          }}
        >
          <MyLoader />
        </div>
      )} */}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
};

export default Posts;
