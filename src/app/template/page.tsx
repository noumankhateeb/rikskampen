"use client";

import { useEffect, useRef, useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import {
  PiFunnelSimpleDuotone,
  PiPencilSimpleDuotone,
  PiEyeDuotone,
  PiDotsThreeVerticalDuotone,
  PiCaretDownBold,
} from "react-icons/pi";

interface Customer {
  id: number;
  name: string;
  email: string;
  location: string;
  status: "Active" | "Blocked";
  spent: string;
  avatar: string;
}

const customers: Customer[] = [
  { id: 1, name: "Angelina Gotelli", email: "carolyn_h@hotmail.com", location: "New York, US", status: "Active", spent: "$4367.15", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 2, name: "Jeremiah Minsk", email: "terrance_moreno@infotech.io", location: "Tokyo, JP", status: "Active", spent: "$7823.42", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 3, name: "Max Alexander", email: "ronnie_vergas@infotech.io", location: "Mumbai, IN", status: "Blocked", spent: "$2478.33", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 4, name: "Shannon Baker", email: "cookie_lukie@hotmail.com", location: "New York, US", status: "Active", spent: "$234.56", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 5, name: "Eugene Stewart", email: "joyce991@infotech.io", location: "Ottawa, CA", status: "Active", spent: "$1201.45", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 6, name: "Arlene Pierce", email: "samanthaphil@infotech.io", location: "London, UK", status: "Active", spent: "$8923.11", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 7, name: "Roberta Horton", email: "taratarara@imaze.edu.du", location: "Brasília, BR", status: "Active", spent: "$465.78", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 8, name: "Jessica Wells", email: "iamfred@imaze.infotech.io", location: "London, UK", status: "Blocked", spent: "$890.43", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 9, name: "Camila Simmons", email: "carolyn_h@gmail.com", location: "Ankara, TR", status: "Blocked", spent: "$3456.22", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 10, name: "Earl Miles", email: "brittany1134@gmail.com", location: "Texas, US", status: "Active", spent: "$7890.12", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 11, name: "Sophia Bennett", email: "sophia_ben@gmail.com", location: "Sydney, AU", status: "Active", spent: "$5234.77", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 12, name: "Liam Carter", email: "liam_carter@techzone.io", location: "Berlin, DE", status: "Blocked", spent: "$2741.50", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 13, name: "Isabella Nguyen", email: "bella_n@webservices.com", location: "Paris, FR", status: "Active", spent: "$6823.91", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 14, name: "Noah Wright", email: "noah.wright@outlook.com", location: "Chicago, US", status: "Active", spent: "$1324.89", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 15, name: "Ava Thompson", email: "ava_thompson@mediahub.com", location: "Dubai, UAE", status: "Blocked", spent: "$3752.23", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 16, name: "Ethan Harris", email: "ethan_h@gmail.com", location: "Toronto, CA", status: "Active", spent: "$9456.32", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 17, name: "Mia Rodriguez", email: "mia_rodriguez@company.com", location: "Madrid, ES", status: "Active", spent: "$2879.10", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 18, name: "William Scott", email: "will.scott@enterprise.io", location: "Singapore, SG", status: "Blocked", spent: "$1923.88", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 19, name: "Emily Lewis", email: "emily.lewis@freemail.com", location: "San Francisco, US", status: "Active", spent: "$6578.29", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 20, name: "James Walker", email: "james_walker@infotech.io", location: "Hong Kong, HK", status: "Active", spent: "$8294.75", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" }
];


export default function Packages() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const totalPages = Math.ceil(customers.length / rowsPerPage);

  const paginatedCustomers = customers
    .filter((customer) => customer.name.toLowerCase().includes(search.toLowerCase()))
    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);


  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="bg-white rounded-lg shadow-md relative h-auto flex flex-auto flex-col p-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <h2 className="font-bold text-2xl">Packages</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <FaPlus size={20} />
            Add new
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:outline-none hover:ring-2 hover:ring-red-500">
            <MdOutlineDelete size={20} />
            Bulk Delete
          </button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <input
          type="text"
          placeholder="Quick search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:outline-none hover:ring-2 hover:ring-blue-500">
          <BiFilterAlt size={18} />
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="mt-4">
        <table className="w-full text-sm text-gray-600">
          {/* Table Header */}
          <thead className="text-gray-500 border-b border-gray-300">
            <tr>
              <th className="py-3 px-4 text-center">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Spent</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {paginatedCustomers.map((customer) => (
              <tr key={customer.id} className="border-b last:border-none hover:bg-gray-50 transition">
                <td className="py-3 px-4 text-center">
                  <input type="checkbox" />
                </td>
                <td className="py-3 px-4 flex items-left gap-2">
                  <img src={customer.avatar} alt={customer.name} className="w-8 h-8 rounded-full" />
                  {customer.name}
                </td>
                <td className="py-3 px-4 text-left">{customer.email}</td>
                <td className="py-3 px-4 text-left">{customer.location}</td>
                <td className="py-3 px-4 text-left">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${customer.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {customer.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-left">{customer.spent}</td>
                <td className="py-3 px-4 flex justify-center gap-3">
                  <button><PiPencilSimpleDuotone size={18} /></button>
                  <button><PiEyeDuotone size={18} /></button>
                  <button><CiMenuKebab size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      {/* Pagination & Row Count */}
      <div className="flex justify-between items-center mt-4">
        {/* Pagination - Left Side */}
        <div className="flex items-center space-x-2">
          <button
            className="p-2 text-gray-500 hover:text-black disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ‹
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-md ${currentPage === index + 1
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-black"
                }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="p-2 text-gray-500 hover:text-black disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            ›
          </button>
        </div>

        {/* Row Count - Right Side */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between p-2 border rounded-md text-gray-700 hover:outline-none hover:ring-2 hover:ring-blue-500 w-32"
          >
            {rowsPerPage} / page
            <PiCaretDownBold
              size={16}
              className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
          {isDropdownOpen && (
            <div ref={dropdownRef} className="absolute right-0 mb-2 bottom-full w-32 bg-white shadow-lg rounded-md border p-2">
              {[5, 10, 25, 50, 100].map((count) => (
                <button
                  key={count}
                  onClick={() => {
                    setRowsPerPage(count);
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full px-2 py-1 text-left text-gray-700 hover:bg-gray-100 hover:text-black"
                >
                  {count} / page
                </button>
              ))}
            </div>
          )}
        </div>


      </div>


    </div>
  );
}
