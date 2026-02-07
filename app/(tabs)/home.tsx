import { StyleSheet, View } from 'react-native';

import { SafeAreaScreen } from '@/components/safe-area-screen';
import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (
    <SafeAreaScreen style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        홈
      </ThemedText>

      <View style={styles.card}>
        <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
          환영합니다 👋
        </ThemedText>
        <ThemedText style={styles.cardDescription}>
          친구 목록과 대화방을 통해 간단한 채팅 기능을 연습해 볼 수 있는 샘플 홈 화면입니다.
        </ThemedText>
      </View>

      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          빠른 시작
        </ThemedText>
        <ThemedText style={styles.sectionItem}>• 하단 탭에서 친구를 눌러 친구 목록을 확인해 보세요.</ThemedText>
        <ThemedText style={styles.sectionItem}>• 대화방 탭에서 채팅방 목록 자리를 미리 구경해 볼 수 있어요.</ThemedText>
        <ThemedText style={styles.sectionItem}>• 내 정보 탭에서 로그인 연동 예제를 확인해 보세요.</ThemedText>
      </View>
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
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
  cardTitle: {
    marginBottom: 4,
  },
  cardDescription: {
    opacity: 0.8,
  },
  section: {
    gap: 4,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  sectionItem: {
    opacity: 0.9,
  },
});

