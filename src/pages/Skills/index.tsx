import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { styles_skills } from "./styled";
import VanillaTilt from "vanilla-tilt";
import { useQuery } from "@apollo/client";
import { GET_SKILLS } from "../../queries/skills.queries";

interface ISkill {
  id: string;
  name: string;
  color: string;
  description: string;
  image?: {
    url: string;
  };
}

export default function Skills() {
  const { error, loading, data } = useQuery(GET_SKILLS);
  if (loading) return <>Loading ...</>;
  if (error) return <p>Something went wrong</p>;
  return (
    <Box sx={styles_skills}>
      <h2 className="regular-title">Habilidades Principales</h2>
      <div className="cards">
        {data.skills.map((skill: ISkill) => (
          <TiltCard>
            <Box
              component="p"
              className="card-title"
              sx={{
                "--clr-card": skill.color || "var(--clr-mn-blue)",
              }}
            >
              {skill.name}
            </Box>
            <Box
              sx={{
                "& img": {
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "100%",
                  height: "300px",
                  backgroundColor: skill.color,
                },
              }}
            >
              <img
                src={skill.image?.url}
                alt={skill.name}
                width="100%"
                height="100%"
              />
            </Box>
            <p className="card-content">{skill.description}</p>
          </TiltCard>
        ))}
      </div>
    </Box>
  );
}

interface TiltCardProps {
  children?: React.ReactNode;
}
function TiltCard({ children }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current);
    }
  }, []);

  return (
    <div className="card" ref={cardRef}>
      {children}
    </div>
  );
}
