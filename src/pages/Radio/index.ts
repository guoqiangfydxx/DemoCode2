/** @format */
import React from 'react';
import { Radio, RadioProps } from './Radio';
import { Group } from './Group';
import './radio.scss';

interface ComputedComponent extends React.FC<RadioProps> {
  Group: typeof Group;
}
const InternalRadio = Radio as ComputedComponent;
InternalRadio.Group = Group;
export { Radio, Group };
export default InternalRadio;
