import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <SafeAreaProvider>
      <TouchableOpacity style={styles.button}>
        <Text></Text>
      </TouchableOpacity><TouchableOpacity style={styles.button}>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Red</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Blue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Green</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Yellow</Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});
