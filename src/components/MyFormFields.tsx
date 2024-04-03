import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Field, FieldArray, FieldProps, useFormikContext } from "formik";
import React from "react";
import { currencies } from "../utils/contants";

const MyFormFields: React.FC = () => {
  const { setFieldValue } = useFormikContext();
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;

    // Remove any non-numeric or non-decimal characters
    value = value.replace(/[^\d.]/g, "");

    // Ensure there's only one decimal point
    const decimalCount = (value.match(/\./g) || []).length;
    if (decimalCount > 1) return;

    // Ensure maximum two digits after the decimal point
    const [, decimalPart] = value.split(".");
    if (decimalPart && decimalPart.length > 2) return;

    setFieldValue("amount", value);
  };
  return (
    <>
      <Field name="title">
        {({ field }: FieldProps) => (
          <TextField
            {...field}
            label="Title"
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
        )}
      </Field>
      <Field name="amount">
        {({ field }: FieldProps) => (
          <TextField
            {...field}
            label="Amount"
            variant="outlined"
            type="text" // Change the type to text
            fullWidth
            required
            margin="normal"
            onChange={handleAmountChange} // Handle the change event to enforce numeric input
          />
        )}
      </Field>
      <FormControl variant="outlined" fullWidth required margin="normal">
        <InputLabel id="currency-label">Currency</InputLabel>
        <Field name="currency">
          {({ field }: FieldProps) => (
            <Select {...field} labelId="currency-label" label="Currency">
              {currencies.map((cur) => (
                <MenuItem key={cur} value={cur}>
                  {cur}
                </MenuItem>
              ))}
            </Select>
          )}
        </Field>
        <FieldArray name="persons">
          {(arrayHelpers) => (
            <>
              <Box my={3}>
                <Grid container spacing={2}>
                  {arrayHelpers.form.values.persons.map(
                    (person: string, index: number) => (
                      <Grid item key={index}>
                        <TextField
                          label={`Person ${index + 1}`}
                          value={person}
                          onChange={(e) =>
                            arrayHelpers.replace(index, e.target.value)
                          }
                        />
                      </Grid>
                    )
                  )}
                </Grid>
                <Button
                  variant="outlined"
                  onClick={() => arrayHelpers.push("")}
                  style={{ marginTop: "10px" }}
                >
                  Add Person
                </Button>
              </Box>
            </>
          )}
        </FieldArray>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </>
  );
};
export default MyFormFields;
