"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiChevronDown, FiX } from "react-icons/fi";
import { sidebarItems } from "./SidebarData";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RootState } from "@/store/store";
import { setActiveMenu } from "@/store/Sidebar/Sidebar-Slice";
import { setHamburgerOpen } from "@/store/Navbar/Navbar-Slice"; // Make sure this action exists

export default function Sidebar() {
    const dispatch = useDispatch();
    const { activeMenu } = useSelector((state: RootState) => state.sidebar);
    const { isHamburgerOpen } = useSelector((state: RootState) => state.navbar);
    const pathname = usePathname();

    // State to track if we're on a mobile viewport (width less than 768px)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        // Set initial value
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // In mobile mode, if the sidebar is not open, render nothing.
    if (isMobile && !isHamburgerOpen) {
        return null;
    }

    return (
        <div
            className={`h-screen bg-white border-r border-gray-200 transition-all duration-300 flex flex-col ${isMobile ? "fixed inset-y-0 left-0 w-72 z-50" : isHamburgerOpen ? "w-72" : "w-20"}`}
        >
            {/* Header / Logo area */}
            <div
                className={`flex items-center h-16 p-4 ${isMobile || isHamburgerOpen ? "justify-between" : "justify-center"}`}
            >
                {(isMobile || isHamburgerOpen) ? (
                    <>
                        <img
                            src="https://rikskampen.se/public/images/payment/rikskampen.png"
                            alt="Logo"
                            className="w-auto h-6"
                        />
                        {/* In mobile mode, show the cross icon to close the sidebar */}
                        {isMobile && (
                            <button onClick={() => dispatch(setHamburgerOpen(false))}>
                                <FiX className="text-2xl" />
                            </button>
                        )}
                    </>
                ) : (
                    <div className="flex items-center gap-2">
                        <img
                            src="https://rikskampen.se//storage/settings/January2019/Aj1dnotWtflQJ3ovXYwp.png"
                            alt="Logo"
                            className="w-auto h-6"
                        />
                    </div>
                )}
            </div>

            {/* Navigation area */}
            <nav className="custom-scroll flex flex-col flex-1 overflow-y-auto p-4 font-semibold text-gray-600">
                {sidebarItems.map((item, index) => {
                    const isActiveParent = activeMenu === item.title;
                    const hasActiveChild = item.children?.some(
                        (subItem) => subItem.path === pathname
                    );

                    return (
                        <div key={index}>
                            {item.children ? (
                                <div className={`${isActiveParent && !isHamburgerOpen && "flex"}`}
                                    onMouseEnter={() => {
                                        if (!isHamburgerOpen)
                                            dispatch(
                                                setActiveMenu(isActiveParent ? null : item.title)
                                            );
                                    }}
                                    onMouseLeave={() => {
                                        if (!isHamburgerOpen) dispatch(setActiveMenu(null));
                                    }}
                                >
                                    {/* Parent Menu Item */}
                                    <button
                                        className={`flex items-center justify-between p-3 w-full rounded-lg transition-all hover:text-black ${hasActiveChild
                                            ? "text-blue-600 bg-blue-100"
                                            : "hover:bg-gray-100"
                                            }`}
                                        onClick={() =>
                                            dispatch(setActiveMenu(isActiveParent ? null : item.title))
                                        }
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className={`${hasActiveChild ? "text-blue-600" : ""}`}>
                                                {item.icon}
                                            </span>
                                            {(isHamburgerOpen || isMobile) && item.title}
                                        </span>
                                        <FiChevronDown
                                            className={`transform transition-transform ${isActiveParent ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Child Menu Items for expanded sidebar (desktop/tablet mobile overlay) */}
                                    <div
                                        className={`overflow-hidden transition-all ${isActiveParent && (isHamburgerOpen || isMobile)
                                            ? "h-auto"
                                            : "h-0"
                                            }`}
                                    >
                                        {item.children.map((subItem, subIndex) => {
                                            const isActiveChild = pathname === subItem.path;
                                            return (
                                                <Link
                                                    key={subIndex}
                                                    href={subItem.path}
                                                    className={`flex items-center gap-2 pl-8 py-2 rounded-lg transition-all hover:text-black ${isActiveChild
                                                        ? "text-blue-600 hover:bg-gray-100"
                                                        : "hover:bg-gray-100"
                                                        }`}
                                                    onClick={() => {
                                                        // In mobile mode, close the sidebar after clicking a link
                                                        if (isMobile) {
                                                            dispatch(setHamburgerOpen(false));
                                                        }
                                                    }}
                                                >
                                                    <GoDotFill
                                                        className={`${isActiveChild ? "text-blue-600" : ""
                                                            }`}
                                                    />
                                                    {(isHamburgerOpen || isMobile) && subItem.title}
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    {/* For desktop: if the sidebar is collapsed, show a floating submenu */}
                                    {isActiveParent && !isHamburgerOpen && !isMobile && (
                                        <div
                                            className={`overflow-hidden transition-all absolute block ml-10 h-auto w-max min-w-40 p-3 bg-white shadow-lg rounded-lg border border-gray-200 z-10 ${isActiveParent && !isHamburgerOpen ? "h-auto" : "h-0"
                                                }`}
                                        >
                                            {item.children.map((subItem, subIndex) => {
                                                const isActiveChild = pathname === subItem.path;
                                                return (
                                                    <Link
                                                        key={subIndex}
                                                        href={subItem.path}
                                                        className={`flex items-center gap-2 p-2 rounded-lg transition-all hover:text-black ${isActiveChild
                                                            ? "text-blue-600 hover:bg-gray-100"
                                                            : "hover:bg-gray-100"
                                                            }`}
                                                        onClick={() => {
                                                            dispatch(
                                                                setActiveMenu(isActiveParent ? null : item.title)
                                                            );
                                                        }}
                                                    >
                                                        <GoDotFill
                                                            className={`${isActiveChild ? "text-blue-600" : ""
                                                                }`}
                                                        />
                                                        {!isHamburgerOpen && subItem.title}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    onClick={() =>
                                        dispatch(setActiveMenu(isActiveParent ? null : item.title))
                                    }
                                    href={item.path}
                                    className={`flex items-center p-3 hover:text-black hover:bg-gray-100 rounded-lg ${isActiveParent ? "text-blue-600" : ""
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        {item.icon}
                                        {(isHamburgerOpen || isMobile) && item.title}
                                    </span>
                                </Link>
                            )}
                        </div>
                    );
                })}
            </nav>
        </div>
    );
}
