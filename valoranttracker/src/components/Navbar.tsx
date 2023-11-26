import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type Tab = 'start' | 'agents' | 'weapons' | 'maps' | 'esports';

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('start');

  const handleMouseMove = (e: React.MouseEvent) => {
    const mouseY = e.clientY;
    const triggerZoneHeight = 50;

    setIsNavbarVisible(mouseY < triggerZoneHeight);
  };

  useEffect(() => {
    const handleMouseMoveEvent = (e: MouseEvent) => handleMouseMove(e as unknown as React.MouseEvent);

    window.addEventListener('mousemove', handleMouseMoveEvent);

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveEvent);
    };
  }, []);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className={`fixed text-center text-white w-full text-xl z-50 mt-5 transition-all ${
        isNavbarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
      }`}
    >
      <nav className="flex flex-row  overflow-clip items-center align-middle uppercase font-valorant justify-center">
        <Link
          to="/"
          onClick={() => handleTabClick('start')}
          className={`px-7 rounded-l-sm ${
            activeTab === 'start' ? 'bg-mainred' : 'bg-gray-800'
          } hover:bg-mainred`}
        >
          Start
        </Link>
        <Link
          to="/agents"
          onClick={() => handleTabClick('agents')}
          className={`px-7 ${
            activeTab === 'agents' ? 'bg-mainred' : 'bg-gray-900'
          } hover:bg-mainred`}
        >
          Agents
        </Link>
        <Link
          to="/weapons"
          onClick={() => handleTabClick('weapons')}
          className={`px-7 ${
            activeTab === 'weapons' ? 'bg-mainred' : 'bg-gray-800'
          } hover:bg-mainred`}
        >
          Weapons
        </Link>
        <Link
          to="/Maps"
          onClick={() => handleTabClick('maps')}
          className={`px-7 ${
            activeTab === 'maps' ? 'bg-mainred' : 'bg-gray-900'
          } hover:bg-mainred`}
        >
          Maps
        </Link>
        <Link
          to="/esports"
          onClick={() => handleTabClick('esports')}
          className={`px-7 rounded-r-sm ${
            activeTab === 'esports' ? 'bg-mainred' : 'bg-gray-800'
          } hover:bg-mainred`}
        >
          E-Sports
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
