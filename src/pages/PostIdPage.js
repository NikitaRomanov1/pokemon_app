import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import PostService from "../API/PostService";
import { useFetching } from "../customHooks/useFetching";
import MyLoader from "../UI/MyLoader";
const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isCommentLoading, commentError] = useFetching(
    async () => {
      const response = await PostService.getCommentsByPostId(params.id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div>
          <h1>Вы открыли страницу поста c ID = {params.id}</h1>
          {comments.map((comm, index) => (
            <div style={{ marginTop: 15 }} key={index}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
