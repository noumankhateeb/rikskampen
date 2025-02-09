"use client";

import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import {
  PiEyeDuotone,
} from "react-icons/pi";
import CustomTable from "../components/CustomTable";

interface Order {
  id: number;
  name: string;
  address: string;
  email: string;
  quantity: number | string;
  tax: number | string;
  total: string;
  paymentStatus: string;
  paymentMethod: string;
  referenceNumber: string;
  orderStatus: string;
  plan: string;
  orderNo: string;
  createdAt: string;
  orderRef: string;
  avatar: string;
}

const Orders: Order[] = [
  { id: 1, name: "No results", address: "test, 05,c/o 13 st, Stockholm, SE", email: "subhankhan71234@gmail.com", quantity: 1, tax: 0, total: "$99.00", paymentStatus: "Paid", paymentMethod: "KLARNA [Pay later]", referenceNumber: "J2KD4C05", orderStatus: "Successful", plan: "basic_high", orderNo: "da4c06c3-812a-6306-9991-eeecf698f108", createdAt: "2022-11-02 16:20:27", orderRef: "-", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 2, name: "No results", address: "-", email: "-", quantity: 1, tax: "-", total: "$99.00", paymentStatus: "Unpaid", paymentMethod: "Klarna", referenceNumber: "-", orderStatus: "checkout_incomplete", plan: "basic_high", orderNo: "128a1ea1-0f5c-6166-ad45-9bb6e95c56cf", createdAt: "2022-10-31 14:30:36", orderRef: "-", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-2.jpg" },
  { id: 3, name: "Test iOS", address: "-", email: "arne@orkanen.com", quantity: "-", tax: "-", total: "$149.00", paymentStatus: "Paid", paymentMethod: "Klarna Recurring", referenceNumber: "8ad6584a-9c8f-4672-982e-06b7db009715", orderStatus: "Paid", plan: "Rikskampen", orderNo: "e5c4f44e-3107-1b66-b955-f0e72a38ac63", createdAt: "2022-06-01 12:00:05", orderRef: "-", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-3.jpg" },
  { id: 4, name: "Test iOS", address: "-", email: "arne@orkanen.com", quantity: "-", tax: "-", total: "$149.00", paymentStatus: "Paid", paymentMethod: "Klarna Recurring", referenceNumber: "8ad6584a-9c8f-4672-982e-06b7db009715", orderStatus: "Paid", plan: "Rikskampen", orderNo: "93d55ff-74c-1a15-8e47-73dd5dfc62d", createdAt: "2022-05-02 12:00:05", orderRef: "-", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-4.jpg" },
  { id: 5, name: "Test iOS", address: "-", email: "arne@orkanen.com", quantity: "-", tax: "-", total: "$149.00", paymentStatus: "Paid", paymentMethod: "Klarna Recurring", referenceNumber: "8ad6584a-9c8f-4672-982e-06b7db009715", orderStatus: "Paid", plan: "Rikskampen", orderNo: "51a0fc00-55ad-253f-...", createdAt: "2022-04-02 12:00:05", orderRef: "-", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-5.jpg" },
  { id: 6, name: "No results", address: "test, 05,c/o 13 st, Stockholm, SE", email: "subhankhan71234@gmail.com", quantity: 1, tax: 0, total: "$99.00", paymentStatus: "Paid", paymentMethod: "KLARNA [Pay later]", referenceNumber: "J2KD4C05", orderStatus: "Successful", plan: "basic_high", orderNo: "da4c06c3-812a-6306-9991-eeecf698f108", createdAt: "2022-11-02 16:20:27", orderRef: "-", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" },
  { id: 7, name: "No results", address: "-", email: "-", quantity: 1, tax: "-", total: "$99.00", paymentStatus: "Unpaid", paymentMethod: "Klarna", referenceNumber: "-", orderStatus: "checkout_incomplete", plan: "basic_high", orderNo: "128a1ea1-0f5c-6166-ad45-9bb6e95c56cf", createdAt: "2022-10-31 14:30:36", orderRef: "-", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-2.jpg" },
  { id: 8, name: "Test iOS", address: "-", email: "arne@orkanen.com", quantity: "-", tax: "-", total: "$149.00", paymentStatus: "Paid", paymentMethod: "Klarna Recurring", referenceNumber: "8ad6584a-9c8f-4672-982e-06b7db009715", orderStatus: "Paid", plan: "Rikskampen", orderNo: "e5c4f44e-3107-1b66-b955-f0e72a38ac63", createdAt: "2022-06-01 12:00:05", orderRef: "-", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-3.jpg" },
  { id: 9, name: "Test iOS", address: "-", email: "arne@orkanen.com", quantity: "-", tax: "-", total: "$149.00", paymentStatus: "Paid", paymentMethod: "Klarna Recurring", referenceNumber: "8ad6584a-9c8f-4672-982e-06b7db009715", orderStatus: "Paid", plan: "Rikskampen", orderNo: "93d55ff-74c-1a15-8e47-73dd5dfc62d", createdAt: "2022-05-02 12:00:05", orderRef: "-", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-4.jpg" },
  { id: 10, name: "Test iOS", address: "-", email: "arne@orkanen.com", quantity: "-", tax: "-", total: "$149.00", paymentStatus: "Paid", paymentMethod: "Klarna Recurring", referenceNumber: "8ad6584a-9c8f-4672-982e-06b7db009715", orderStatus: "Paid", plan: "Rikskampen", orderNo: "51a0fc00-55ad-253f-...", createdAt: "2022-04-02 12:00:05", orderRef: "-", avatar: "https://ecme-react.themenate.net/img/avatars/thumb-5.jpg" }
];


const columns = [
  { key: "name", label: "Customer Name" },
  { key: "email", label: "Email" },
  { key: "address", label: "Address" },
  { key: "quantity", label: "Quantity", center: true },
  { key: "tax", label: "Tax", center: true },
  { key: "total", label: "Total", center: true },
  { key: "paymentStatus", label: "Payment Status" },
  { key: "paymentMethod", label: "Payment Method" },
  { key: "orderStatus", label: "Order Status" },
  { key: "plan", label: "Plan" },
  { key: "createdAt", label: "Created At" },
  { key: "Action", label: "Actions", center: true },
];


export default function CustomerList() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white rounded-lg shadow-md relative h-auto flex flex-auto flex-col p-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <h2 className="font-bold text-2xl">Order</h2>
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
        rows={Orders}
        showCheckbox={true}
        rowTemplate={(row) => (
          <>
            <td className="py-3 px-4 flex items-center gap-2">
              {row.name}
            </td>
            <td className="py-3 px-4">{row.email}</td>
            <td className="py-3 px-4 text-left">{row.address}</td>
            <td className="py-3 px-4 text-center">{row.quantity}</td>
            <td className="py-3 px-4 text-center">{row.tax}</td>
            <td className="py-3 px-4 text-center">{row.total}</td>
            <td className="py-3 px-4 text-left">{row.paymentStatus}</td>
            <td className="py-3 px-4 text-left">{row.paymentMethod}</td>
            <td className="py-3 px-4 text-left">{row.orderStatus}</td>
            <td className="py-3 px-4 text-left">{row.plan}</td>
            <td className="py-3 px-4 text-left">{row.createdAt}</td>

            <td className="py-3 px-4">
              <button><PiEyeDuotone size={20} /></button>
            </td>
          </>
        )}
      />

    </div>
  );
}
