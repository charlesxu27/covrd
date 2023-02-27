import { createContext } from 'react';

export interface FormDataInterface {
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

export const FormContext = createContext<FormDataInterface>({
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
  jobDescription: ""
});
