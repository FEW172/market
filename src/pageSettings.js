import { createContext } from 'react';
let settings = "yellowgreen";

// данное свойство будет доступно в компонентах без необходимости объявления props
export const PageSettings = createContext(settings);