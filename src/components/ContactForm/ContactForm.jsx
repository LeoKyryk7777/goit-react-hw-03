import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const initialValues = {
    name: "",
    number: "",
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    onAdd({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field className={css.input} name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} name="number" component="span" />
          <button className={css.formButton} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
