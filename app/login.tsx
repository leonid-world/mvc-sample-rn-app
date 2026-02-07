import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { useRouter } from 'expo-router';

import { SafeAreaScreen } from '@/components/safe-area-screen';
import { ThemedText } from '@/components/themed-text';
import { useAuth } from '@/auth/auth-context';
import { loginApi } from '@/api/auth';

export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!email || !password || submitting) {
      return;
    }

    try {
      setSubmitting(true);
      setError(null);

      const result = await loginApi({ email, password });

      // TODO: result에 accessToken이 있으면 여기에서 AsyncStorage 등에 저장
      login({
        id: result.id,
        name: result.name,
        email: result.email,
      });

      router.replace('/(tabs)/profile');
    } catch (e) {
      setError('로그인에 실패했습니다. 이메일/비밀번호를 확인해주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}>
      <SafeAreaScreen style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          로그인
        </ThemedText>

        <ThemedText style={styles.description}>
          간단한 예제용 로그인 화면입니다. 실제 서비스에서는 서버와 연동하여 토큰을 관리하게 됩니다.
        </ThemedText>

        {error && (
          <ThemedText style={styles.errorText}>
            {error}
          </ThemedText>
        )}

        <View style={styles.form}>
          <ThemedText type="defaultSemiBold" style={styles.label}>
            이메일
          </ThemedText>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="example@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <ThemedText type="defaultSemiBold" style={[styles.label, styles.labelSpacing]}>
            비밀번호
          </ThemedText>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="비밀번호를 입력하세요"
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity style={[styles.button, submitting && styles.buttonDisabled]} onPress={handleLogin} activeOpacity={0.8} disabled={submitting}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              {submitting ? '로그인 중...' : '로그인'}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </SafeAreaScreen>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    marginBottom: 12,
  },
  description: {
    opacity: 0.8,
    marginBottom: 24,
  },
  errorText: {
    color: '#d9534f',
    marginBottom: 12,
  },
  form: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    opacity: 0.8,
  },
  labelSpacing: {
    marginTop: 12,
  },
  input: {
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a7ea4',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
  },
});

