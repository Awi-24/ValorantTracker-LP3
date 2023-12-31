// AgentsCard.js
import React, { useState, useEffect } from 'react';
import AbilityBox from './AbilityBox';
import Favorite from '../img/star.svg';
import { useUser } from '../context/userContext';

interface AgentsCardProps {
  name: string;
  description: string;
  displayIcon: string;
  fullPortrait: string;
  abilities: {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
  }[];
}

const AgentsCard: React.FC<AgentsCardProps> = ({
  name,
  description,
  displayIcon,
  fullPortrait,
  abilities,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedAbility, setSelectedAbility] = useState<{
    displayName: string;
    description: string;
    slot: string;
  } | null>(null);

  const { username, addFavoriteAgent, removeFavoriteAgent, favoriteAgents } = useUser();
  
  useEffect(() => {
    setIsFavorite(favoriteAgents.includes(name));
  }, [favoriteAgents, name]);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
    setSelectedAbility(null);
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteAgent(name);
    } else {
      addFavoriteAgent(name);
    }
  };

  const handleAbilityClick = (ability: {
    displayName: string;
    description: string;
    slot: string;
  }) => {
    setSelectedAbility(ability);
  };

  return (
    <div className="relative">
      <div
        className={`bg-gray-900 w-28 h-30 rounded-sm transition-transform transform cursor-pointer ${
          isExpanded ? 'scale-110' : ''
        }`}
        onClick={handleToggleExpand}
      >
        <div
          className={`flex justify-center items-center h-full overflow-hidden ${
            isFavorite ? 'border-b-4 border-b-mainred  hover:border-b-yellow-400 bg-yellow-600' : 'border-b-4 hover:border-b-mainred'
          }`}
        >
          <img
            src={isExpanded ? fullPortrait : displayIcon}
            alt={name}
            className={`h-40 w-40 object-cover transition-all transform ${
              isExpanded ? 'scale-110' : ''
            }`}
          />
        </div>
      </div>
      {isExpanded && (
        <div className="z-50 fixed top-0 left-0 w-screen h-screen bg-background bg-opacity-50 flex items-center justify-center">
          <div className="bg-agent-card bg-cover hvr-underline-from-center rounded-sm p-8 w-[1200px] h-[700px] shadow-2xl">
            <div className="flex flex-row justify-end">
              <button
                className={`bg-gray-700 font-inter uppercase font-semibold p-2 mx-5 text-center rounded-sm hover:bg-yellow-400 ${
                  isFavorite ? 'bg-yellow-400 shadow-text-yellow-400' : ''
                }`}
                onClick={handleToggleFavorite}
              >
                <img src={Favorite} alt="Favorite" className="w-5 h-5" />
              </button>
              <button
                className="bg-mainred p-2 mx-5 font-inter uppercase font-semibold text-center rounded-sm hover:bg-darkred"
                onClick={handleToggleExpand}
              >
                Close
              </button>
            </div>
            <div className="flex flex-row justify-start">
              <div className=" -ml-10 -mt-8">
                <img
                  src={fullPortrait || 'Not Found'}
                  alt={name || 'Not found'}
                  className="w-[500px] h-[870px] object-cover mb-4 shake-animation"
                />
              </div>
              <div className="mt-1 max-w-xl">
                <h3 className="text-4xl mb-2 text-mainred w-fit bg-white p-2">
                  {name || 'Not found'}
                </h3>
                <p className="text-gray-200 mt-8 text-md text-justify font-roboto flex-wrap w-fit">
                  {description || 'Not Found'}
                </p>
                <div className="flex flex-row justify-between mt-10 gap-5">
                  {abilities.map((ability, index) => (
                    <AbilityBox
                      key={index}
                      backgroundImage={ability.displayIcon}
                      onClick={() => handleAbilityClick({ ...ability, slot: ability.slot })}
                      isSelected={selectedAbility?.slot === ability.slot}
                    />
                  ))}
                </div>
                {selectedAbility && (
                  <div className="mt-5 font-roboto z-[1000]">
                    <h1 className="text-2xl font-bold text-mainred">
                      {selectedAbility.displayName}
                    </h1>
                    <h3 className="text-md mt-2 text-gray-200">{selectedAbility.description}</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentsCard;
