import React, { useState } from "react";
import { useFormContext } from "../contexts/FormContext";
import pdfHandler from "../pages/api/pdf";

interface jobFormProps {
  prevStep: () => void;
}

export default function JobForm({ prevStep: prevStep }: jobFormProps) {
  const { formData, setFormData } = useFormContext();
  const [pdfData, setPdfData] = useState<Blob | null>(null);

  async function fetchPdf() {
    const response = await fetch("/api/pdf", {
      method: "POST",
      body: JSON.stringify({
        /* your data object here */
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.blob();
    console.log("datablob", data);
    setPdfData(data);
  }

  function downloadPdf() {
    if (pdfData) {
      const url = URL.createObjectURL(pdfData);
      const a = document.createElement("a");
      a.href = url;
      a.download = "coverletter.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    await fetchPdf();
    downloadPdf();
    console.log(pdfData);
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!pdfData) {
    return (
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <h3 className="font-bold text-xl">Job Description</h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 undefined">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Be as specific as possible"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Job Description and Requirements
              </label>
              <div className="flex flex-col items-start">
                <textarea
                  name="jobDescription"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows={10}
                  value={formData.jobDescription}
                  onChange={handleTextArea}
                  placeholder="Copy and paste the most relevant parts of the job description."
                />
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="block w-full mt-1 mr-2 border-gray-300 bg-indigo-100 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                type="submit"
                className="block w-full mt-1 ml-2 border-gray-300 bg-indigo-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fixed inset-0 z-50">
        <object
          className="w-screen h-screen"
          data={URL.createObjectURL(pdfData)}
          type="application/pdf"
        >
          <p>PDF could not be displayed.</p>
        </object>
      </div>
    );
  }
}
