const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const API = {
  status: `${BASE_URL}/api/status`,
  sessions: `${BASE_URL}/api/sessions`,
  createSession: `${BASE_URL}/api/session/create`,
  qr: (id: string) => `${BASE_URL}/api/session/${id}/qr`,
  sessionStatus: (id: string) => `${BASE_URL}/api/session/${id}/status`,
  restart: (id: string) => `${BASE_URL}/api/session/${id}/restart`,
  disconnect: (id: string) => `${BASE_URL}/api/session/${id}/disconnect`,
  delete: (id: string) => `${BASE_URL}/api/session/${id}`,
};