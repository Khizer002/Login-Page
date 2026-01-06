import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

type InitialValues = {
  email: string;
  password: string;
};

const Home = () => {
  const navigate = useNavigate();

  const initialValues: InitialValues = {
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
  });

  const onSubmit = (values: InitialValues) => {
    console.log(values);
    navigate("/home/loggedIn", { state: { userEmail: values.email } });
  };

  return (
    <div className="home-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Please login to your account</p>
        </div>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ errors, touched }) => (
            <Form className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className={errors.email && touched.email ? "input-error" : ""}
                />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className={errors.password && touched.password ? "input-error" : ""}
                />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>

              <button type="submit" className="btn-primary">
                Log In
              </button>
              <button className="forgot">Forgot Password</button>

              <div className="divider">
                <span>OR</span>
              </div>

              <Link to="/home/createAcc" className="btn-secondary">
                Create New Account
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Home;