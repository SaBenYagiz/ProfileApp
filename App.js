import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentView}>
        <Text style={styles.title}>My Profile App</Text>
        
        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          <ProfileCard
            name="Ada Lovelace"
            role="Mathematician"
            imageSource={require('./assets/ada.jpg')}          />
          
          <ProfileCard
            name="Alan Turing"
            role="Computer Scientist"
            imageSource={require('./assets/alan.jpg')}
          />
          
          <ProfileCard
            name="Grace Hopper"
            role="Computer Programmer"
            imageSource={require('./assets/grace.jpg')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  contentView: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
  },
  scrollView: {
    flex: 1,
  },
});