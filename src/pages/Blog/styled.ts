import { styled } from "@mui/material/styles";



export const BlogStyled = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;

    .presentation_container 
    {
        width: min(700px, 90vw);
        border: 1px solid #FFF;
        display: flex;
        color: #FFF;
        gap: 10px;
        margin: 10px;
        padding: 1em;

        img 
        {
            width: 100px;
            aspect-ratio: 1.5/1;
        }

        :hover {
            color: var(--clr-cinnamon-satin);
            border-color: var(--clr-cinnamon-satin);
            cursor: pointer;
        }
    }
`;