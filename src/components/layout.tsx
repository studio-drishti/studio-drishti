import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, useColorMode } from "@chakra-ui/react";
import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="main"
      maxWidth="66rem"
      margin="0 auto"
      paddingY={["6", null, "10"]}
      paddingX={["4"]}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={["6", null, "10"]}
      >
        <Heading as="h1" size="lg">
          Soft Drinks 🍸💻
        </Heading>
        <Box>
          <Button variant="ghost" size="sm" onClick={toggleColorMode}>
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Box>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};
