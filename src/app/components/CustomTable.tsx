"use client";

import { useState, useEffect, useRef, JSX } from "react";
import { PiCaretDownBold, PiEyeDuotone, PiPencilSimpleDuotone } from "react-icons/pi";

interface Column {
    key: string;
    label: string;
    center?: boolean;
}

interface CustomTableProps {
    columns: Column[];
    rows: any[];
    rowsPerPageOptions?: number[];
    showCheckbox?: boolean;
    rowTemplate: (row: any) => JSX.Element;
}

export default function CustomTable({
    columns,
    rows,
    rowsPerPageOptions = [5, 10, 25, 50],
    showCheckbox = false,
    rowTemplate,
}: CustomTableProps) {

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[1]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const totalPages = Math.ceil(rows.length / rowsPerPage);

    const filteredRows = rows.filter((row) =>
        Object.values(row).some((value) =>
            String(value).toLowerCase().includes(search.toLowerCase())
        )
    );

    const paginatedRows = filteredRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="mt-4">

            {/* Table */}
            <div className="custom-scroll overflow-x-auto">
                <table className="w-full text-sm text-gray-600">
                    <thead className="text-gray-500 border-b border-gray-300">
                        <tr>
                            {showCheckbox && (
                                <th className="py-3 px-4 text-center">
                                    <input type="checkbox" />
                                </th>
                            )}
                            {columns.map((col) => (
                                <th key={col.key} className={`py-3 px-4 ${col.center ? "text-center" : "text-left"}`}>
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedRows.map((row, index) => (
                            <tr key={index} className="border-b last:border-none hover:bg-gray-50 transition h-14">
                                {showCheckbox && (
                                    <td className="py-3 px-4 text-center">
                                        <input type="checkbox" />
                                    </td>
                                )}
                                {rowTemplate(row)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination & Row Count */}
            <div className="flex justify-between items-center mt-4">

                {/* Pagination */}
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
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-black"}`}
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

                {/* Row Count */}
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center justify-between p-2 border rounded-md text-gray-700 hover:outline-none hover:ring-2 hover:ring-blue-500 w-32"
                    >
                        {rowsPerPage} / page
                        <PiCaretDownBold size={16} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isDropdownOpen && (
                        <div ref={dropdownRef} className="absolute right-0 mb-2 bottom-full w-32 bg-white shadow-lg rounded-md border p-2">
                            {rowsPerPageOptions.map((count) => (
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
