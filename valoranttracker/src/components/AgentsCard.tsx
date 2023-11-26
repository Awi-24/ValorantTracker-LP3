import React, { useState } from 'react';
import AbilityBox from './AbilityBox';

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
  const [selectedAbility, setSelectedAbility] = useState<{
    displayName: string;
    description: string;
    slot: string;
  } | null>(null);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
    setSelectedAbility(null);
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
        className={`bg-gray-900 w-28 h-30 rounded-sm transition-transform transform border-b-4 hover:border-b-mainred cursor-pointer ${
          isExpanded ? 'scale-110' : ''
        }`}
        onClick={handleToggleExpand}
      >
        <div className="flex justify-center items-center h-full overflow-hidden">
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
        <div className="z-50 fixed top-0 left-0 w-screen h-screen bg-backgorund bg-opacity-50 flex items-center justify-center">
          <div className="bg-agent-card bg-cover hvr-underline-from-center rounded-sm p-8 w-[1200px] h-[700px] shadow-2xl">
            <div className="flex flex-row justify-end">
              <button
                className="bg-mainred p-2 text-center rounded-sm hover:bg-darkred"
                onClick={handleToggleExpand}
              >
                Close
              </button>
            </div>
            <div className="flex flex-row justify-start">
              <div className=" -ml-10 -mt-8">
                <img
                  src={
                    fullPortrait ||
                    'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png'
                  }
                  alt={name || "Not found"}
                  className="w-[500px] h-[870px] object-cover mb-4 shake-animation"
                />
              </div>
              <div className="mt-1 max-w-xl">
                <h3 className="text-4xl mb-2 text-mainred w-fit bg-white p-2">
                  {name || "Not found"}
                </h3>
                <p className="text-gray-200 mt-8 text-md text-justify font-roboto flex-wrap w-fit">
                  {description || "Not Found"}
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
                  <div className="mt-5 font-roboto">
                    <h1 className="text-2xl font-bold text-mainred">{selectedAbility.displayName}</h1>
                    <h3 className="text-md text-gray-200">{selectedAbility.description}</h3>
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
