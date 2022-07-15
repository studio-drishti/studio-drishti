import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import Head from "next/head";
import { Drink } from "../components/drink";
import { Layout } from "../components/layout";
import { getAllPosts } from "../lib/api";
import { DrinkType } from "../types";

interface IndexProps {
  drinks: DrinkType[];
}

export default function Index({ drinks }: IndexProps) {
  return (
    <>
      <Head>
        <title>Soft Drinks</title>
      </Head>
      <Layout>
        {drinks.map((drink) => (
          <Drink key={drink.slug} {...drink} />
        ))}
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const drinks = getAllPosts([
    "slug",
    "title",
    "image",
    "ingredients",
    "directions",
    "content",
  ]);
  return {
    props: { drinks },
  };
};
