import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../data/Users"; // Make sure to import your User interface

interface CurrentUserContextProps {
  children: ReactNode;
}

interface CurrentUserContextValue {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

const CurrentUserContext = createContext<CurrentUserContextValue | undefined>(
  undefined
);

export const CurrentUserProvider: React.FC<CurrentUserContextProps> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const contextValue: CurrentUserContextValue = {
    currentUser,
    setCurrentUser,
  };

  return (
    <CurrentUserContext.Provider value={contextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error("useCurrentUser must be used within a CurrentUserProvider");
  }
  return context;
};
