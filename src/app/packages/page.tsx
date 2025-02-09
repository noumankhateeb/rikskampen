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

interface Package {
  id: number;
  packageName: string;
  prizePool: string;
  currency: string;
  adminFee: string;
  price: string;
  image: string;
  age: string;
  groupType: string;
  installmentsPlan: string;
  packageType: string;
  contest: string;
  createdBy: string;
  status: string;
  createdAt: string;
}

const packages: Package[] = [
  { id: 1, packageName: "SENIOR DUO", prizePool: "50,000", currency: "KR", adminFee: "500", price: "7995", image: "https://i.pinimg.com/736x/de/70/e4/de70e47188c2922080f7b707cf732035.jpg", age: "65+", groupType: "duo", installmentsPlan: "195 / 12 MÅN / PERS", packageType: "senior", contest: "Rikskampen", createdBy: "Super Admin", status: "Show", createdAt: "2019-02-24 16:08:37" },
  { id: 2, packageName: "VUXEN DUO", prizePool: "50,000", currency: "KR", adminFee: "500", price: "8995", image: "https://i.pinimg.com/736x/de/70/e4/de70e47188c2922080f7b707cf732035.jpg", age: "18-65", groupType: "duo", installmentsPlan: "195 / 12 MÅN / PERS", packageType: "vuxen", contest: "Rikskampen", createdBy: "Super Admin", status: "Show", createdAt: "2019-02-24 16:07:28" },
  { id: 3, packageName: "JUNIOR DUO", prizePool: "25,000", currency: "KR", adminFee: "500", price: "3495", image: "https://i.pinimg.com/736x/de/70/e4/de70e47188c2922080f7b707cf732035.jpg", age: "13-18", groupType: "duo", installmentsPlan: "155 / 12 MÅN / PERS", packageType: "junior", contest: "Rikskampen", createdBy: "Super Admin", status: "Show", createdAt: "2019-02-24 15:58:43" },
  { id: 4, packageName: "LARGE", prizePool: "50,000", currency: "KR", adminFee: "500", price: "199", image: "https://i.pinimg.com/736x/de/70/e4/de70e47188c2922080f7b707cf732035.jpg", age: "65+", groupType: "single", installmentsPlan: "-", packageType: "senior", contest: "Rikskampen", createdBy: "Super Admin", status: "Show", createdAt: "2019-02-24 15:41:18" },
  { id: 5, packageName: "MEDIUM", prizePool: "50,000", currency: "KR", adminFee: "500", price: "69", image: "https://i.pinimg.com/736x/de/70/e4/de70e47188c2922080f7b707cf732035.jpg", age: "18-65", groupType: "single", installmentsPlan: "-", packageType: "vuxen", contest: "Rikskampen", createdBy: "Super Admin", status: "Show", createdAt: "2019-02-24 15:27:42" },
  { id: 6, packageName: "LITE", prizePool: "25,000", currency: "KR", adminFee: "500", price: "49", image: "https://i.pinimg.com/736x/de/70/e4/de70e47188c2922080f7b707cf732035.jpg", age: "13-18", groupType: "single", installmentsPlan: "-", packageType: "junior", contest: "Rikskampen", createdBy: "Super Admin", status: "Show", createdAt: "2019-02-24 15:21:26" },
  { id: 7, packageName: "BASIC", prizePool: "30,000", currency: "KR", adminFee: "400", price: "3999", image: "https://i.pinimg.com/736x/de/70/e4/de70e47188c2922080f7b707cf732035.jpg", age: "18-30", groupType: "single", installmentsPlan: "-", packageType: "junior", contest: "Rikskampen", createdBy: "Super Admin", status: "Show", createdAt: "2019-02-24 14:50:00" },
  { id: 8, packageName: "ADVANCED", prizePool: "75,000", currency: "KR", adminFee: "600", price: "9999", image: "https://i.pinimg.com/736x/de/70/e4/de70e47188c2922080f7b707cf732035.jpg", age: "30-50", groupType: "duo", installmentsPlan: "200 / 12 MÅN / PERS", packageType: "senior", contest: "Rikskampen", createdBy: "Super Admin", status: "Show", createdAt: "2019-02-24 14:30:15" },
  { id: 9, packageName: "PREMIUM", prizePool: "100,000", currency: "KR", adminFee: "700", price: "14999", image: "https://i.pinimg.com/736x/de/70/e4/de70e47188c2922080f7b707cf732035.jpg", age: "50+", groupType: "single", installmentsPlan: "250 / 12 MÅN / PERS", packageType: "vuxen", contest: "Rikskampen", createdBy: "Super Admin", status: "Show", createdAt: "2019-02-24 14:10:45" },
  { id: 10, packageName: "ULTRA", prizePool: "200,000", currency: "KR", adminFee: "800", price: "19999", image: "https://i.pinimg.com/736x/de/70/e4/de70e47188c2922080f7b707cf732035.jpg", age: "All", groupType: "duo", installmentsPlan: "300 / 12 MÅN / PERS", packageType: "senior", contest: "Rikskampen", createdBy: "Super Admin", status: "Show", createdAt: "2019-02-24 13:50:30" },
];

export default function Packages() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const columns = [
    { key: "packageName", label: "Package Name" },
    { key: "prizePool", label: "Prize Pool" },
    { key: "currency", label: "Currency" },
    { key: "adminFee", label: "Admin Fee" },
    { key: "price", label: "Price" },
    { key: "image", label: "Image" },
    { key: "age", label: "Age" },
    { key: "groupType", label: "Group Type" },
    { key: "installmentsPlan", label: "Installments Plan" },
    { key: "packageType", label: "Package Type" },
    { key: "contest", label: "Contest" },
    { key: "createdBy", label: "Created By" },
    { key: "status", label: "Status" },
    // { key: "createdAt", label: "Created At" },
    { key: "Action", label: "Actions", center: true },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md relative h-auto flex flex-auto flex-col p-5">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <h2 className="font-bold text-2xl">Packages</h2>
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
        rows={packages}
        showCheckbox={true}
        rowTemplate={(row) => (
          <>
            <td className="py-3 px-2">{row.packageName}</td>
            <td className="py-3 px-2">{row.prizePool}</td>
            <td className="py-3 px-2">{row.currency}</td>
            <td className="py-3 px-2">{row.adminFee}</td>
            <td className="py-3 px-2">{row.price}</td>
            <td className="py-3 px-2"><img src={row.image} alt="Package" className="w-10 h-10 rounded" /></td>
            <td className="py-3 px-2">{row.age}</td>
            <td className="py-3 px-2">{row.groupType}</td>
            <td className="py-3 px-2">{row.installmentsPlan}</td>
            <td className="py-3 px-2">{row.packageType}</td>
            <td className="py-3 px-2">{row.contest}</td>
            <td className="py-3 px-2">{row.createdBy}</td>
            <td className="py-3 px-2">{row.status}</td>
            {/* <td className="py-3 px-2">{row.createdAt}</td> */}
            <td className="whitespace-nowrap">
              <button className="m-2"><PiPencilSimpleDuotone size={20} /></button>
              <button className="m-2"
              // onClick={() => router.push(`/packages/view?id=${row.id}`)}
              >
                <PiEyeDuotone size={20} />
              </button>
              <button className="m-2"><AiTwotoneDelete size={20} /></button>
            </td>
          </>
        )}
      />
    </div>
  );
}
