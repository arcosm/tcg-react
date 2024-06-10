import React from 'react';
import { Header } from './Header';
import './App.css';
import { Flex, Button,Text } from '@radix-ui/themes';

function App() {
  return (
    <div className="App">
      <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
    </div>
  );
}

export default App;
