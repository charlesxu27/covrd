import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FormContext, FormDataInterface } from "../contexts/FormContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [resumeText, setResumeText] = useState<string>("");
  const [hiringManagerName, setHiringManagerName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [address1, setAddress1] = useState<string>("");
  const [address2, setAddress2] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");

  const formData: FormDataInterface = {
    firstName,
    lastName,
    resumeText,
    hiringManagerName,
    companyName,
    address1,
    address2,
    city,
    state,
    zipcode,
    jobTitle,
    jobDescription,
  };

  return (
    <FormContext.Provider value={formData}>
      <Component {...pageProps} />
    </FormContext.Provider>
  );
}

export default MyApp;
