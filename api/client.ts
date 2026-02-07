import axios from 'axios';

// TODO: 실제 API 서버 주소로 변경하세요.
const baseURL = 'https://example.com/api';

export const apiClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  async (config) => {
    // 예: AsyncStorage 등에 저장된 토큰을 꺼내서 Authorization 헤더에 넣는 패턴
    // const token = await AsyncStorage.getItem('accessToken');
    // if (token) {
    //   config.headers = {
    //     ...config.headers,
    //     Authorization: `Bearer ${token}`,
    //   };
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // 예: 401 이면 자동 로그아웃/토큰 재발급 등 처리
    // if (error.response?.status === 401) {
    //   // handleUnauthorized();
    // }
    return Promise.reject(error);
  },
);

