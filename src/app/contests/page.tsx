"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import {
  PiPencilSimpleDuotone,
  PiEyeDuotone,
} from "react-icons/pi";
import CustomTable from "../components/CustomTable";

interface Contest {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  contestDuration: string;
  createdBy: string;
  createdAt: string;
}

const contests: Contest[] = [
  { id: 1, name: "November", startDate: "2023-05-09 00:00:00", endDate: "2023-12-31 00:00:00", location: "Sweden", contestDuration: "3 month", createdBy: "No results", createdAt: "2023-05-09 06:16:40" },
  { id: 2, name: "@BT", startDate: "2020-11-01 00:00:00", endDate: "2025-12-31 00:00:00", location: "Sweden", contestDuration: "3 month", createdBy: "No results", createdAt: "2020-11-10 10:29:11" },
  { id: 3, name: "@Michael", startDate: "2020-10-01 00:00:00", endDate: "2025-12-31 00:00:00", location: "Sweden", contestDuration: "3 month", createdBy: "No results", createdAt: "2020-10-02 16:35:29" },
  { id: 4, name: "@BP", startDate: "2020-09-01 00:00:00", endDate: "2025-12-31 00:00:00", location: "Sweden", contestDuration: "3 month", createdBy: "No results", createdAt: "2020-10-01 13:29:40" },
  { id: 5, name: "Mirka", startDate: "2020-10-01 00:00:00", endDate: "2025-12-31 00:00:00", location: "Sweden", contestDuration: "3 month", createdBy: "No results", createdAt: "2020-10-01 10:47:54" },
  { id: 6, name: "@Alpha", startDate: "2021-06-15 00:00:00", endDate: "2024-06-15 00:00:00", location: "Germany", contestDuration: "6 month", createdBy: "No results", createdAt: "2021-06-15 09:12:30" },
  { id: 7, name: "Beta", startDate: "2019-12-01 00:00:00", endDate: "2024-12-01 00:00:00", location: "Norway", contestDuration: "1 year", createdBy: "No results", createdAt: "2019-12-01 14:45:20" },
  { id: 8, name: "Charlie", startDate: "2022-04-20 00:00:00", endDate: "2025-04-20 00:00:00", location: "Finland", contestDuration: "2 years", createdBy: "No results", createdAt: "2022-04-20 07:55:10" },
  { id: 9, name: "Delta", startDate: "2023-01-10 00:00:00", endDate: "2026-01-10 00:00:00", location: "Sweden", contestDuration: "3 years", createdBy: "No results", createdAt: "2023-01-10 12:30:50" },
  { id: 10, name: "Echo", startDate: "2018-07-25 00:00:00", endDate: "2023-07-25 00:00:00", location: "Denmark", contestDuration: "5 years", createdBy: "No results", createdAt: "2018-07-25 18:10:05" },
  { id: 11, name: "Foxtrot", startDate: "2020-09-05 00:00:00", endDate: "2023-09-05 00:00:00", location: "Germany", contestDuration: "1.5 years", createdBy: "No results", createdAt: "2020-09-05 16:20:35" },
];

export default function Packages() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const columns = [
    { key: "name", label: "Name" },
    { key: "start_date", label: "StartDate" },
    { key: "end_date", label: "End Date" },
    { key: "location", label: "Location" },
    { key: "contest_duration", label: "Duration" },
    { key: "created_by", label: "Created By" },
    { key: "created_at", label: "Created At" },
    { key: "Action", label: "Actions", center: true },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md relative h-auto flex flex-auto flex-col p-5">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <h2 className="font-bold text-2xl">Contests</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => router.push("/contests/add-contest")}>
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
        rows={contests}
        showCheckbox={true}
        rowTemplate={(row) => (
          <>
            <td className="py-3 px-4 text-left">{row.name}</td>
            <td className="py-3 px-4 text-left">{row.startDate}</td>
            <td className="py-3 px-4 text-left">{row.endDate}</td>
            <td className="py-3 px-4 text-left">{row.location}</td>
            <td className="py-3 px-4 text-left">{row.contestDuration}</td>
            <td className="py-3 px-4 text-left">{row.createdBy}</td>
            <td className="py-3 px-4 text-left">{row.createdAt}</td>
            <td className="whitespace-nowrap">
              <button className="hover:text-black m-2"><PiPencilSimpleDuotone size={20} /></button>
              <button className="hover:text-black m-2"
              onClick={()=> router.push(`/contests/view-contest?id=${row.id}`)}
              ><PiEyeDuotone size={20} /></button>
              <button className="hover:text-black m-2"><AiTwotoneDelete size={20} /></button>
            </td>
          </>
        )}
      />

    </div>
  );
}