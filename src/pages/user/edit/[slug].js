import axios from "../../../../axios.config";
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

const Edit = ({ slug, data1 }) => {
  const router = useRouter();
  const toast = useToast();

  const updateUser = async ({ username, email }) => {
    return await axios.patch(`/user/edit/${slug}`, {
      id: slug,
      username,
      email,
    });
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
          Edit user ID: {data1.id}
        </Text>
        <hr />
        <Formik
          initialValues={{
            id: data1.id,
            username: data1.username,
            email: data1.email,
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              updateUser({
                username: values.username,
                email: values.email,
              });
              toast({
                title: "User updated.",
                description: `User: ${slug} has been updated.`,
                status: "success",
                duration: 5000,
                isClosable: true,
              });
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Field name="id">
                {({ field }) => (
                  <FormControl mt={4}>
                    <FormLabel htmlFor="id">User ID</FormLabel>
                    <Input {...field} id="id" placeholder="id" isReadOnly />
                  </FormControl>
                )}
              </Field>
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

export const getServerSideProps = async ({ params }) => {
  const slug = params.slug;
  const data1 = await axios.get(`/user/${slug}`).then(({ data }) => data);
  return {
    props: { slug, data1 },
  };
};

export default Edit;
