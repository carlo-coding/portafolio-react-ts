import { Box } from "@mui/material";
import { styles_education } from "./styled";
import { ObserverList, ObservedItem } from "../../components/IntsObserver";
import { useQuery } from "@apollo/client";
import { GET_EDUCATIONS } from "../../queries/educations.queries";

interface IEducation {
  id: string;
  title: string;
  image?: {
    url: string;
  };
}

export default function Education() {
  const { loading, error, data } = useQuery(GET_EDUCATIONS);

  if (loading) return <>Loading ...</>;
  if (error) return <>Something went wrong</>;

  return (
    <Box sx={styles_education}>
      <h2 className="regular-title">Formación</h2>
      <ObserverList toggleClass="show" className="cards">
        {({ saveItem }: any) => (
          <>
            {data.educations.map((edu: IEducation) => (
              <ObservedItem saveItem={saveItem} className="card">
                <img src={edu.image?.url} alt={edu.title} />
              </ObservedItem>
            ))}
          </>
        )}
      </ObserverList>
    </Box>
  );
}
