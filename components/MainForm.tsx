import React, { useState } from "react";
import CandidateForm from "./CandidateForm";
import HiringManagerForm from "./HiringManagerForm";
import JobForm from "./JobForm";

export default function MainForm() {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return <CandidateForm nextStep={nextStep} />;
    case 2:
      return <HiringManagerForm nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <JobForm prevStep={prevStep} />;
  }

  return (
    // if nothing returns, this is the message.
    <div>
        ERROR: No form rendered.
        {/* <CandidateForm onNext={nextStep} /> */}
    </div>
  )
}
