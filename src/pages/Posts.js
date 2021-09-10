import React, { useState, useEffect } from "react";
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
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  //кастомный хук для запроса и отображения лоадера
  const [fetchPosts, isLoading, error] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
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
    <div style={{ width: 800 }}>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {error && <h1>Произошла ошибка ${error}</h1>}
      {isLoading ? (
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
        <>
          <PostList
            removePost={removePost}
            posts={sortedAndFilteredPosts}
            title="Список постов"
          />
          <Pagination
            totalPages={totalPages}
            page={page}
            changePage={changePage}
          />
        </>
      )}
    </div>
  );
};

export default Posts;
