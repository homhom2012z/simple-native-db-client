import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";

const UserCard = ({ users }) => {
  return (
    <>
      <Stack spacing={4}>
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </Stack>
    </>
  );
};

export default UserCard;
