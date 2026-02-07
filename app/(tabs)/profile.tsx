import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { SafeAreaScreen } from '@/components/safe-area-screen';
import { ThemedText } from '@/components/themed-text';
import { useAuth } from '@/auth/auth-context';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleGoToLogin = () => {
    router.push('/login');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <SafeAreaScreen style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        내 정보
      </ThemedText>

      {user ? (
        <View style={styles.card}>
          <ThemedText type="defaultSemiBold" style={styles.label}>
            이름
          </ThemedText>
          <ThemedText style={styles.value}>{user.name}</ThemedText>

          {user.email && (
            <>
              <ThemedText type="defaultSemiBold" style={[styles.label, styles.labelSpacing]}>
                이메일
              </ThemedText>
              <ThemedText style={styles.value}>{user.email}</ThemedText>
            </>
          )}

          <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout} activeOpacity={0.8}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              로그아웃
            </ThemedText>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.card}>
          <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
            아직 로그인하지 않았어요
          </ThemedText>
          <ThemedText style={styles.cardDescription}>
            내 정보를 확인하려면 먼저 로그인해야 합니다. 아래 버튼을 눌러 로그인 화면으로 이동해 주세요.
          </ThemedText>

          <TouchableOpacity style={styles.button} onPress={handleGoToLogin} activeOpacity={0.8}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              로그인하러 가기
            </ThemedText>
          </TouchableOpacity>
        </View>
      )}
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
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
  cardTitle: {
    marginBottom: 8,
  },
  cardDescription: {
    opacity: 0.8,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    opacity: 0.7,
  },
  labelSpacing: {
    marginTop: 16,
  },
  value: {
    marginTop: 2,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a7ea4',
  },
  logoutButton: {
    backgroundColor: '#d9534f',
  },
  buttonText: {
    color: '#fff',
  },
});

