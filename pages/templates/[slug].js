import React from "react";

const Post = ({ slug }) => {
  return <div>TODO: show chess board template of: {slug}</div>;
};

export const getStaticPaths = async () => {
  const numbers = [...Array(3).keys()].map((n) => {
    return (n + 1).toString();
  });
  const paths = numbers.map((n) => {
    return { params: { slug: n } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  return {
    props: {
      slug,
    },
  };
};

export default Post;
