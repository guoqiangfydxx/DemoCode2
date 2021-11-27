/** @format */

import React from 'react';
export const defaultGetPrefix = (
  suffixCls?: string,
  customizePrefixCls?: string
) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `puzzle-${suffixCls}` : 'puzzle';
};

export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefix
});

export const ConfigConsumer = ConfigContext.Consumer;
export const ConfirmProdiver = ConfigContext.Provider;
