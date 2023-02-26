import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { GET_USER } from "../../queries/user.queries";
import { styles_about } from "./styled";
import { DocumentRenderer } from "@keystone-6/document-renderer";

export default function About() {
  const { error, loading, data } = useQuery(GET_USER, {
    variables: { email: "jaanc.rt@gmail.com" },
  });
  if (loading) return <>Loading ...</>;
  if (error) return <>Something went wrong</>;

  return (
    <Box sx={styles_about}>
      <DocumentRenderer document={data.user.about.document} />
    </Box>
  );
}
