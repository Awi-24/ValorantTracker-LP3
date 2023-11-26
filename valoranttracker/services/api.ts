// api.js
const API_URL = 'https://valorant-api.com/v1';


//Função para pegar lista de agentes
export const fetchAgents = async () => {
  try {
    const response = await fetch(`${API_URL}/agents?isPlayableCharacter=True`);
    if (!response.ok) {
      throw new Error('Failed to fetch agent data');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
