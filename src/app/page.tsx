"use client";

import React from "react";
import { PiUserBold, PiCurrencyDollarBold, PiRepeatBold, PiLinkBold } from "react-icons/pi";
import { FaGoogle, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const stats = [
  { id: 1, title: "Total marketing spend", value: "$192,817", change: "+5.3%", description: "vs last month", icon: <PiUserBold className="text-red-500 text-3xl" />, bg: "bg-red-100" },
  { id: 2, title: "ROI", value: "270%", change: "+8.1%", description: "vs last month", icon: <PiCurrencyDollarBold className="text-blue-500 text-3xl" />, bg: "bg-blue-100" },
  { id: 3, title: "Conversion rates", value: "4.5%", change: "+0.9%", description: "vs last month", icon: <PiRepeatBold className="text-green-500 text-3xl" />, bg: "bg-green-100" },
  { id: 4, title: "Total leads", value: "1,289", change: "+16.2%", description: "vs last month", icon: <PiLinkBold className="text-purple-500 text-3xl" />, bg: "bg-purple-100" },
];

const pages = [
  { url: "/dashboard", views: 6465, change: "+1.7%", visitors: 1078, visitorChange: "+1.2%" },
  { url: "/affiliate", views: 3687, change: "+1.4%", visitors: 801, visitorChange: "+0.9%" },
  { url: "/contract", views: 2918, change: "+2.6%", visitors: 655, visitorChange: "+1.4%" },
  { url: "/products", views: 4882, change: "-0.7%", visitors: 936, visitorChange: "-0.3%" },
  { url: "/sign-in", views: 1527, change: "+1.1%", visitors: 389, visitorChange: "+0.8%" },
  { url: "/about", views: 2103, change: "-0.9%", visitors: 450, visitorChange: "-1.5%" },
];

const trafficData = [
  { source: "Direct", visits: 1500, unique: 1200, bounce: "40%", duration: "00:03:45", progress: 60 },
  { source: "Natural", visits: 3000, unique: 2500, bounce: "35%", duration: "00:04:20", progress: 75 },
  { source: "Referral", visits: 1000, unique: 850, bounce: "45%", duration: "00:03:10", progress: 80 },
  { source: "Social Media", visits: 2000, unique: 1800, bounce: "50%", duration: "00:02:50", progress: 40 },
  { source: "Email Campaign", visits: 800, unique: 700, bounce: "30%", duration: "00:05:00", progress: 55 },
];

const channels = [
  { name: "Google", percent: 40, total: 31731, icon: <FaGoogle className="text-red-500" /> },
  { name: "Instagram", percent: 30, total: 23798, icon: <FaInstagram className="text-pink-500" /> },
  { name: "Facebook", percent: 15, total: 11899, icon: <FaFacebook className="text-blue-500" /> },
  { name: "Twitter", percent: 13, total: 10313, icon: <FaXTwitter className="text-black" /> },
];

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* KPI Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center text-center">
            <div className={`p-3 rounded-full ${stat.bg}`}>{stat.icon}</div>
            <p className="text-gray-500 mt-2">{stat.title}</p>
            <h3 className="text-2xl font-semibold">{stat.value}</h3>
            <p className="text-green-600 font-medium">{stat.change}</p>
            <p className="text-gray-400 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Top Pages */}
        <div className="bg-white shadow-md rounded-lg p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Top Pages</h2>
            <button className="px-3 py-1 text-sm font-medium bg-gray-100 border rounded-md hover:bg-gray-200">
              Export Data
            </button>
          </div>

          <table className="w-full text-sm text-gray-600">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="text-left py-2">Page URL</th>
                <th className="text-center py-2">Views</th>
                <th className="text-center py-2">Unique Visitors</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page, index) => (
                <tr key={index} className="border-b last:border-none">
                  <td className="py-3 font-medium text-gray-800">{page.url}</td>
                  <td className="text-center font-medium">
                    {page.views}{" "}
                    <span className={`text-xs font-semibold ${page.change.includes("-") ? "text-red-500" : "text-green-500"}`}>
                      {page.change}
                    </span>
                  </td>
                  <td className="text-center font-medium">
                    {page.visitors}{" "}
                    <span className={`text-xs font-semibold ${page.visitorChange.includes("-") ? "text-red-500" : "text-green-500"}`}>
                      {page.visitorChange}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* Session Devices (Pixel-Perfect Donut Chart using SVG) */}
        <div className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Session Devices</h2>

          {/* Donut Chart with SVG */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              {/* Background Circle */}
              <circle cx="18" cy="18" r="15.5" fill="transparent" stroke="#E5E7EB" strokeWidth="3"></circle>

              {/* Desktop (42.1%) - Blue */}
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="transparent"
                stroke="#1E88E5"
                strokeWidth="3"
                strokeDasharray="42.1 100"
                strokeDashoffset="0"
                strokeLinecap="round"
              ></circle>

              {/* Mobile (33.7%) - Orange */}
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="transparent"
                stroke="#FFA726"
                strokeWidth="3"
                strokeDasharray="33.7 100"
                strokeDashoffset="-42.1"
                strokeLinecap="round"
              ></circle>

              {/* Tablet (19.6%) - Light Blue */}
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="transparent"
                stroke="#64B5F6"
                strokeWidth="3"
                strokeDasharray="19.6 100"
                strokeDashoffset="-75.8"
                strokeLinecap="round"
              ></circle>
            </svg>
          </div>

          {/* Labels */}
          <div className="flex justify-around w-full mt-4">
            <div className="text-center">
              <span className="text-blue-500 text-xl">🖥️</span>
              <p className="text-sm text-gray-600">Desktop</p>
              <p className="text-lg font-semibold">42.1%</p>
            </div>
            <div className="text-center">
              <span className="text-orange-400 text-xl">📱</span>
              <p className="text-sm text-gray-600">Mobile</p>
              <p className="text-lg font-semibold">33.7%</p>
            </div>
            <div className="text-center">
              <span className="text-blue-300 text-xl">📊</span>
              <p className="text-sm text-gray-600">Tablet</p>
              <p className="text-lg font-semibold">19.6%</p>
            </div>
          </div>
        </div>


        {/* Top Channels */}
        <div className="bg-white shadow-md rounded-lg p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Top Channel</h2>
            <button className="px-3 py-1 text-sm font-medium bg-gray-100 border rounded-md hover:bg-gray-200">
              Export Data
            </button>
          </div>

          {/* Visitor Count */}
          <div className="text-2xl font-semibold">
            79,328 <span className="text-green-600 text-sm font-medium">+2.6%</span>
          </div>

          {/* Channel List */}
          <table className="w-full text-sm text-gray-600 mt-4">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="text-left py-2">Channel</th>
                <th className="text-center py-2">Percentage</th>
                <th className="text-right py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {channels.map((channel, index) => (
                <tr key={index} className="border-b last:border-none">
                  <td className="flex items-center space-x-2 py-3 font-medium">
                    {channel.icon}
                    <span className="text-gray-800">{channel.name}</span>
                  </td>
                  <td className="text-center font-medium">{channel.percent}%</td>
                  <td className="text-right font-medium">{channel.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>


      {/* Traffic Data */}
      <div className="bg-white shadow-md rounded-lg p-5 mt-6">
        <h2 className="text-lg font-semibold mb-4">Traffic Data</h2>
        <table className="w-full text-sm text-gray-600">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left">Source</th>
              <th className="py-2 text-center">Visits</th>
              <th className="py-2 text-center">Unique Visitors</th>
              <th className="py-2 text-center">Bounce Rate</th>
              <th className="py-2 text-center">Avg. Duration</th>
            </tr>
          </thead>
          <tbody>
            {trafficData.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{data.source}</td>
                <td className="text-center">{data.visits}</td>
                <td className="text-center">{data.unique}</td>
                <td className="text-center">{data.bounce}</td>
                <td className="text-center">{data.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
