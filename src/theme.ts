import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  fonts: {
    body: "'IBM Plex Mono', monospace",
    heading: "'Space Grotesk', sans-serif",
  },
});
