import { useState } from 'react';
import './App.css';
import StepFive from './pages/StepFive';
import StepFour from './pages/StepFour';
import StepOne from './pages/StepOne';
import StepThree from './pages/StepThree';
import StepZero from './pages/StepZero';
import StepTwo from './pages/StepTwo';
import StepSix from './pages/StepSix';
import ErrorPage from './pages/ErrorPage';

function App() {
  const [step, setStep] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    emailId: '',
    fathersName: '',
    residentialAddress: '',
    bankAccountNumber: '',
    bankIfscCode: '',
    upiId: '',
    adhaarCardFront: '',
    adhaarCardBack: '',
    panCard: '',
    proofOfResidence: '',
    passportSizePhoto: '',
    identityProof: '',
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    })
  }

  const handleSetState = (name, value) => {
    setState({
      ...state,
      [name]: value,
    })
  }
  const handleStep = () => {
    setStep(step + 1);
    // console.log(state);
  }

  const handleFinalUpload = () => {
    console.log(state);
    const url = "http://localhost:1337/doc";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    }).then(() => {
      handleStep();
    }).catch((err) => {
      setHasError(true);
      console.log(err);
    })
  }
  const stepArray = [
    <StepZero nextStep={handleStep} />,
    <StepOne nextStep={handleStep} handleChange={handleChange} state={state} />,
    <StepTwo nextStep={handleStep} handleChange={handleChange} state={state} />,
    <StepThree nextStep={handleStep} handleChange={handleChange} state={state} />,
    <StepFour nextStep={handleStep} handleSetState={handleSetState} />,
    <StepFive handleSetState={handleSetState} handleFinalUpload={handleFinalUpload} />,
    <StepSix />];
  return (
    <div className="flex items-center justify-center h-screen">
      <div className='md:w-2/4 px-8'>
        {
          hasError ? <ErrorPage /> : stepArray[step]
        }
      </div>
    </div>
  );
}

export default App;
