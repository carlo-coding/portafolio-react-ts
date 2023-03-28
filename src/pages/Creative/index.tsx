import { useQuery } from "@apollo/client";
import { useLocation } from "wouter";
import { formatToRelative, sortObjectsByCreatedAt } from "../../chest/utils";
import { GET_CREATIVES } from "../../queries/creative.queries";
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

export default function Creative() {
  const [, setLocation] = useLocation();
  const handleClick = (id: string) => () => {
    setLocation?.(`/creativepost/${id}`);
  };

  const { data, error, loading } = useQuery(GET_CREATIVES);
  if (loading) return <>Loading ...</>;
  if (error) return <p>Something went wrong</p>;
  return (
    <BlogStyled>
      {sortObjectsByCreatedAt(data.creatives).map((creative: PostContent) => (
        <div
          key={creative.id}
          className="presentation_container"
          onClick={handleClick(creative.id)}
        >
          {creative.front?.url && (
            <img src={creative.front?.url} alt={creative.title} />
          )}
          <div>
            <h3>{creative.title}</h3>
            <small>{formatToRelative(creative.createdAt)}</small>
          </div>
        </div>
      ))}
    </BlogStyled>
  );
}
