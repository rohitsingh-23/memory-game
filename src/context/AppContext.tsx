import React, { createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

type AppContextType = {
  moves: number;
  setMoves: Dispatch<SetStateAction<number>>;
  solvedCards: number;
  setSolvedCards: Dispatch<SetStateAction<number>>;
  screen: number;
  setScreen: Dispatch<SetStateAction<number>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = { children: ReactNode };
export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [moves, setMoves] = React.useState<number>(0);
    const [solvedCards, setSolvedCards] = React.useState<number>(0)
    const [screen, setScreen] = React.useState<number>(0)

  return (
    <AppContext.Provider value={{ moves, setMoves, solvedCards, setSolvedCards, screen, setScreen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
