"use client";

import { useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import {
  PiPencilSimpleDuotone,
  PiEyeDuotone,
} from "react-icons/pi";
import CustomTable from "../components/CustomTable";
import { CiMenuKebab } from "react-icons/ci";

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
];

const columns = [
  { key: "name", label: "Customer Name" },
  { key: "email", label: "Email" },
  { key: "location", label: "Location" },
  { key: "status", label: "Status" },
  { key: "spent", label: "Total Spent", center: true },
  { key: "Action", label: "Actions", center: true },

];


export default function CustomerList() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white rounded-lg shadow-md relative h-auto flex flex-auto flex-col p-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <h2 className="font-bold text-2xl">Customers</h2>
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


      <CustomTable
        columns={columns}
        rows={customers}
        showCheckbox={true}
        rowTemplate={(row) => (
          <>
            <td className="py-3 px-4 flex items-center gap-2">
              <img src={row.avatar} alt={row.name} className="w-8 h-8 rounded-full" />
              {row.name}
            </td>
            <td className="py-3 px-4">{row.email}</td>
            <td className="py-3 px-4 text-left">{row.location}</td>
            <td className="py-3 px-4 text-left">
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${row.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                {row.status}
              </span>
            </td>
            <td className="py-3 px-4 text-center">{row.spent}</td>
            <td className="py-3 px-4 flex justify-center gap-3">
              <button><PiPencilSimpleDuotone size={20} /></button>
              <button><PiEyeDuotone size={20} /></button>
              <button><CiMenuKebab size={20} /></button>
            </td>
          </>
        )}
      />

    </div>
  );
}
