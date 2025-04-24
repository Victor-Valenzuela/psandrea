"use client";
import React, { useState, useCallback } from "react";
import { usePathname } from 'next/navigation';
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const navigationLinks = [
    {
        to: "start",
        label: "Inicio",
    },
    {
        to: "about",
        label: "Sobre mi",
    },
    {
        to: "services",
        label: "Servicios",
    },
    {
        to: "download",
        label: "Descargas",
    },
    {
        to: "contact",
        label: "Contacto",
    },
    {
        label: "Más",
        isDropdown: true,
        subItems: [
            { to: '/faq', label: 'FAQ', isExternal: true },
            { to: '/privacy', label: 'Aviso de Privacidad', isExternal: true }
        ],
    },
];

const commonLinkProps = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
};

const baseLinkStyles = `
    text-black
    hover:bg-gray-700
    hover:text-white
    rounded-lg
    p-2
    font-medium
    whitespace-nowrap
    cursor-pointer
    select-none
    focus:outline-none
    focus:ring-2
    focus:ring-gray-400
    active:bg-gray-800
    transition-colors
`;

export function NavbarElements() {
    const [activeSection, setActiveSection] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();
    const isSecondaryPage = pathname === '/faq' || pathname === '/privacy';

    const handleSetActive = useCallback((to) => {
        setActiveSection(to);
    }, []);

    if (isSecondaryPage) {
        return (
            <Link
                href="/"
                className={`${baseLinkStyles} flex items-center`}
            >
                <span className="flex items-center"> {/* Envolvemos el contenido en un span */}
                    <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Volver a Inicio
                </span>
            </Link>
        );
    }


    return (
        <>
            {navigationLinks.map((item) => {
                if (item.isDropdown) {
                    return (
                        <div key={item.label} className="relative group">
                            <button
                                className={`${baseLinkStyles} inline-flex items-center`}
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                {item.label}
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                                      transition-all duration-200 ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <div className="py-1">
                                    {item.subItems.map((subItem) => (
                                        <Link
                                            key={subItem.to}
                                            href={subItem.to}
                                            className={`${baseLinkStyles} block px-4 py-2`}
                                        >
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                }

                return (
                    <ScrollLink  // Cambiamos a ScrollLink para navegación interna
                        key={item.to}
                        to={item.to}
                        {...commonLinkProps}
                        onSetActive={handleSetActive}
                        className={`
                            ${baseLinkStyles}
                            ${activeSection === item.to ? "underline" : ""}
                        `}
                    >
                        {item.label}
                    </ScrollLink>
                );
            })}
        </>
    );
}

export function NavElementsMobile({ onLinkClick }) {
    const [activeSection, setActiveSection] = useState("");
    const pathname = usePathname();
    const isSecondaryPage = pathname === '/faq' || pathname === '/privacy';

    const handleClick = useCallback(
        (to) => {
            setActiveSection(to);
            if (onLinkClick) {
                onLinkClick();
            }
        },
        [onLinkClick]
    );

    if (isSecondaryPage) {
        return (
            <Link
                href="/"
                className={`${baseLinkStyles} block w-full text-left flex items-center`}
                onClick={onLinkClick}
            >
                <span className="flex items-center w-full"> {/* Envolvemos el contenido en un span */}
                    <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Volver a Inicio
                </span>
            </Link>
        );
    }


    return (
        <>
            {navigationLinks.map((item) => {
                if (item.isDropdown) {
                    return (
                        <div key={item.label}>
                            {item.subItems.map((subItem) => (
                                <Link
                                    key={subItem.to}
                                    href={subItem.to}
                                    className={`
                                        block
                                        ${baseLinkStyles}
                                        ${activeSection === subItem.to ? 'underline' : ''}
                                    `}
                                    onClick={() => handleClick(subItem.to)}
                                >
                                    {subItem.label}
                                </Link>
                            ))}
                        </div>
                    );
                }

                return (
                    <ScrollLink
                        key={item.to}
                        to={item.to}
                        {...commonLinkProps}
                        className={`
                            block
                            ${baseLinkStyles}
                            ${activeSection === item.to ? "underline" : ""}
                        `}
                        onClick={() => handleClick(item.to)}
                    >
                        {item.label}
                    </ScrollLink>
                );
            })}
        </>
    );
}
