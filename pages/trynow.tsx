import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainForm from "../components/MainForm";
import FormProvider from "../contexts/FormContext";

export default function TryNow() {
  return (
    <>
      <Navbar />
      <FormProvider>
        <MainForm />
      </FormProvider>
      <Footer />
    </>
  );
}
