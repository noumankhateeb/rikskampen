"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

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

export default function ViewContest() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contestId = searchParams.get("id");

  const [contest, setContest] = useState<Contest | null>(null);

  useEffect(() => {
    if (contestId) {
      const foundContest = contests.find((c) => c.id === Number(contestId));
      if (foundContest) {
        setContest(foundContest);
      }
    }
  }, [contestId]);

  if (!contest) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Contest not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-auto">
      <button
        className="flex items-center gap-2 text-gray-700 hover:text-black mb-4"
        onClick={() => router.push("/contests")}
      >
        <FaArrowLeft size={18} />
        Back to Contests
      </button>

      <h2 className="text-2xl font-bold text-center mb-4">{contest.name}</h2>

      <div className="space-y-3">
        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Start Date:</p>
          <p className="text-gray-800">{contest.startDate}</p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">End Date:</p>
          <p className="text-gray-800">{contest.endDate}</p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Location:</p>
          <p className="text-gray-800">{contest.location}</p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Duration:</p>
          <p className="text-gray-800">{contest.contestDuration}</p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Created By:</p>
          <p className="text-gray-800">{contest.createdBy}</p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Created At:</p>
          <p className="text-gray-800">{contest.createdAt}</p>
        </div>
      </div>
    </div>
  );
}
