import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { SafeAreaScreen } from '@/components/safe-area-screen';

export default function RoomsScreen() {
  return (
    <SafeAreaScreen style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        대화방
      </ThemedText>
      <ThemedText>아직 대화방이 없습니다. 나중에 채팅방 목록을 여기에 보여줄 수 있어요.</ThemedText>
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

