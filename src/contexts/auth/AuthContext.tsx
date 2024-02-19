import { ReactNode, createContext, useState } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <AuthContext.Provider
      value={{ isAuthenticated: authenticated, setAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
