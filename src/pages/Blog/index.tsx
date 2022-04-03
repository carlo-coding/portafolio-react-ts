import { useEffect, useRef } from "react";
import { useLocation, useRoute, useRouter } from "wouter";
import { genId } from "../../chest/utils";
import { BlogStyled } from "./styled";
import temp_blogs from "./temp_blogs";


interface BlogContent {
    id: string,
    title: string,
    timeStamp: string,
    html: string,
    mainImage: string,
} 


export default function Blog() {

    const [,setLocation] = useLocation();

    const handleClick = (id: string) => ()=>  {
        setLocation?.(`/blogpost/${id}`)
    }

    return (
        <BlogStyled>
            {temp_blogs.map((temp_blog: BlogContent)=> (
                <div key={temp_blog.id} className="presentation_container" onClick={handleClick(temp_blog.id)}>
                    <img src={temp_blog.mainImage} alt="blog-main-image"/>
                    <div>
                    <h3 className="bottom-border">{temp_blog.title}</h3>
                    <small>{temp_blog.timeStamp}</small>
                    </div>
                </div>
            ))}
        </BlogStyled>
    )
}
