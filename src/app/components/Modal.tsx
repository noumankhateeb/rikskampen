"use client";

import { FiX } from "react-icons/fi";
import { useState } from "react";

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FilterModal({ isOpen, onClose }: FilterModalProps) {
    const [filters, setFilters] = useState({
        name: true,
        startDate: true,
        endDate: true,
        location: true,
        duration: true,
        // createdBy: true,
        // createdAt: true,
    });

    const handleCheckboxChange = (key: keyof typeof filters) => {
        setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-lg relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full">
                    <FiX className="w-5 h-5 text-gray-600" />
                </button>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter</h2>


                {/* Search Input */}
                <div className="mb-4">
                    <label className="text-sm text-gray-500">Contest</label>
                    <input
                        type="text"
                        placeholder="Search by contest Filter"
                        className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                {/* Checkboxes */}
                <div className="mb-4">
                    <h3 className="text-sm text-gray-500">Contest Filter</h3>
                    <div className="space-y-2 mt-2">
                        {Object.keys(filters).map((key) => (
                            <label key={key} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-blue-600"
                                    checked={filters[key as keyof typeof filters]}
                                    onChange={() => handleCheckboxChange(key as keyof typeof filters)}
                                />
                                <span className="text-gray-900 text-sm capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-2 mt-4">
                    <button
                        onClick={() =>
                            setFilters({
                                name: false,
                                startDate: false,
                                endDate: false,
                                location: false,
                                duration: false,
                                // createdBy: false,
                                // createdAt: false,
                            })
                        }
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md"
                    >
                        Reset
                    </button>
                    <button
                        onClick={() => console.log("Applied Filters:", filters)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
