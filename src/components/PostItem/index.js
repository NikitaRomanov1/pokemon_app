import React from "react";
import MyButton from "../../UI/MyButton";
import { PostContent } from "../../styles/styles";
import { useHistory } from "react-router";

const PostItem = ({ post, number, removePost }) => {
  const handleRemove = (e) => {
    e.stopPropagation();
    removePost(post);
  };
  const router = useHistory();
  return (
    <PostContent onClick={() => router.push(`/posts/${post.id}`)}>
      <div>
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div style={{ marginLeft: "auto", marginTop: 5 }}>
        <MyButton onClick={(e) => handleRemove(e)}>Удалить</MyButton>
      </div>
    </PostContent>
  );
};

export default PostItem;
