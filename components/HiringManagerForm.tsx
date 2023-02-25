import React from 'react'

export default function HiringManagerForm() {
  return (
    <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form>
            <h3 className="font-bold text-xl">Hiring Manager Info</h3>
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
                  placeholder="sample@gmail.com"
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
                  htmlFor="zip"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Zip Code
                </label>
                <div className="flex flex-col items-start sm:flex-row">
                  <div className="w-full sm:w-1/2 sm:pr-2">
                    <input
                      type="text"
                      name="zip"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
  )
}
