import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { SafeAreaScreen } from '@/components/safe-area-screen';

export default function SettingsScreen() {
  return (
    <SafeAreaScreen style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        설정
      </ThemedText>
      <ThemedText>여기에서 알림, 프로필 등의 설정을 나중에 추가할 수 있어요.</ThemedText>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    marginBottom: 16,
  },
});

