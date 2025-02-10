"use client";

import React, { useState } from "react";
import { FiUser } from "react-icons/fi"; // For the user icon placeholder

// Define TypeScript types for profile data
interface ProfileData {
  name: string;
  email: string;
  password: string;
  height: string;
  weight: string;
  locale: string;
}

const EditProfile = () => {
  // Define state for profile data
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "",
    email: "",
    password: "",
    height: "",
    weight: "",
    locale: "",
  });

  const [image, setImage] = useState<string | null>(null);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle image removal
  const handleImageRemove = () => {
    setImage(null);
  };

  return (
    <div className="bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Profile</h2>

        {/* Profile Picture */}
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center border">
              {image ? (
                <img src={image} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <FiUser className="text-gray-400 w-10 h-10" />
              )}
            </div>
            <div>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                onClick={() => document.getElementById("imageUpload")?.click()}
              >
                + Upload Image
              </button>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <button
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                onClick={handleImageRemove}
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="grid grid-cols-1 gap-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-600 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-600 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={profileData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>

          {/* Height Field */}
          <div>
            <label className="block text-gray-600 font-medium">Height</label>
            <input
              type="text"
              name="height"
              value={profileData.height}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Height"
            />
          </div>

          {/* Weight Field */}
          <div>
            <label className="block text-gray-600 font-medium">Weight</label>
            <input
              type="text"
              name="weight"
              value={profileData.weight}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Weight"
            />
          </div>

          {/* Locale Field */}
          <div>
            <label className="block text-gray-600 font-medium">Locale</label>
            <input
              type="text"
              name="locale"
              value={profileData.locale}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Locale"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
