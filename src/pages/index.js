import { Box, Button, Image, Link, Text, Stack } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Stack spacing={4} align="center">
        <Box mt={8} mb={4}>
          <Box mb={4}>
            <Image
              src="/Programming-amico.svg"
              width={400}
              height={400}
              alt="Launching Illustration"
            />
          </Box>
          <Text textAlign="center" fontSize="xs">
            <Link
              href="https://www.freepik.com/stories"
              isExternal
              rel="noopener noreferrer"
            >
              Illustration by Freepik Stories
            </Link>
          </Text>
        </Box>
        <Box
          textAlign={{ base: "center", md: "center" }}
          alignItems="center"
          minHeight="20vh"
          gap={8}
          mb={8}
          w="full"
          marginTop={8}
        >
          <Stack marginY={2} direction={{ base: "column" }} align={"center"}>
            <Button
              marginTop={2}
              as="a"
              href="/users"
              size="sm"
              w={"-webkit-fit-content"}
            >
              Users
            </Button>
            <Button
              marginTop={2}
              as="a"
              href="/register"
              size="sm"
              w={"-webkit-fit-content"}
            >
              Create User
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}