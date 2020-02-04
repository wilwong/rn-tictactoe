import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Grid() {
  return (
    <View style={styles.container}>
        <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
