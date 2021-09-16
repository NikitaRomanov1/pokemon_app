import { motion } from "framer-motion";
import React from "react";
import { GridStyle } from "../../styles/styles";
import PostItem from "../PostItem";

const PostList = ({ posts, title, removePost }) => {
  const variants = {
    initial: {
      opacity: 0,
      transition: {
        type: "spring",
        duration: 3,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 3,
      },
    },
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {!posts.length ? (
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "150px",
            textAlign: "center",
          }}
        >
          No posts
        </h2>
      ) : (
        <GridStyle>
          {posts.map((post, index) => (
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.025 }}
              key={index + 1}
            >
              <PostItem
                removePost={removePost}
                number={index + 1}
                post={post}
              />
            </motion.div>
          ))}
        </GridStyle>
      )}
    </div>
  );
};

export default PostList;
