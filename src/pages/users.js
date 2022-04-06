import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Text,
  Flex,
  Heading,
  Stack,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";

import axios from "../../axios.config";

import UserCard from "../components/user-card";
import UserJson from "../components/user-json";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [viewSwitch, setViewSwitch] = useState(false);

  const toast = useToast();

  const getData = async () => {
    return await axios.get("/users").then(({ data }) => data);
  };

  const deleteAllUsersData = async () => {
    if (userData.length !== 0) {
      return await axios.delete("/deleteall").then((res) => {
        if (res.status === 200) {
          toast({
            title: "All user deleted.",
            description: `All user has been deleted.`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
      });
    } else {
      toast({
        title: "No user data.",
        description: `There is no user list that can be deleted.`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    let isMounted = true;
    getData().then((data) => {
      if (isMounted) setUserData(data._data.users);
    });
    return () => {
      isMounted = false;
    };
  }, [userData]);

  return (
    <>
      <Box>
        <Flex as="header" width="full" align="center">
          <Text fontWeight={"bold"} fontSize={"xl"}>
            Users list ({userData.length} user)
          </Text>

          <Box marginLeft="auto">
            <Stack direction={{ base: "row" }} spacing={2}>
              <Button
                colorScheme={"orange"}
                size={"sm"}
                onClick={() => setViewSwitch(!viewSwitch ? true : false)}
              >
                JSON View
              </Button>
              <Button
                colorScheme={"pink"}
                size={"sm"}
                onClick={() => deleteAllUsersData()}
              >
                Delete All
              </Button>
            </Stack>
          </Box>
        </Flex>
        <Box mb={4} mt={4}>
          {/* <Text fontWeight={"bold"} fontSize={"xl"} mb={4}>
            User list
          </Text> */}
          <hr />
        </Box>

        {!viewSwitch ? (
          <UserCard users={userData} />
        ) : (
          <UserJson users={userData} />
        )}
      </Box>
    </>
  );
};

export default Users;
