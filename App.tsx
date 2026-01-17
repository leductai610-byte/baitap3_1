import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Đây là Custom Component: Hình vuông có thể tùy chỉnh [cite: 8, 11]
const Square = ({ color, content }) => (
  <View style={[styles.box, { backgroundColor: color }]}>
    <Text style={styles.text}>{content}</Text>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      {/* Sử dụng Props để truyền dữ liệu cho Component */}
      <Square color="cyan" content="Hello, world" />
    </View>
  );
};

const styles = StyleSheet.create({ // Sử dụng StyleSheet theo giáo trình [cite: 20]
  container: {
    flex: 1, 
    justifyContent: 'center', // Căn giữa theo Flexbox [cite: 30]
    alignItems: 'center',
  },
  box: {
    width: 150, // Xác định kích thước hình vuông [cite: 33]
    height: 150,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text: {
    color: 'black', // Màu sắc văn bản [cite: 32]
    fontWeight: 'bold',
  },
});

export default App;