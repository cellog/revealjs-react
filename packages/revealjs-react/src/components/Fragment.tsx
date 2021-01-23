import React, { createContext } from 'react';
import { FragmentTransitions } from '../../types/reveal.js';

export interface FragmentContextType {
  setNotes: (notes: string) => void;
  index?: number;
  transition?: FragmentTransitions;
}

const defaultContext: FragmentContextType = {
  setNotes: () => null,
};

export const fragmentContext = createContext(defaultContext);

export interface FragmentProps {
  index?: number;
}

export interface FragmentProps {
  index?: number;
  transition?: FragmentTransitions;
  children: React.ReactNode;
}

export default function Fragment({
  index,
  transition,
  children,
}: FragmentProps) {
  const classes = ['fragment'];
  if (transition) {
    classes.push(transition);
  }
  return (
    <span className={classes.join(' ')} data-fragment-index={index}>
      {children}
    </span>
  );
}
