import React from "react";
import Link from "next/link";

export default function RequestForm() {
  return (
    <div className="flex justify-evenly bg-gray-50">
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-indigo-500">
              Let's get started!
            </h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form>
            <h2 className="font-bold text-xl">Candidate Info</h2>
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Your Name
              </label>
              <div className="flex flex-col items-start sm:flex-row">
                <div className="w-full sm:w-1/2 sm:pr-2">
                  <input
                    type="text"
                    name="address_line_1"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="John"
                  />
                </div>
                <div className="w-full mt-4 sm:w-1/2 sm:mt-0 sm:pl-2 sm:mt-0">
                  <input
                    type="text"
                    name="address_line_2"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Smith"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="best_candidate_ever@gmail.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="address1"
                className="block text-sm font-medium text-gray-700"
              >
                Address Line 1
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="address1"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="address2"
                className="block text-sm font-medium text-gray-700"
              >
                Address Line 2 (Optional)
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="address2"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="city"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="flex">
            <div className="mt-4 flex flex-col">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                State
              </label>
              <div className="flex flex-col items-start sm:flex-row">
                <div className="w-full sm:w-1/2 sm:pr-2">
                  <input
                    type="text"
                    name="state"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Zip Code
              </label>
              <div className="flex flex-col items-start sm:flex-row">
                <div className="w-full sm:w-1/2 sm:pr-2">
                  <input
                    type="text"
                    name="state"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
            </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-indigo-500">
              Let's get started!
            </h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form>
            <h2 className="font-bold text-xl">Candidate Info</h2>
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Your Name
              </label>
              <div className="flex flex-col items-start sm:flex-row">
                <div className="w-full sm:w-1/2 sm:pr-2">
                  <input
                    type="text"
                    name="address_line_1"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="John"
                  />
                </div>
                <div className="w-full mt-4 sm:w-1/2 sm:mt-0 sm:pl-2 sm:mt-0">
                  <input
                    type="text"
                    name="address_line_2"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Smith"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="best_candidate_ever@gmail.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="address1"
                className="block text-sm font-medium text-gray-700"
              >
                Address Line 1
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="addres1"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Street Address"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="address1"
                className="block text-sm font-medium text-gray-700"
              >
                Address Line 1
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="addres1"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Street Address"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="john@gmail.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Address1
              </label>
              <div className="flex flex-col items-start sm:flex-row">
                <div className="w-full sm:w-1/2 sm:pr-2">
                  <input
                    type="text"
                    name="address_line_1"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Address Line 1"
                  />
                </div>
                <div className="w-full mt-4 sm:w-1/2 sm:mt-0 sm:pl-2 sm:mt-0">
                  <input
                    type="text"
                    name="address_line_2"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Address Line 2"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
