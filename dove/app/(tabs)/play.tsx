import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import axios from 'axios';

const App = () => {
  const [status, setStatus] = useState('');

  const sendNumber = async (number: number): Promise<void> => {
    try {
      console.log(number)
      const response = await axios.post('http://YOUR_SERVER_IP:3000/api/send-number', { number });
      
      setStatus(response.data.message);
    } catch (error) {
      setStatus('Error sending number');
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaProvider>
      <TouchableOpacity style={styles.redButton} onPress={() => sendNumber(0)}>
        <Text>Red</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.blueButton} onPress={() => sendNumber(1)}>
        <Text>Blue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.greenButton} onPress={() => sendNumber(2)}>
        <Text>Green</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.yellowButton} onPress={() => sendNumber(3)}>
        <Text>Yellow</Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  redButton: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
  },
  blueButton: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
  },
  greenButton: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
  yellowButton: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    padding: 10,
  }
});

export default App;