import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function CandidateForm() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    resumeText: "",
  });

  function handleChange(event: any) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  }

  return (
    <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
      <h3 className="font-bold text-xl">Candidate Info</h3>
      <form>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 undefined">
            Your Name
          </label>
          <div className="flex flex-col items-start sm:flex-row">
            <div className="w-full sm:w-1/2 sm:pr-2">
              <input
                type="text"
                name="firstName"
                placeholder="John"
                value={formValues.firstName}
                onChange={handleChange}
                required
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="w-full mt-4 sm:w-1/2 sm:mt-0 sm:pl-2 sm:mt-0">
              <input
                type="text"
                name="lastName"
                placeholder="Smith"
                value={formValues.lastName}
                onChange={handleChange}
                required
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Resume Contents
          </label>
          <div className="flex flex-col items-start">
            <textarea
              name="resumeText"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows={10}
              value={formValues.resumeText}
              onChange={handleChange}
              placeholder="Copy and paste your resume info. This will help us personalize your cover letter!"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
