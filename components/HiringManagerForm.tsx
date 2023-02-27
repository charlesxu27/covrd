import React from "react";
import { useFormContext } from "../contexts/FormContext";

interface hiringManagerFormProps {
  nextStep: () => void;
  prevStep: () => void;
}

export default function HiringManagerForm({
  nextStep: nextStep,
  prevStep: prevStep,
}: hiringManagerFormProps) {
  const { formData, setFormData } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-xl">Hiring Manager Info</h3>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="hiringManagerName"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Bill Gates"
                value={formData.hiringManagerName}
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="companyName"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Microsoft"
                value={formData.companyName}
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Address Line 1
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="address1"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={formData.address1}
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Address Line 2 (Optional)
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="address2"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={formData.address2}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="city"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={formData.city}
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex">
            <div className="mt-4 flex flex-col">
              <label className="block text-sm font-medium text-gray-700 undefined">
                State
              </label>
              <div className="flex flex-col items-start sm:flex-row">
                <div className="w-full sm:w-1/2 sm:pr-2">
                  <input
                    type="text"
                    name="state"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={formData.state}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <label className="block text-sm font-medium text-gray-700 undefined">
                Zip Code
              </label>
              <div className="flex flex-col items-start sm:flex-row">
                <div className="w-full sm:w-1/2 sm:pr-2">
                  <input
                    type="text"
                    name="zipcode"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={formData.zipcode}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
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
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
