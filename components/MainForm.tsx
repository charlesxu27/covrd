import React, { useState, createContext } from "react";
import CandidateForm from "./CandidateForm";
import HiringManagerForm from "./HiringManagerForm";
import JobForm from "./JobForm";

export default function MainForm() {
  const FORM_STEPS = [
    {
      label: "Candidate",
    },
    {
      label: "Company",
    },
    {
      label: "Job",
    },
  ];

  const FORM_STATE = {
    selectedIndex: 0,
    steps: {
      details: {
        valid: false,
        dirty: false,
        value: {
          name: "",
          dueDate: "",
        },
      },
      preferences: {
        valid: false,
        dirty: false,
        value: {
          receiveEmails: false,
          receiveNotifications: false,
        },
      },
    },
  };

  const FormStateContext = createContext({
    form: FORM_STATE,
    setForm: (
      form: typeof FORM_STATE | ((form: typeof FORM_STATE) => typeof FORM_STATE)
    ) => {},
  });
}

// export default function MainForm() {
//   const [step, setStep] = useState<number>(1);

//   const nextStep = () => {
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   switch (step) {
//     case 1:
//       return <CandidateForm nextStep={nextStep} />;
//     case 2:
//       return <HiringManagerForm nextStep={nextStep} prevStep={prevStep} />;
//     case 3:
//       return <JobForm prevStep={prevStep} />;
//   }
// }
