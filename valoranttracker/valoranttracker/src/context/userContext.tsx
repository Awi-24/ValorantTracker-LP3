// userContext.tsx
import React, { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

interface UserContextProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  setUser: Dispatch<SetStateAction<string>>;
  favoriteAgents: string[];
  addFavoriteAgent: (agentName: string) => void;
  removeFavoriteAgent: (agentName: string) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState('');
  const [favoriteAgents, setFavoriteAgents] = useState<string[]>([]);

  const setUser = (newUsername: string) => {
    // Limpar a lista de favoritos ao mudar o usuário
    if (newUsername !== username) {
      setFavoriteAgents([]);
    }
    setUsername(newUsername);
  };

  const addFavoriteAgent = (agentName: string) => {
    setFavoriteAgents((prevAgents) => [...prevAgents, agentName]);
  };

  const removeFavoriteAgent = (agentName: string) => {
    setFavoriteAgents((prevAgents) =>
      prevAgents.filter((agent) => agent !== agentName)
    );
  };

  const contextValue: UserContextProps = {
    username,
    setUsername,
    setUser,
    favoriteAgents,
    addFavoriteAgent,
    removeFavoriteAgent,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
