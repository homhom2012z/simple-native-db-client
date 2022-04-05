import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <>
      <Flex as="header" width="full" align="center">
        <Heading as="h1" size="md">
          <Link href="/">Simple-Native-DB</Link>
        </Heading>

        <Box marginLeft="auto">
          <Stack direction={{ base: "row" }} spacing={4}>
            <ThemeToggle />
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
