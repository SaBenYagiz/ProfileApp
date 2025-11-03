# ProfileApp - React Native Profil Kartları Uygulaması

**Öğrenci Numarası:** 220404001  
**Öğrenci Adı:** Yağız Berkutay Ayhan

---

## 📱 Proje Hakkında

Bu proje, React Native kullanılarak geliştirilmiş bir profil kartları uygulamasıdır. Uygulama, bilgisayar biliminin öncü isimlerinin (Ada Lovelace, Alan Turing, Grace Hopper) profillerini görsel kartlar halinde gösterir.

## ✨ Özellikler

- ✅ Profil kartları bileşeni (ProfileCard)
- ✅ Kullanıcı fotoğrafları ile birlikte isim ve rol bilgisi
- ✅ Kaydırılabilir liste (ScrollView)
- ✅ Dokunmatik etkileşim (TouchableOpacity)
- ✅ Alert bildirimleri
- ✅ Platform-özel gölge efektleri (iOS & Android)
- ✅ SafeAreaView ile güvenli alan desteği

## 🛠️ Teknolojiler

- React Native
- React Native Safe Area Context
- JavaScript (ES6+)

## 📁 Proje Yapısı

```
ProfileApp/
├── App.js                    # Ana uygulama bileşeni
├── components/
│   └── ProfileCard.js        # Profil kartı bileşeni
├── assets/
│   ├── ada.jpg              # Ada Lovelace fotoğrafı
│   ├── alan.jpg             # Alan Turing fotoğrafı
│   └── grace.jpg            # Grace Hopper fotoğrafı
├── package.json
└── README.md
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn
- React Native geliştirme ortamı
- Android Studio (Android için) veya Xcode (iOS için)

### Adımlar

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/KULLANICI_ADINIZ/ProfileApp.git
   cd ProfileApp
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Metro Bundler'ı başlatın:**
   ```bash
   npm start
   ```
   veya
   ```bash
   npx react-native start
   ```

4. **Uygulamayı çalıştırın:**
   
   **Android için:**
   ```bash
   npm run android
   ```
   veya
   ```bash
   npx react-native run-android
   ```

   **iOS için (sadece macOS):**
   ```bash
   npm run ios
   ```
   veya
   ```bash
   npx react-native run-ios
   ```

### Cache Sorunları İçin

Eğer uygulama çalışmazsa cache'i temizleyin:
```bash
npx react-native start --reset-cache
```

## 💡 Kullanım

Uygulama başlatıldığında:
1. Ekranda üç profil kartı görüntülenir
2. Liste kaydırılabilirdir
3. Herhangi bir karta dokunduğunuzda, o kişinin ismini içeren bir bildirim görüntülenir

## 🎨 Bileşenler

### ProfileCard
Yeniden kullanılabilir profil kartı bileşeni.

**Props:**
- `name` (string): Kişinin adı
- `role` (string): Kişinin rolü/unvanı
- `imageSource` (require/uri): Profil fotoğrafı kaynağı

**Örnek Kullanım:**
```javascript
<ProfileCard
  name="Ada Lovelace"
  role="Mathematician"
  imageSource={require('./assets/ada.jpg')}
/>
```

## 📝 Notlar

- Resim dosyaları `assets/` klasöründe bulunmalıdır
- `require()` ile yerel resimlere erişilir
- Her kart dokunulabilirdir ve Alert gösterir
- Gölge efektleri hem iOS hem Android'de çalışır

## 🐛 Bilinen Sorunlar

- Metro bundler cache sorunları yaşanırsa `--reset-cache` parametresi kullanın
- Windows'ta dosya yollarında forward slash (`/`) kullanın

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

---

**Geliştirme Tarihi:** Kasım 2025
