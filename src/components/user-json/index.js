import { Box, Stack, Code } from "@chakra-ui/react";

const UserJson = ({ users }) => {
  return (
    <>
      <Box>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </Box>
    </>
  );
};

export default UserJson;
