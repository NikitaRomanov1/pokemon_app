import React, { useEffect } from "react";
import MyButton from "../../UI/MyButton";
import { PostContent } from "../../styles/styles";

const PostItem = ({ post, number, removePost }) => {
  const handleRemove = () => {
    removePost(post);
  };

  return (
    <PostContent>
      <div>
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div style={{ marginLeft: "auto", marginTop: 5 }}>
        <MyButton onClick={handleRemove}>Удалить</MyButton>
      </div>
    </PostContent>
  );
};

export default PostItem;
