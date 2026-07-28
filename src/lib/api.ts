const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://208.76.40.99:3003";

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

type BotAction = "refresh" | "restart" | "disconnect" | "delete";

export type BotStatusResponse = {
  connected?: boolean;
  pairingCode?: string;
  qrAvailable?: boolean;
  activeSessions?: number;
  sessions?: Array<{ id: string; status: string }>;
  message?: string;
};

async function fetchJson<T>(url: string, init: RequestInit = {}) {
  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Request failed: ${response.status} ${response.statusText} - ${errorBody}`);
  }

  return (await response.json()) as T;
}

export async function getBotStatus() {
  return fetchJson<BotStatusResponse>(API.status);
}

export async function getBotSessions() {
  return fetchJson<{ sessions: Array<{ id: string; status: string }> }>(API.sessions);
}

export async function restartSession(id: string) {
  return fetchJson<BotStatusResponse>(API.restart(id));
}

export async function disconnectSession(id: string) {
  return fetchJson<BotStatusResponse>(API.disconnect(id));
}

export async function deleteSession(id: string) {
  return fetchJson<BotStatusResponse>(API.delete(id));
}

export async function performBotAction(action: BotAction, sessionId?: string) {
  if (action === "refresh") {
    return getBotStatus();
  }

  if (!sessionId) {
    throw new Error("Session ID diperlukan untuk melakukan action ini.");
  }

  if (action === "restart") {
    return restartSession(sessionId);
  }

  if (action === "disconnect") {
    return disconnectSession(sessionId);
  }

  if (action === "delete") {
    return deleteSession(sessionId);
  }

  return getBotStatus();
}
