import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const overrides = {
  ...chakraTheme,
  config,
};

const theme = extendTheme(overrides);

export default theme;