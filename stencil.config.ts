import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'toggle-button',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
