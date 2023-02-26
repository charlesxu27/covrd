import React, { useState } from "react";

export default function JobForm() {
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
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
        <h3 className="font-bold text-xl">Job Description</h3>
        <form>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 undefined">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Be as specific as possible"
              value={formValues.lastName}
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
                value={formValues.resumeText}
                onChange={handleChange}
                placeholder="Copy and paste the most relevant parts of the job description."
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
