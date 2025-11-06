import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import type React from "react";
import "./Forms.css";

type Form2Values = {
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  country: string;
};

type FormProps = {
  handleNext: () => void;
  handleBack: () => void;
};

const Form2: React.FC<FormProps> = ({ handleNext, handleBack }) => {
  const initialValues: Form2Values = {
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    country: ""
  };

  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(/^[0-9]{10,15}$/, "Phone number must be 10-15 digits")
      .required("Phone is required"),
    dateOfBirth: Yup.date()
      .max(new Date(), "Date of birth cannot be in the future")
      .required("Date of Birth is required"),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string()
      .min(5, "Address must be at least 5 characters")
      .required("Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required")
  });

  const onSubmit = (values: Form2Values) => {
    console.log("Form 2 - Personal Details:", values);
    handleNext();
  };

  return (
    <div className="form-wrapper">
      <div className="form-step-indicator">Step 2 of 3</div>
      <h2 className="form-title">Personal Details</h2>
      <p className="form-subtitle">Tell us more about yourself</p>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ errors, touched, isSubmitting }) => (
          <Form className="custom-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <Field
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="1234567890"
                  className={errors.phone && touched.phone ? "input-error" : ""}
                />
                <ErrorMessage name="phone" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth *</label>
                <Field
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  className={errors.dateOfBirth && touched.dateOfBirth ? "input-error" : ""}
                />
                <ErrorMessage name="dateOfBirth" component="div" className="error-message" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender *</label>
              <Field
                as="select"
                name="gender"
                id="gender"
                className={errors.gender && touched.gender ? "input-error" : ""}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="address">Street Address *</label>
              <Field
                type="text"
                name="address"
                id="address"
                placeholder="123 Main Street"
                className={errors.address && touched.address ? "input-error" : ""}
              />
              <ErrorMessage name="address" component="div" className="error-message" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <Field
                  type="text"
                  name="city"
                  id="city"
                  placeholder="New York"
                  className={errors.city && touched.city ? "input-error" : ""}
                />
                <ErrorMessage name="city" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="country">Country *</label>
                <Field
                  type="text"
                  name="country"
                  id="country"
                  placeholder="United States"
                  className={errors.country && touched.country ? "input-error" : ""}
                />
                <ErrorMessage name="country" component="div" className="error-message" />
              </div>
            </div>

            <div className="form-actions">
              <button type="button" onClick={handleBack} className="btn-back">
                ← Back
              </button>
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

export default Form2;