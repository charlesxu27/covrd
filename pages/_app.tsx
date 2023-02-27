import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FormProvider } from "../contexts/FormContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // const [firstName, setFirstName] = useState<string>("");
  // const [lastName, setLastName] = useState<string>("");
  // const [resumeText, setResumeText] = useState<string>("");
  // const [hiringManagerName, setHiringManagerName] = useState<string>("");
  // const [companyName, setCompanyName] = useState<string>("");
  // const [address1, setAddress1] = useState<string>("");
  // const [address2, setAddress2] = useState<string>("");
  // const [city, setCity] = useState<string>("");
  // const [state, setState] = useState<string>("");
  // const [zipcode, setZipcode] = useState<string>("");
  // const [jobTitle, setJobTitle] = useState<string>("");
  // const [jobDescription, setJobDescription] = useState<string>("");

  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default MyApp;
