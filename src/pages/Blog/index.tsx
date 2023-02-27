import { useQuery } from "@apollo/client";
import { useLocation } from "wouter";
import { formatToRelative } from "../../chest/utils";
import { GET_POSTS } from "../../queries/post.queries";
import { BlogStyled } from "./styled";

interface Image {
  url: string;
}

interface Content {
  document: any;
}

interface Author {
  name: string;
  email: string;
}
interface PostItem {
  id: string;
  content: Content;
  image: Image;
  author: Author;
  tags: any[];
}
interface PostContent {
  id: string;
  title: string;
  front?: Image;
  items: PostItem[];
  createdAt: string;
}

export default function Blog() {
  const [, setLocation] = useLocation();
  const handleClick = (id: string) => () => {
    setLocation?.(`/blogpost/${id}`);
  };

  const { data, error, loading } = useQuery(GET_POSTS);
  if (loading) return <>Loading ...</>;
  if (error) return <p>Something went wrong</p>;
  return (
    <BlogStyled>
      {data.posts.map((post: PostContent) => (
        <div
          key={post.id}
          className="presentation_container"
          onClick={handleClick(post.id)}
        >
          <img src={post.front?.url} alt={post.title} />
          <div>
            <h3 className="bottom-border">{post.title}</h3>
            <small>{formatToRelative(post.createdAt)}</small>
          </div>
        </div>
      ))}
    </BlogStyled>
  );
}
