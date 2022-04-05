import axios from "../../axios.config";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const toast = useToast();

  const createUser = async ({ username, email }) => {
    return await axios
      .post(`/register`, {
        username,
        email,
      })
      .catch((error) => console.log(error));
  };

  function validateUsername(value) {
    let error;
    if (!value) {
      error = "Username is required";
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
    }
    return error;
  }

  return (
    <>
      <Box>
        <Text fontWeight={"bold"} fontSize={"xl"} mb={4}>
          Create New User
        </Text>
        <hr />
        <Formik
          initialValues={{
            username: "",
            email: "",
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              createUser({
                username: values.username,
                email: values.email,
              });
              toast({
                title: "User created.",
                description: `User has been created.`,
                status: "success",
                duration: 5000,
                isClosable: true,
              });
              actions.setSubmitting(false);
              router.push("/users");
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Field name="username" validate={validateUsername}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.username && form.touched.username}
                    mt={4}
                  >
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input {...field} id="username" placeholder="username" />
                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email" validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                    mt={2}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input {...field} id="email" placeholder="email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                mr={2}
                colorScheme="blue"
                isLoading={props.isSubmitting}
                type="submit"
                size={"sm"}
              >
                Submit
              </Button>
              <Button
                mt={4}
                colorScheme="red"
                type="button"
                size={"sm"}
                onClick={() => {
                  router.back();
                }}
              >
                Back
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Register;
