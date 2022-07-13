import { Img, Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Box
      as="main"
      css={{
        display: "flex",
        minHeight: "100vh",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Head>
        <title>Studio Drishti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Img width="30%" src="/logo.svg" alt="Studio Drishti" />
      <Text as="em">Focused Media</Text>
    </Box>
  );
};

export default Home;
