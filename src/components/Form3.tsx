import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import type React from "react";
import "./Forms.css";

type Form3Values = {
  occupation: string;
  company: string;
  website: string;
  aboutMe: string;
  acceptTerms: boolean;
  newsletter: boolean;
};

type FormProps = {
  handleNext: () => void;
  handleBack: () => void;
};

const Form3: React.FC<FormProps> = ({ handleNext, handleBack }) => {
  const initialValues: Form3Values = {
    occupation: "",
    company: "",
    website: "",
    aboutMe: "",
    acceptTerms: false,
    newsletter: false
  };

  const validationSchema = Yup.object({
    occupation: Yup.string()
      .min(2, "Occupation must be at least 2 characters")
      .required("Occupation is required"),
    company: Yup.string().min(2, "Company name must be at least 2 characters"),
    website: Yup.string().url("Must be a valid URL (include http:// or https://)"),
    aboutMe: Yup.string()
      .min(20, "Please write at least 20 characters")
      .max(500, "Maximum 500 characters allowed")
      .required("About Me is required"),
    acceptTerms: Yup.bool().oneOf([true], "You must accept the terms and conditions")
  });

  const onSubmit = (values: Form3Values) => {
    console.log("Form 3 - Profile Information:", values);
    handleNext();
  };

  return (
    <div className="form-wrapper">
      <div className="form-step-indicator">Step 3 of 3</div>
      <h2 className="form-title">Profile Information</h2>
      <p className="form-subtitle">Final step - tell us about your professional background</p>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ errors, touched, isSubmitting, values }) => (
          <Form className="custom-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="occupation">Occupation *</label>
                <Field
                  type="text"
                  name="occupation"
                  id="occupation"
                  placeholder="Software Developer"
                  className={errors.occupation && touched.occupation ? "input-error" : ""}
                />
                <ErrorMessage name="occupation" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company (Optional)</label>
                <Field
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Tech Corp"
                  className={errors.company && touched.company ? "input-error" : ""}
                />
                <ErrorMessage name="company" component="div" className="error-message" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="website">Website or Portfolio (Optional)</label>
              <Field
                type="text"
                name="website"
                id="website"
                placeholder="https://yourwebsite.com"
                className={errors.website && touched.website ? "input-error" : ""}
              />
              <ErrorMessage name="website" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="aboutMe">
                About Me * ({values.aboutMe.length}/500)
              </label>
              <Field
                as="textarea"
                name="aboutMe"
                id="aboutMe"
                rows="5"
                placeholder="Tell us about yourself, your interests, and professional background..."
                className={errors.aboutMe && touched.aboutMe ? "input-error" : ""}
              />
              <ErrorMessage name="aboutMe" component="div" className="error-message" />
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <Field type="checkbox" name="acceptTerms" />
                <span>
                  I accept the <a href="#" className="link">Terms & Conditions</a> and <a href="#" className="link">Privacy Policy</a> *
                </span>
              </label>
              <ErrorMessage name="acceptTerms" component="div" className="error-message" />
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <Field type="checkbox" name="newsletter" />
                <span>Subscribe to newsletter for updates and offers</span>
              </label>
            </div>

            <div className="form-actions">
              <button type="button" onClick={handleBack} className="btn-back">
                ← Back
              </button>
              <button type="submit" className="btn-finish" disabled={isSubmitting}>
                Complete Registration ✓
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form3;