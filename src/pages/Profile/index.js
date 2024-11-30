import React, { useState } from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import styles from './styles';

const Profile = () => {
  const [followers, setFollowers] = useState(100);

  // Fungsi untuk menambah followers
  const handleFollow = () => {
    setFollowers(followers + 1);  // Menambah 1 follower setiap kali tombol ditekan
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
        <Header />
        <Text style={styles.text}>Followers: {followers}</Text>
        
        {/* Tombol untuk mengikuti */}
        <Button title="Follow" onPress={handleFollow} />
      </ScrollView>
    </View>
  );
};

export default Profile;
