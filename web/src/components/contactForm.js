import React, { useState } from "react";
import * as styles from "./contactForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { encode } from "../lib/helpers";

const ContactForm = () => {
  const [formMsg, setFormMsg] = useState();
  const [msgColor, setMsgColor] = useState();
  return (
    <section className={styles.root}>
      <h1>Get in touch with us</h1>
      <p>
        Use the form below to send your message and a member of the Orange
        Blossom crew will reply within 24 hours!
      </p>
      <div className={styles.formContainer}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("*Required"),
            email: Yup.string()
              .required("*Required")
              .email("*Invalid email address"),
            message: Yup.string().required("*Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              fetch("/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({ "form-name": "contact-form", ...values }),
              })
                .then(() => {
                  setMsgColor(styles.msgSuccess);
                  setFormMsg("Thank you for your message!");
                  resetForm();
                })
                .catch(() => {
                  setMsgColor(styles.msgError);
                  setFormMsg("Error");
                })
                .finally(() => setSubmitting(false));
            }, 400);
          }}
        >
          <Form
            name="contact-form"
            data-netlify={true}
            className={styles.contactForm}
          >
            <div className={styles.fieldWrapper}>
              <span className={styles.label}>
                <label htmlFor="name">Name</label>
                <span className={styles.errorMsg}>
                  <ErrorMessage name="name" />
                </span>
              </span>
              <Field id="name" name="name" type="text" />
            </div>
            <div className={styles.fieldWrapper}>
              <span className={styles.label}>
                <label htmlFor="email">Email</label>
                <span className={styles.errorMsg}>
                  <ErrorMessage name="email" />
                </span>
              </span>
              <Field id="email" name="email" type="email" />
            </div>
            <div className={styles.fieldWrapper}>
              <span className={styles.label}>
                <label htmlFor="message">Message</label>
                <span className={styles.errorMsg}>
                  <ErrorMessage name="message" />
                </span>
              </span>
              <Field id="message" name="message" type="text" as="textarea" />
            </div>
            <div className={styles.buttonWrapper}>
              <span className={msgColor}>{formMsg}</span>
              <button type="submit">Send</button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
