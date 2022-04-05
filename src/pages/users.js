import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import axios from "../../axios.config";

import UserCard from "../components/user-card";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    return await axios.get("/users").then(({ data }) => data);
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
        <UserCard users={userData} />
      </Box>
    </>
  );
};

export default Users;
