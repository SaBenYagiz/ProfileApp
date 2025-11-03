import { StyleSheet, Text, View } from 'react-native';
// Adım 5: react-native-safe-area-context'ten import edildi
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    // Adım 5 & 6: SafeAreaView eklendi ve container stili uygulandı
    <SafeAreaView style={styles.container}>
      {/* Adım 5 & 6: View eklendi ve padding stili uygulandı */}
      <View style={styles.contentView}>
        {/* Adım 5: Text bileşeni eklendi */}
        <Text>My Profile App</Text>
      </View>
    </SafeAreaView>
  );
}

// Adım 6: StyleSheet API'si kullanılarak stiller oluşturuldu
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', // Açık bir arka plan rengi
  },
  contentView: {
    padding: 20, // View'e padding verildi
  },
});
