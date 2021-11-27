/** @format */
import { createContext } from 'react';
import { RadioValue } from './Radio';
export interface RadioGroupContextProps {
  value: RadioValue;
  onChange: (val: RadioValue) => void;
  name?: string;
}
export const RadioGroupContext = createContext<RadioGroupContextProps | null>(
  null
);
