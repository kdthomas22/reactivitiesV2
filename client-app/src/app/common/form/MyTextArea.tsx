import { useField } from "formik";
import React from "react";
import { Form, Label } from "semantic-ui-react";

interface MyTextAreaProps {
  placeholder: string;
  name: string;
  rows: number;
  label?: string;
}

export default function MyTextArea(props: MyTextAreaProps) {
  const [field, meta] = useField(props.name);
  return (
    <Form.Field error={meta.error && !!meta.error}>
      <label>{props.label}</label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
}
