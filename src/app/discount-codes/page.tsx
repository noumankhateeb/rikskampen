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

interface Discount {
  code: string;
  contestId: number;
  discountType: string;
  totalDiscount: number;
  contestantDiscount: number;
  kickback: number;
  seoUrl: string;
  business: string;
  invoiceByCompany: number;
  type: string;
  status: string;
  source2Id: number | string;
  sourceType2Id: number | string;
  createdAt: string;
}

const Discounts: Discount[] = [
  { code: "@Mirka", contestId: 210, discountType: "Percentage (%)", totalDiscount: 20.00, contestantDiscount: 20.00, kickback: 0.00, seoUrl: "https://www.rikskampen.se/@Mirka#riksoffers", business: "Mirka Influencer", invoiceByCompany: 0.00, type: "Influencer", status: "Active", source2Id: "-", sourceType2Id: "-", createdAt: "2020-10-01 10:50:01" },
  { code: "0537", contestId: 28, discountType: "Percentage (%)", totalDiscount: 1.00, contestantDiscount: 1.00, kickback: 0.00, seoUrl: "https://www.rikskampen.se/0537#riksoffers", business: "Test 1", invoiceByCompany: 0.00, type: "Influencer", status: "Active", source2Id: "-", sourceType2Id: "-", createdAt: "2020-09-27 14:29:42" },
  { code: "@bpf05-3", contestId: 32, discountType: "Percentage (%)", totalDiscount: 20.00, contestantDiscount: 20.00, kickback: 5.00, seoUrl: "https://www.rikskampen.se/@bpdam#riksoffers", business: "Sales", invoiceByCompany: 10.00, type: "Sales", status: "Active", source2Id: 1176, sourceType2Id: 15, createdAt: "2020-09-01 00:00:00" },
  { code: "@bpf06-3", contestId: 35, discountType: "Percentage (%)", totalDiscount: 20.00, contestantDiscount: 20.00, kickback: 5.00, seoUrl: "https://www.rikskampen.se/@bpdam#riksoffers", business: "Sales", invoiceByCompany: 10.00, type: "Sales", status: "Active", source2Id: 1176, sourceType2Id: 15, createdAt: "2020-09-01 00:00:00" },
  { code: "@bpf07-2", contestId: 38, discountType: "Percentage (%)", totalDiscount: 20.00, contestantDiscount: 20.00, kickback: 5.00, seoUrl: "https://www.rikskampen.se/@bpdam#riksoffers", business: "Sales", invoiceByCompany: 10.00, type: "Sales", status: "Active", source2Id: 1176, sourceType2Id: 15, createdAt: "2020-09-01 00:00:00" },
  { code: "@bpf05-2", contestId: 31, discountType: "Percentage (%)", totalDiscount: 20.00, contestantDiscount: 20.00, kickback: 5.00, seoUrl: "https://www.rikskampen.se/@bpdam#riksoffers", business: "Sales", invoiceByCompany: 10.00, type: "Sales", status: "Active", source2Id: 1176, sourceType2Id: 15, createdAt: "2020-09-01 00:00:00" },
  { code: "@bpf05-1", contestId: 30, discountType: "Percentage (%)", totalDiscount: 20.00, contestantDiscount: 20.00, kickback: 5.00, seoUrl: "https://www.rikskampen.se/@bpdam#riksoffers", business: "Sales", invoiceByCompany: 10.00, type: "Sales", status: "Active", source2Id: 1176, sourceType2Id: 15, createdAt: "2020-09-01 00:00:00" },
  { code: "@bpf06-1", contestId: 33, discountType: "Percentage (%)", totalDiscount: 20.00, contestantDiscount: 20.00, kickback: 5.00, seoUrl: "https://www.rikskampen.se/@bpdam#riksoffers", business: "Sales", invoiceByCompany: 10.00, type: "Sales", status: "Active", source2Id: 1176, sourceType2Id: 15, createdAt: "2020-09-01 00:00:00" },
  { code: "@bpf08-1", contestId: 40, discountType: "Percentage (%)", totalDiscount: 15.00, contestantDiscount: 15.00, kickback: 3.00, seoUrl: "https://www.rikskampen.se/@bpdam#riksoffers", business: "Sales", invoiceByCompany: 5.00, type: "Sales", status: "Active", source2Id: 1177, sourceType2Id: 16, createdAt: "2020-09-02 00:00:00" },
  { code: "@bpf09-1", contestId: 42, discountType: "Percentage (%)", totalDiscount: 25.00, contestantDiscount: 25.00, kickback: 7.00, seoUrl: "https://www.rikskampen.se/@bpdam#riksoffers", business: "Sales", invoiceByCompany: 12.00, type: "Sales", status: "Active", source2Id: 1178, sourceType2Id: 17, createdAt: "2020-09-03 00:00:00" }
];

export default function Packages() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const columns = [
    { key: "code", label: "Code" },
    { key: "contestId", label: "Contest ID" },
    { key: "discountType", label: "Discount Type" },
    { key: "totalDiscount", label: "Total Discount" },
    { key: "contestantDiscount", label: "Contestant Discount" },
    { key: "kickback", label: "Kickback" },
    { key: "seoUrl", label: "SEO URL" },
    { key: "business", label: "Business" },
    { key: "invoiceByCompany", label: "Invoice By Company" },
    { key: "type", label: "Type" },
    { key: "status", label: "Status" },
    { key: "source2Id", label: "Source2 ID" },
    { key: "sourceType2Id", label: "Source Type2 ID" },
    // { key: "createdAt", label: "Created At" },
    { key: "Action", label: "Actions", center: true },
  ];


  return (
    <div className="bg-white rounded-lg shadow-md relative h-auto flex flex-auto flex-col p-5">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <h2 className="font-bold text-2xl">Discount Codes</h2>
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
        rows={Discounts}
        showCheckbox={true}
        rowTemplate={(row) => (
          <>
            <td className="py-3 px-4 text-left">{row.code}</td>
            <td className="py-3 px-4 text-left">{row.contestId}</td>
            <td className="py-3 px-4 text-left">{row.discountType}</td>
            <td className="py-3 px-4 text-left">{row.totalDiscount}</td>
            <td className="py-3 px-4 text-left">{row.contestantDiscount}</td>
            <td className="py-3 px-4 text-left">{row.kickback}</td>
            <td className="py-3 px-4 text-left max-w-40 truncate">{row.seoUrl}</td>
            <td className="py-3 px-4 text-left">{row.business}</td>
            <td className="py-3 px-4 text-left">{row.invoiceByCompany}</td>
            <td className="py-3 px-4 text-left">{row.type}</td>
            <td className="py-3 px-4 text-left">{row.status}</td>
            <td className="py-3 px-4 text-left">{row.source2Id}</td>
            <td className="py-3 px-4 text-left">{row.sourceType2Id}</td>
            {/* <td className="py-3 px-4 text-left">{row.createdAt}</td> */}
            <td className="whitespace-nowrap">
              <button className="hover:text-black m-2"><PiPencilSimpleDuotone size={20} /></button>
              <button className="hover:text-black m-2" onClick={() => router.push(`/discounts/view-discount?code=${row.code}`)}><PiEyeDuotone size={20} /></button>
              <button className="hover:text-black m-2"><AiTwotoneDelete size={20} /></button>
            </td>
          </>
        )}
      />

    </div>
  );
}