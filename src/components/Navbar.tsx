'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { NAV_ITEMS } from '@/data/resume';
import { Sun, Moon, Home, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme()
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const filteredNavItems = NAV_ITEMS.filter(item => item.href !== '/');

  return (
    <>
      {/* 移动端导航 */}
      <nav className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-lg rounded-full shadow-lg transition-all duration-300 ease-in-out px-4 border border-gray-200 dark:border-gray-700">
        <ul className="flex items-center justify-center py-2 space-x-4">
          <NavItem href="/" icon={Home} label="Home" />
          <li>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </li>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </ul>
      </nav>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div ref={menuRef} className="absolute bottom-20 left-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4">
            <ul className="space-y-2">
              {filteredNavItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 桌面端导航 */}
      <nav className="hidden md:block fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-lg rounded-full shadow-lg transition-all duration-300 ease-in-out px-6 border border-gray-200 dark:border-gray-700">
        <ul className="flex items-center justify-center py-2 space-x-6">
          <NavItem href="/" icon={Home} label="Home" />
          {filteredNavItems.map((item, index) => (
            <NavItem key={index} href={item.href} icon={item.icon} label={item.label} />
          ))}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </ul>
      </nav>
    </>
  )
}

const NavItem = ({ href, icon: Icon, label }) => (
  <li className="group relative">
    <Link 
      href={href} 
      className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
    >
      <div className="relative p-2 transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <Icon className="w-6 h-6 relative z-10 transition-all duration-300 group-hover:scale-110" />
      </div>
      <span className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded-md whitespace-nowrap shadow-lg">
        {label}
      </span>
    </Link>
  </li>
)

const ThemeToggle = ({ theme, setTheme }) => (
  <li className="group relative">
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
    >
      <div className="relative p-2 transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-indigo-500 dark:to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        {theme === 'light' ? <Moon className="w-6 h-6 relative z-10 transition-all duration-300 group-hover:scale-110" /> : <Sun className="w-6 h-6 relative z-10 transition-all duration-300 group-hover:scale-110" />}
      </div>
      <span className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded-md whitespace-nowrap shadow-lg">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </span>
    </button>
  </li>
)