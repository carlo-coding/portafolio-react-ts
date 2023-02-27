import { Box } from "@mui/material";
import { styles_hobbies } from "./styled";
import { ObserverList, ObservedItem } from "../../components/IntsObserver";
import { useQuery } from "@apollo/client";
import { GET_HOBBIES } from "../../queries/hobbies.queries";

interface IHobbie {
  id: string;
  title: string;
  image?: {
    url: string;
  };
}

export default function Hobbies() {
  const { error, loading, data } = useQuery(GET_HOBBIES);

  if (loading) return <>Loading ...</>;
  if (error) return <>Something went wrong</>;

  return (
    <Box sx={styles_hobbies}>
      <h2 className="regular-title">My Hobbies</h2>
      <ObserverList toggleClass="show">
        {({ saveItem }: any) => (
          <>
            {data.hobbies.map((hobbie: IHobbie) => (
              <ObservedItem saveItem={saveItem}>
                <p>{hobbie.title}</p>
                <img src={hobbie.image?.url} alt={hobbie.title} />
              </ObservedItem>
            ))}
          </>
        )}
      </ObserverList>
    </Box>
  );
}
