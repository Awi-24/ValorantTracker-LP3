import React, { useState, useEffect } from "react";
import AgentTitle from "../img/AgentsTitle.svg";
import AgentsCard from "../components/AgentsCard";
import { fetchAgents } from "../../services/api.ts";

interface AgentData {
  uuid: string;
  displayName: string;
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

function Agents() {
  const [agentsData, setAgentsData] = useState<AgentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Adicionando o tipo explícito aqui

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAgents();
        setAgentsData(data);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message); // Assegurando que 'error' seja uma instância de Error
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-map-background bg-cover w-full h-screen text-white flex justify-center">
      <div className="w-full max-w-7xl font-valorant">
        <div className="mt-32 flex flex-row">
          <div className="w-3/6 p-4">
            <img src={AgentTitle} alt="" className="h-[700px]" />
          </div>
          <div className="mt-10 flex flex-wrap gap-4 h-[700px] overflow-y-auto">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {agentsData.map((agent) => (
              <AgentsCard
                key={agent.uuid}
                name={agent.displayName}
                description={agent.description}
                displayIcon={agent.displayIcon}
                fullPortrait={agent.fullPortrait}
                abilities={agent.abilities}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agents;
