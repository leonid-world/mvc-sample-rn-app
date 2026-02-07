import type { PropsWithChildren } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/themed-view';

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export function SafeAreaScreen({ children, style }: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={[{ flex: 1 }, style]}>{children}</ThemedView>
    </SafeAreaView>
  );
}

