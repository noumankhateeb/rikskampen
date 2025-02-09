"use client";

import { useState } from "react";

// Define TypeScript types for Contest Data
interface ContestData {
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  duration: string;
}

export default function AddContest() {
  // Define state with proper types
  const [contestData, setContestData] = useState<ContestData>({
    name: "",
    startDate: "",
    endDate: "",
    location: "",
    duration: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContestData({ ...contestData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-4">Add Contest</h2>

        {/* Form Grid */}
        <div className="grid grid-cols-1 gap-6">

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={contestData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
            />
          </div>

          {/* Start & End Date Fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 font-medium">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={contestData.startDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium">End Date</label>
              <input
                type="date"
                name="endDate"
                value={contestData.endDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Location Field */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={contestData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Location"
            />
          </div>

          {/* Contest Duration Field */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">Contest Duration</label>
            <input
              type="text"
              name="duration"
              value={contestData.duration}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contest Duration"
            />
          </div>

        </div>

        <div className="mt-6 flex justify-end">
          <button
            className={`px-4 py-2 text-white rounded-md transition bg-blue-600 hover:bg-blue-700 cursor-pointer`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
