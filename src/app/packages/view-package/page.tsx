"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

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

export default function ViewPackage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const packageId = searchParams.get("id");

  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  useEffect(() => {
    if (packageId) {
      const foundPackage = packages.find(
        (pkg) => pkg.id === Number(packageId)
      );
      if (foundPackage) {
        setSelectedPackage(foundPackage);
      }
    }
  }, [packageId]);

  if (!selectedPackage) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Package not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-auto">
      <button
        className="flex items-center gap-2 text-gray-700 hover:text-black mb-4"
        onClick={() => router.push("/packages")}
      >
        <FaArrowLeft size={18} />
        Back to Packages
      </button>

      <h2 className="text-2xl font-bold text-center mb-4">
        {selectedPackage.packageName}
      </h2>

      <img
        src={selectedPackage.image}
        alt={selectedPackage.packageName}
        className="w-full h-auto rounded mb-4"
      />

      <div className="space-y-3">
        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Prize Pool:</p>
          <p className="text-gray-800">
            {selectedPackage.prizePool} {selectedPackage.currency}
          </p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Admin Fee:</p>
          <p className="text-gray-800">{selectedPackage.adminFee}</p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Price:</p>
          <p className="text-gray-800">{selectedPackage.price}</p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Age Group:</p>
          <p className="text-gray-800">{selectedPackage.age}</p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Group Type:</p>
          <p className="text-gray-800">{selectedPackage.groupType}</p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Installments Plan:</p>
          <p className="text-gray-800">
            {selectedPackage.installmentsPlan}
          </p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Package Type:</p>
          <p className="text-gray-800">{selectedPackage.packageType}</p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Contest:</p>
          <p className="text-gray-800">{selectedPackage.contest}</p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Status:</p>
          <p className="text-gray-800">{selectedPackage.status}</p>
        </div>

        <div className="border-b pb-2 flex justify-between">
          <p className="text-gray-600 font-medium">Created By:</p>
          <p className="text-gray-800">{selectedPackage.createdBy}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600 font-medium">Created At:</p>
          <p className="text-gray-800">{selectedPackage.createdAt}</p>
        </div>
      </div>
    </div>
  );
}
