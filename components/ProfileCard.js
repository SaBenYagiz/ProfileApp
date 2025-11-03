import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = ({ name, role, imageSource }) => {
  return (
    <View style={styles.card}>
      <Image 
        source={imageSource} 
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
    // iOS gölge özellikleri
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android gölge özelliği
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // width/height'ın yarısı (dairesel)
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#666666',
  },
});

export default ProfileCard;