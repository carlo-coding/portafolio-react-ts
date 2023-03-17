import { styled } from "@mui/material/styles";

export const BlogPostStyled = styled("div")`
  color: #fff;

  .blog_content {
    line-height: 1.5;
    font-size: 1.1rem;

    h1,
    h2 {
      margin-bottom: 1em;
    }

    padding-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 800px;
    margin: 40px auto 10px;

    pre {
      background-color: #1c1c1c;
      color: #f8f8f8;
      font-size: 16px;
      font-family: "Fira Code", monospace;
      line-height: 1.5;
      padding: 20px;
      padding-top: 30px;
      border-radius: 5px;
      overflow-x: auto;
      white-space: pre-wrap;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
      transition: all 0.1s ease-in-out;
      position: relative;
    }

    pre:hover {
      box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.3);
      transform: scale(1.005);
    }

    .copy-button {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: #343540;
      color: #fff;
      text-align: right;
      padding: 0.2em;
      border: none;
    }
  }

  ol li,
  ul li {
    margin-bottom: 10px;
    margin-left: 1em;
  }

  ol li,
  ul li {
    margin-bottom: 10px;
    margin-left: 1.2em;
    counter-increment: my-counter;
  }

  ol li:before,
  ul li:before {
    content: counter(my-counter) ".";
    font-weight: bold;
    color: white;
    position: absolute;
    margin-left: -1.2em;
  }
`;
