import React, { createContext, useState } from 'react';


const AuthContext1 = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create the context
export const AuthContext = createContext(null);

export default AuthContext1;