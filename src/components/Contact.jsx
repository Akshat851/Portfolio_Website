import React, { useContext, useState } from "react";
import {
  Box,
  Heading,
  Text,
  ResponsiveContext,
  Form,
  FormField,
  TextInput,
  TextArea,
  MaskedInput,
  Button,
  Spinner,
  Notification,
} from "grommet";
import emailjs from "@emailjs/browser";
export const Contact = () => {
  const size = useContext(ResponsiveContext);
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    description: "",
  });
  const [stateDisabled, setStateDisabled] = useState(false);
  const [sendMessageSucess, setSendMessageSucess] = useState();
  const [sendMessageError, setSendMessageError] = useState();
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

  const sendEmail = (e) => {
    e.preventDefault();
    setStateDisabled(true);
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          setFormValues({
            name: "",
            email: "",
            description: "",
          });
          setSendMessageSucess(true);
          setStateDisabled(false);
        },
        (error) => {
          setStateDisabled(false);
          console.log(error.text);
        }
      );
  };

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
            onSubmit={sendEmail}
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

            <Box margin={{ top: "medium", bottom: "small" }} align="center">
              <Button
                label="Let's Talk"
                primary
                type="submit"
                pad={{ horizontal: "small", vertical: "xsmall" }}
                disabled={stateDisabled}
                icon={stateDisabled ? <Spinner /> : undefined}
              />
            </Box>
          </Form>
        </Box>
      </Box>
      <Box align="center" gap="small">
        {sendMessageSucess && (
          <Notification
            toast
            status="normal"
            message="Mail sent successfully."
            onClose={() => {
              setSendMessageSucess(false);
            }}
            time={4000}
          />
        )}
        {sendMessageError && (
          <Notification
            toast
            status="critical"
            message="Error sending mail."
            onClose={() => {
              setSendMessageError(false);
            }}
            time={4000}
          />
        )}
      </Box>
    </Box>
  );
};
