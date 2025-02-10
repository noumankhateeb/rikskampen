'use client';

import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { usePathname } from "next/navigation";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="spinner-border animate-spin border-4 border-blue-600 border-t-transparent rounded-full w-16 h-16"></div>
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Pages where Sidebar and Navbar should not appear
  const excludeLayout = ["/signup", "/signin"];

  const shouldRenderLayout = !excludeLayout.includes(pathname);

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
        <html lang="en">
          <body>
            {shouldRenderLayout ? (
              <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="flex flex-col flex-1 overflow-hidden">
                  <Navbar />
                  <main className="custom-scroll flex-1 overflow-y-auto p-6 bg-gray-100">
                    {children}
                  </main>
                </div>
              </div>
            ) : (
              <main className="custom-scroll flex-1 overflow-y-auto bg-white">
                {children}
              </main>
            )}
          </body>
        </html>
      </PersistGate>
    </Provider>
  );
}
