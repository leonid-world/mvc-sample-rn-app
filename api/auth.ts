import { apiClient } from './client';

type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  id: string;
  name: string;
  email: string;
  // accessToken?: string;
};

export async function loginApi(payload: LoginRequest): Promise<LoginResponse> {
  // TODO: 실제 백엔드 로그인 엔드포인트에 맞게 URL·타입을 수정하세요.
  const res = await apiClient.post<LoginResponse>('/auth/login', payload);
  return res.data;
}

