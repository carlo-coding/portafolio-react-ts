import { useEffect, useRef } from "react";
import { useRoute } from "wouter";
import temp_blogs from "../temp_blogs";
import { BlogPostStyled } from "./styled";




export default function BlogPost() {

    const [,params] = useRoute("/blogpost/:id");


    return (
        <BlogPostStyled>
            <div className="blog_content" dangerouslySetInnerHTML={{
                __html: temp_blogs.find(blog=>blog.id===params?.id)?.html||""
            }}></div>
        </BlogPostStyled>
    )
}