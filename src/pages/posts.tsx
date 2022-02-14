import axios from "axios";
import { NextPage, GetServerSideProps } from "next";

type Post = {
  text: string;
};

type PostsPageProps = {
  name: string;
  posts: Post[];
};

const PostsPage: NextPage<PostsPageProps> = (props) => {
  const { posts } = props;

  return (
    <div>
      <title>Posts listing</title>
      <div className="flex items-center bg-yellow-300">
      <h1>{props.name}</h1>
      <ul className="list-none">
        {posts.map((t, key) => (
          <li key={key}>{t.text}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default PostsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: posts } = await axios.get("http://localhost:3000/api/posts");

  return {
    props: {
      name: "Posts",
      posts,
    },
  };
};
