import React from "react";
import { useFormContext } from "../contexts/FormContext";

interface candidateFormProps {
  nextStep: () => void;
}

export default function CandidateForm({ nextStep: onNext }: candidateFormProps) {
  const { formData, setFormData } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
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
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="w-full mt-4 sm:w-1/2 sm:pl-2 sm:mt-0">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Smith"
                  value={formData.lastName}
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
                value={formData.resumeText}
                onChange={handleTextArea}
                placeholder="Copy and paste your resume info. This will help us personalize your cover letter!"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
