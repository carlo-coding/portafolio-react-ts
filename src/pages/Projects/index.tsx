import { Box } from "@mui/material";
import { styles_proyects } from "./styled";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../queries/projects.queries";
import { DocumentRenderer } from "@keystone-6/document-renderer";
interface IProject {
  id: string;
  title: string;
  content: {
    document: any;
  };
  link: string;
  image?: {
    url: string;
  };
  tags: Array<{
    id: string;
    name: string;
  }>;
}

export default function Projects() {
  const { error, loading, data } = useQuery(GET_PROJECTS);

  if (loading) return <>Loading ...</>;
  if (error) return <>Something went wrong</>;

  return (
    <Box sx={styles_proyects}>
      <h2 className="regular-title">Proyectos</h2>
      {data.projects.map((project: IProject) => (
        <div className="card-project">
          <a
            target="_blank"
            href={project.link}
            className="image bottom-border"
            rel="noreferrer"
          >
            <img src={project.image?.url} alt={project.title} />
          </a>
          <div className="description">
            <h3>{project.title}</h3>
            <DocumentRenderer document={project.content.document} />
            <a
              className="proyect-link"
              target="_blank"
              href={project.link}
              rel="noreferrer"
            >
              Visitar
            </a>
          </div>
        </div>
      ))}
    </Box>
  );
}
