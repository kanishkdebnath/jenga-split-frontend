import { Box, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { FormData } from "../types/types";
import MyFormFields from "./MyFormFields";

const SingleExpenseSection = () => {
  const initialValues: FormData = {
    title: "",
    amount: 0,
    currency: "",
    persons: [],
  };

  const handleSubmit = (values: FormData) => {
    console.log(values);
  };

  return (
    <Box>
      <Typography variant="h4">Add Details of the expense</Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <MyFormFields />
        </Form>
      </Formik>
    </Box>
  );
};

export default SingleExpenseSection;
