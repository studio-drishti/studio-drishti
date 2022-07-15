import * as React from "react";
import {
  Box,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  Img,
  Heading,
  OrderedList,
} from "@chakra-ui/react";
import type { DrinkType } from "../../types";

export const Drink = ({
  slug,
  title,
  content,
  ingredients,
  directions,
  image,
}: DrinkType) => {
  return (
    <Box>
      <Box marginBottom="4">
        <Img src={image} borderRadius="md" />
      </Box>
      <Heading as="h2" size="md" marginBottom="4">
        {title}
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr", "1fr 1fr 1fr"]}
        gridColumnGap="10"
        gridRowGap="4"
      >
        <GridItem>{content}</GridItem>
        <GridItem>
          <OrderedList marginLeft="8">
            {directions?.map((direction) => (
              <ListItem key={slug + direction}>{direction}</ListItem>
            ))}
          </OrderedList>
        </GridItem>
        <GridItem>
          <UnorderedList>
            {ingredients?.map((ingredient) => (
              <ListItem key={slug + ingredient}>{ingredient}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
      </Grid>
    </Box>
  );
};
