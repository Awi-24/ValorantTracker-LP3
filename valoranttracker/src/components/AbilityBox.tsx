import React from 'react';

interface AbilityBoxProps {
  backgroundImage: string;
  onClick: () => void;
  isSelected: boolean; // Adicionando a propriedade isSelected
}

function AbilityBox({ backgroundImage, onClick, isSelected }: AbilityBoxProps) {
  return (
    <div
      className={`max-h-20 max-w-20 h-20 w-20 border rounded-sm hover:scale-105 font-roboto relative text-gray-200 transition-transform duration-300 ease-in-out ${
        isSelected ? 'border-mainred' : '' // Adicionando a lógica para o contorno na cor mainred
      }`}
      style={{
        backgroundImage: `url(${backgroundImage || "https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png"})`,
        backgroundSize: 'cover'
      }}
      onClick={onClick}
    >
    </div>
  );
}

export default AbilityBox;
