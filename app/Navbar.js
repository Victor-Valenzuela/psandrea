"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { NavbarElements, NavElementsMobile } from './NavbarElements';

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['start', 'about', 'services', 'download', 'contact', 'faq', 'privacy'];
      let foundSection = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            foundSection = section;
            break;
          }
        }
      }
      setActiveSection(foundSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar bg-stone-100 fixed w-full z-50 shadow-[0_4px_10px_-1px_rgba(0,0,0,0.9)]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white">
                <Image
                  src="./images/andrea3.png"
                  alt="Logo Psicóloga"
                  width={350}
                  height={40}
                  priority={true}
                  className="rounded-sm w-[250px] md:w-[320px]"
                />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavbarElements />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-1 mr-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded={isClick}
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${isClick ? "max-h-30 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          < NavElementsMobile />
        </div>
      </div>
    </nav>
  );
}