import { Component } from 'solid-js';
import { RouterProvider } from '@zxlib/solid-router';
import { BasicExample } from './examples/BasicExample';

export const App: Component = () => {
  return (
    <RouterProvider>
      <BasicExample />
    </RouterProvider>
  );
};
