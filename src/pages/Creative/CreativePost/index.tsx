import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import { useRoute } from "wouter";
import { BlogPostStyled } from "./styled";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { useEffect } from "react";
import { GET_CREATIVE } from "../../../queries/creative.queries";

export interface Item {
  id: string;
  content: Content;
  image?: Image;
}

export interface Content {
  document: any;
}

export interface Image {
  url: string;
}

export default function CreativePost() {
  const [, params] = useRoute("/creativepost/:id");
  const { error, loading, data } = useQuery(GET_CREATIVE, {
    variables: { id: params?.id || "" },
  });

  useEffect(() => {
    const preElements = Array.from(document.querySelectorAll("pre"));
    const cleanFunctions = preElements.map((pre) => {
      const copyButton = document.createElement("button");
      copyButton.innerText = "Copy Code";
      copyButton.classList.add("copy-button");
      pre.insertBefore(copyButton, pre.firstChild);
      function copyCode() {
        navigator.clipboard.writeText(pre.childNodes[1]?.textContent || "");
      }
      copyButton.addEventListener("click", copyCode);
      return () => pre.removeChild(copyButton);
    });
    return () => cleanFunctions.forEach((c) => c());
  }, [data]);

  if (loading) return <>Loading ...</>;
  if (error) return <>Something went wrong</>;

  return (
    <BlogPostStyled>
      <div className="blog_content">
        <Box
          sx={{
            "& img": {
              height: "50vh",
              objectFit: "cover",
            },
          }}
        >
          {data.creative.front?.url && (
            <img
              src={data.creative.front?.url}
              alt={data.creative.title}
              width="100%"
              height="100%"
            />
          )}
        </Box>
        <h1>{data.creative.title}</h1>
        {data.creative.items.map((item: Item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <DocumentRenderer document={item.content.document} />
            <Box
              sx={{
                "& img": {
                  maxHeight: "400px",
                  maxWidth: "100%",
                  objectFit: "contain",
                },
              }}
            >
              {item.image?.url && (
                <img src={item.image?.url} alt={data.post.title} />
              )}
            </Box>
          </Box>
        ))}
      </div>
    </BlogPostStyled>
  );
}
