import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import { useRoute } from "wouter";
import { GET_POST } from "../../../queries/post.queries";
import { BlogPostStyled } from "./styled";
import { DocumentRenderer } from "@keystone-6/document-renderer";

export interface Item {
  id: string;
  content: Content;
  image: Image;
}

export interface Content {
  document: any;
}

export interface Image {
  url: string;
}

export default function BlogPost() {
  const [, params] = useRoute("/blogpost/:id");
  const { error, loading, data } = useQuery(GET_POST, {
    variables: { id: params?.id || "sure" },
  });
  if (loading) return <>Loading ...</>;
  if (error) return <>Something went wrong</>;

  return (
    <BlogPostStyled>
      <div className="blog_content">
        <Box
          sx={{
            "& img": {
              height: "40vh",
              objectFit: "cover",
            },
          }}
        >
          <img
            src={data.post.front.url}
            alt={data.post.title}
            width="100%"
            height="100%"
          />
        </Box>
        <h1>{data.post.title}</h1>
        {data.post.items.map((item: Item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <DocumentRenderer document={item.content.document} />
            <Box
              sx={{
                "& img": {
                  maxHeight: "400px",
                  objectFit: "contain",
                },
              }}
            >
              <img src={item.image.url} alt={data.post.title} />
            </Box>
          </Box>
        ))}
      </div>
    </BlogPostStyled>
  );
}
