import { createContext } from 'react';

export const MyContext = createContext(4)
MyContext.displayName = "Count"