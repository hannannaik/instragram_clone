import apiClient from '../axios';

export async function login(email, password, device_name) {
  return apiClient.post('/sanctum/token', {
    email,
    password,
    device_name,
  });
}

export async function userData() {
  return apiClient.get('/user/settings');
}
