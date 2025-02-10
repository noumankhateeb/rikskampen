"use client";

import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";

interface DataItem {
    id: string;
    label: string;
}

interface Day {
    id: string;
    name: string;
    items: DataItem[];
}

export default function PlanAssign() {
    const [dataItems, setDataItems] = useState<DataItem[]>([
        { id: "1", label: "Data 1" },
        { id: "2", label: "Data 2" },
        { id: "3", label: "Data 3" },
        { id: "4", label: "Data 4" },
        { id: "5", label: "Data 5" },
        { id: "6", label: "Data 6" },
        { id: "7", label: "Data 7" },
        { id: "8", label: "Data 8" },
        { id: "9", label: "Data 9" },
        { id: "10", label: "Data 10" },
    ]);

    const [days, setDays] = useState<Day[]>([
        { id: "mon", name: "Monday", items: [] },
        { id: "tue", name: "Tuesday", items: [] },
        { id: "wed", name: "Wednesday", items: [] },
        { id: "thu", name: "Thursday", items: [] },
        { id: "fri", name: "Friday", items: [] },
        { id: "sat", name: "Saturday", items: [] },
        { id: "sun", name: "Sunday", items: [] },
    ]);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: DataItem) => {
        e.dataTransfer.setData("item", JSON.stringify(item));
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, dayId: string) => {
        const item: DataItem = JSON.parse(e.dataTransfer.getData("item"));
        setDataItems((prev) => prev.filter((data) => data.id !== item.id));
        setDays((prev) =>
            prev.map((day) => {
                if (day.id === dayId) {
                    return { ...day, items: [...day.items, item] };
                }
                return day;
            })
        );
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleRemove = (dayId: string, itemId: string) => {
        const itemToReturn = days.find((day) => day.id === dayId)?.items.find((item) => item.id === itemId);
        if (itemToReturn) {
            setDataItems((prev) => [...prev, itemToReturn]);
        }
        setDays((prev) =>
            prev.map((day) =>
                day.id === dayId ? { ...day, items: day.items.filter((item) => item.id !== itemId) } : day
            )
        );
    };

    return (
        <div className="flex gap-6">
            {/* Plan/Assign Section */}
            <div className="bg-white shadow-md rounded-lg p-6 flex-grow ">
                <h2 className="font-bold text-2xl mb-4">Plan Assign</h2>
                <div className=" grid grid-cols-3 gap-4 bg-gray-100 p-4 rounded-md">
                    {days.map((day) => (
                        <div
                            key={day.id}
                            className="bg-white rounded-md p-4 border border-gray-200 min-h-40"
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, day.id)}
                        >
                            <h3 className="font-bold mb-2">{day.name}</h3>
                            <div className="space-y-2">
                                {day.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-blue-100 px-3 py-1 rounded-md flex justify-between items-center"
                                    >
                                        <span>{item.label}</span>
                                        <button
                                            onClick={() => handleRemove(day.id, item.id)}
                                            className="hover:text-black m-2 text-sm"
                                        >
                                            <AiTwotoneDelete size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Data Items Section */}
            <div className="bg-white shadow-md rounded-lg p-6 w-80">
                <h3 className="font-bold text-2xl mb-4">Data Items</h3>
                <div className="space-y-3 bg-gray-100 p-4 rounded-md">
                    {dataItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white text-gray-700 px-3 py-1 rounded-md cursor-pointer"
                            draggable
                            onDragStart={(e) => handleDragStart(e, item)}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
