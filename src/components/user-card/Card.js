import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import axios from "../../../axios.config";

const Card = ({ user }) => {
  const [deleteUser, setDeleteUser] = useState(false);
  const toast = useToast();
  const toast_id = user.id;

  const deleteDB = () => {
    axios
      .delete(`/delete/${user.id}`)
      .then((res) => {
        if (res.status === 200) {
          if (!toast.isActive(toast_id)) {
            toast({
              title: "User deleted.",
              description: `User: ${user.id} has been deleted.`,
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            setDeleteUser(true);
          }
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {}, [deleteUser]);
  return (
    <>
      <Box
        borderRadius={"10"}
        border={"0px"}
        p={4}
        overflow={"hidden"}
        transitionProperty="transform"
        transitionDuration="slower"
        transition-timing-function="easing-ease-out"
        shadow={"md"}
        _hover={{
          transform: "translateY(-4px)",
          shadow: "md",
        }}
      >
        <Flex>
          <Box ml={2} mr={2} alignItems={"flex-start"}>
            <Image
              borderRadius={"full"}
              boxSize={"90px"}
              minW={"90px"}
              src={`https://randomuser.me/api/portraits/med/men/${user.id}.jpg`}
              alt={user.username}
            />
          </Box>
          <Stack
            justify={"space-between"}
            direction={{ base: "row" }}
            align={"center"}
            width={"100%"}
          >
            <Stack direction={{ base: "column" }} ml={4}>
              <Text fontWeight={"bold"}>{user.username}</Text>
              <Text fontWeight={"light"} noOfLines={1}>
                {user.email}
              </Text>
            </Stack>
            <Box>
              <NextLink href={`/user/edit/${user.id}`} passHref>
                <Button colorScheme={"facebook"} size={"sm"}>
                  Edit
                </Button>
              </NextLink>
              <NextLink href={""} passHref>
                <Button
                  colorScheme={"red"}
                  size={"sm"}
                  ml={2}
                  onClick={deleteDB}
                >
                  Delete
                </Button>
              </NextLink>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Card;
