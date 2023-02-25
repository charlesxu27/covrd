import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CandidateForm from "../components/CandidateForm";

export default function TryNow() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <h2>Let's Get Started</h2>
      <CandidateForm />

      </div>
      <Footer />
    </>
  );
}
