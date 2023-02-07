import { Grid } from "@chakra-ui/react";
import { ChildrenProps } from "../../../types/props";

export const GeneralContainer = ({ children }: ChildrenProps) => {
  return (
    <Grid
      templateColumns={{
        xl: "repeat(3,1fr)",
        md: "repeat(3,0.5fr)",
        sm: "repeat(1,1fr)",
      }}
    >
      {children}
    </Grid>
  );
};
