import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import type React from "react";
import "./Forms.css";

type InitialCreate = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FormProps = {
  handleNext: () => void;
};

const CreateAcc: React.FC<FormProps> = ({ handleNext }) => {
  const initialValue: InitialCreate = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const validation = Yup.object({
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], "Passwords must match")
      .required("Please confirm your password")
  });

  const onSubmit = (values: InitialCreate) => {
    console.log("Form 1 - Create Account:", values);
    handleNext();
  };

  return (
    <div className="form-wrapper">
      <div className="form-step-indicator">Step 1 of 3</div>
      <h2 className="form-title">Basic Information</h2>
      <p className="form-subtitle">Let's start with your account details</p>

      <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validation}>
        {({ errors, touched, isSubmitting }) => (
          <Form className="custom-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <Field
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  className={errors.firstName && touched.firstName ? "input-error" : ""}
                />
                <ErrorMessage name="firstName" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Doe"
                  className={errors.lastName && touched.lastName ? "input-error" : ""}
                />
                <ErrorMessage name="lastName" component="div" className="error-message" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="john.doe@example.com"
                className={errors.email && touched.email ? "input-error" : ""}
              />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Enter a strong password"
                className={errors.password && touched.password ? "input-error" : ""}
              />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Re-enter your password"
                className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
              />
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-next" disabled={isSubmitting}>
                Next Step →
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateAcc;