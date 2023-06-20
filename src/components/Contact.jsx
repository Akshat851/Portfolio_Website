import React, { useContext } from "react";
import {
  Box,
  Heading,
  Paragraph,
  Text,
  Grid,
  ResponsiveContext,
  Form,
  FormField,
  TextInput,
  TextArea,
  MaskedInput,
  Button,
} from "grommet";
export const Contact = () => {
  const size = useContext(ResponsiveContext);
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    description: "",
  });
  const emailMask = [
    {
      regexp: /^[\w\-_.]+$/,
    },
    { fixed: "@" },
    {
      regexp: /^[\w]+$/,
    },
    { fixed: "." },
    {
      regexp: /^[\w]+$/,
    },
  ];
  const emailValidation = [
    {
      regexp: new RegExp("[^@ \\t\\r\\n]+@"),
      message: "Enter a valid email address.",
      status: "error",
    },
    {
      regexp: new RegExp("[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+"),
      message: "Enter a valid email address.",
      status: "error",
    },
    {
      regexp: new RegExp("[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+"),
      message: "Enter a valid email address.",
      status: "error",
    },
  ];
  return (
    <Box pad="xlarge" elevation="small">
      <u style={{ textDecorationColor: "#6FFFB0" }}>
        <Heading color="white" level={1} margin="none">
          Contact
        </Heading>
      </u>
      <Text color="#FFFFFF" margin={{ top: "small", bottom: "medium" }}>
        Submit the form below to get in touch with me
      </Text>
      <Box align="center" margin={{ vertical: "medium" }}>
        <Box width={!["xsmall", "small"].includes(size) ? "large" : "100%"}>
          <Form
            validate="submit"
            value={formValues}
            messages={{
              required: "This is a required field.",
            }}
            onChange={(nextValue) => setFormValues(nextValue)}
            // onSubmit={({ value }) => onSubmit({ value })}
            method="post"
          >
            <FormField
              htmlFor="name"
              name="name"
              required={{ indicator: false }}
            >
              <TextInput
                id="name"
                name="name"
                placeholder="Enter Your Name"
                style={{ color: "white", border: "2px solid #6FFFB0" }}
              />
            </FormField>

            <FormField
              htmlFor="email"
              name="email"
              validate={emailValidation}
              required={{ indicator: false }}
              k
            >
              <MaskedInput
                id="email"
                name="email"
                mask={emailMask}
                type="email"
                placeholder="Enter Your Email"
                style={{ color: "white", border: "2px solid #6FFFB0" }}
              />
            </FormField>

            <FormField
              htmlFor="description"
              name="description"
              required={{ indicator: false }}
            >
              <Box height="small">
                <TextArea
                  id="description"
                  name="description"
                  placeholder="Enter Your Message"
                  fill={true}
                  style={{ color: "white", border: "2px solid #6FFFB0" }}
                />
              </Box>
            </FormField>

            <Box
              margin={{ top: "medium", bottom: "small" }}
              align="center"
              // background="pink"
            >
              <Button
                label="Let's Talk"
                primary
                type="submit"
                pad={{ horizontal: "small", vertical: "xsmall" }}
              />
            </Box>
          </Form>
        </Box>
      </Box>
    </Box>
  );
};
