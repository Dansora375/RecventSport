import React from 'react';

// Proporciona un valor predeterminado para el contexto
export const UserContext = React.createContext({ user: null, setUser: (object) => {} });
