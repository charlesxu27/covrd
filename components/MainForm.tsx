import React, { useState } from "react";
import CandidateForm from "./CandidateForm";
import HiringManagerForm from "./HiringManagerForm";
import JobForm from "./JobForm";

export default function MainForm() {
  interface FormData {
    firstName: string,
    lastName: string,
    resumeText: string,
    hiringManagerName: string,
    companyName: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    zipcode: string
  }

  const [step, setStep] = useState(3)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    resumeText: "",
    hiringManagerName: "",
    companyName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: ""
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return <CandidateForm formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <HiringManagerForm formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <JobForm formData={formData} setFormData={setFormData} prevStep={prevStep} />;
  }


}
