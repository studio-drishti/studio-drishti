import { AspectRatio, Box, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Box
      as="main"
      css={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}
    >
      <Head>
        <title>Rubbish Rabble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading size="4xl" textAlign="center" marginBottom="2rem">
        Rubbish Rabble
      </Heading>
      <AspectRatio ratio={16 / 9}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/0iCuT7HkbJA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Box>
  );
};

export default Home;
