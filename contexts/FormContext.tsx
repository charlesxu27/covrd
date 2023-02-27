import React, { createContext, useContext, useState } from "react";

interface FormState {
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
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

export const FormContext = createContext<FormContextProps>({
  formState: {
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
  setFormState: () => {},
});

export const useFormContext = () => useContext(FormContext);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formState, setFormState] = useState<FormState>({
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
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
