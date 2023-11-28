import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/userContext';

function Landing() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [savedUsername, setSavedUsername] = useState('');
  const { username: contextUsername, setUser } = useUser();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setSavedUsername(storedUsername);
      setUser(storedUsername);
    }
  }, [setUser]);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleConfirmClick = () => {
    localStorage.setItem('username', username);
    setSavedUsername(username);
    setUser(username);
    setShowLoginModal(false);
  };

  return (
    <div className="bg-valorant-menu w-full h-screen bg-cover pt-28">
      <div className="mt-[620px] flex flex-col justify-center align-middle items-center text-start font-roboto">
        <h1 className="text-5xl font-inter italic text-white">Welcome to</h1>
        <h2 className="text-9xl font-valorant text-white">
          Radiante Tra<span className="text-mainred">ck</span>er
        </h2>
        <div className="flex flex-row">
          <button
            className="font-roboto m-4 text-4xl hover:bg-mainred bg-darkred px-6 py-4 rounded-sm uppercase font-bold text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </div>

      <h1 className="font-roboto text-md text-white flex flex-row w-full text-start pl-2 pt-2 opacity-20">
        Made by Adrian Widmer, Icaro Canela, Eduardo Rodrigues and Rafael Matos. Version A
        0.0.1.2023
      </h1>

      {showLoginModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-background opacity-50"></div>
          <div className="flex flex-col justify-center items-center z-10 bg-gray-800 p-8 rounded-md">
            {savedUsername ? (
              <p className="text-white mb-4 font-roboto">
                Current username: {savedUsername}
              </p>
            ) : null}
            <h1 className="text-xl mb-4 text-white font-roboto">
              Enter your Valorant username:
            </h1>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="focus:border-transparent focus:outline-none border-transparent p-2 mb-4 rounded-l-sm w-64"
            />
            <Link to={`/Agents?username=${encodeURIComponent(username)}`}>
              <button
                className="font-roboto font-semibold m-4 text-4xl hover:bg-mainred bg-darkred px-6 py-4 rounded-sm uppercase text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                onClick={handleConfirmClick}
              >
                Confirm
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
