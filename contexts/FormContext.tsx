import React, { createContext, useContext, useState } from "react";

export interface FormInterface {
  firstName: string;
  lastName: string;
  resumeText: string;
  hiringManagerName: string;
  companyName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  jobTitle: string;
  jobDescription: string;
}

interface FormContextProps {
  formData: FormInterface;
  setFormData: (data: FormInterface) => void;
}

export const FormContext = createContext<FormContextProps>({
  formData: {
    firstName: "",
    lastName: "",
    resumeText: "",
    hiringManagerName: "",
    companyName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    jobTitle: "",
    jobDescription: "",
  },
  setFormData: () => {},
});

export const useFormContext = () => useContext(FormContext);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormInterface>({
    firstName: "",
    lastName: "",
    resumeText: "",
    hiringManagerName: "",
    companyName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    jobTitle: "",
    jobDescription: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
