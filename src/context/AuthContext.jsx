import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  //props를 하나라도 넣어야 route설정해놓은 것들이 모두 렌더링 된다.
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AuthContext.Provider value={{ isLogin }}>{children}</AuthContext.Provider>
  );
}
