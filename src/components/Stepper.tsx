import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateAcc from './CreateAcc';
import Form2 from './Form2';
import Form3 from './Form3';
import "./Stepper.css";

const steps = [
  'Create Account',
  'Personal Details',
  'Profile Information',
];

export const handleForms = (activeStep: number, handleNext: () => void, handleBack: () => void) => {
  switch (activeStep) {
    case 0:
      return <CreateAcc handleNext={handleNext} />
    case 1:
      return <Form2 handleNext={handleNext} handleBack={handleBack} />
    case 2:
      return <Form3 handleNext={handleNext} handleBack={handleBack} />
    default:
      return <div>Invalid ActiveStep</div>;
  }
}

const ComponentStepper = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  }

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  }

  const handleReset = () => {
    setActiveStep(0);
  }

  const handleGoToLogin = () => {
    navigate("/");
  }

  return (
    <div className="stepper-container">
      <div className="stepper-card">
        <div className="stepper-header">
          <h1>Create Your Account</h1>
          <p>Complete the steps below to register</p>
        </div>

        <Box sx={{ width: '100%', mb: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <div className="form-content">
          {activeStep === steps.length ? (
            <div className="completion-container">
              <div className="completion-icon">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="#10b981" opacity="0.2" />
                  <circle cx="50" cy="50" r="35" fill="#10b981" />
                  <path
                    d="M30 50 L45 65 L70 35"
                    stroke="white"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2>Registration Complete! 🎉</h2>
              <p>Your account has been successfully created</p>
              <div className="completion-buttons">
                <button onClick={handleGoToLogin} className="btn-primary">
                  Go to Login
                </button>
                <button onClick={handleReset} className="btn-secondary">
                  Create Another Account
                </button>
              </div>
            </div>
          ) : (
            <div>
              {handleForms(activeStep, handleNext, handleBack)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ComponentStepper;