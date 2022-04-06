import { Box, Stack, Link, Text } from "@chakra-ui/react";

import Card from "./Card";

const UserCard = ({ users }) => {
  return (
    <>
      <Stack spacing={4}>
        {users.length !== 0 ? (
          users.map((user) => <Card key={user.id} user={user} />)
        ) : (
          <Box w={"100%"} textAlign={"center"} mt={20} mb={20}>
            <Text>
              No user data found.
              <br />
              <Link href={"/register"} color="blue.500">
                {" "}
                Create New User
              </Link>
              &nbsp;?
            </Text>
          </Box>
        )}
      </Stack>
    </>
  );
};

export default UserCard;
