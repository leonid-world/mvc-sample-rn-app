import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { SafeAreaScreen } from '@/components/safe-area-screen';

const FRIENDS = [
  { id: '1', name: '홍길동', status: '온라인' },
  { id: '2', name: '김철수', status: '방금 접속함' },
  { id: '3', name: '이영희', status: '오프라인' },
];

export default function FriendsScreen() {
  return (
    <SafeAreaScreen style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        친구
      </ThemedText>

      <FlatList
        data={FRIENDS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.friendItem} activeOpacity={0.7}>
            <View>
              <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
              <ThemedText type="default" style={styles.status}>
                {item.status}
              </ThemedText>
            </View>
          </TouchableOpacity>
        )}
      />
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
  listContent: {
    paddingBottom: 24,
  },
  friendItem: {
    paddingVertical: 12,
  },
  status: {
    opacity: 0.7,
    marginTop: 2,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
  },
});

