import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Navbar = () => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Text style={styles.link}>Home</Text>
    </TouchableOpacity>
    <Text style={styles.title}>Profile</Text>
    <TouchableOpacity>
      <Text style={styles.link}>Settings</Text>
    </TouchableOpacity>
  </View>
);

export default Navbar;
