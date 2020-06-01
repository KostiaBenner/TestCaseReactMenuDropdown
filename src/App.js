import React from 'react';
import Grid from 'hedron';
import { HeaderMenu } from './components';

export default function App() {
  return (
    <Grid.Provider padding="20px">
      <Grid.Bounds direction="vertical">
        <Grid.Box>
          <HeaderMenu />
        </Grid.Box>
      </Grid.Bounds>
    </Grid.Provider>
  );
}
