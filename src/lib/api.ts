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

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "ourin_panel_key";
const API_SECRET = process.env.NEXT_PUBLIC_API_SECRET || "ourin_panel_secret";
const API_AUTH_SCHEME = process.env.NEXT_PUBLIC_API_AUTH_SCHEME || "x-api-key";
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

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
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json");

  if (API_TOKEN) {
    headers.set("Authorization", `Bearer ${API_TOKEN}`);
  } else if (API_KEY) {
    if (API_AUTH_SCHEME.toLowerCase() === "apikey") {
      headers.set("Authorization", `ApiKey ${API_KEY}`);
    } else {
      headers.set("x-api-key", API_KEY);
    }
  }

  if (API_SECRET) {
    headers.set("x-api-secret", API_SECRET);
  }

  const response = await fetch(url, {
    ...init,
    headers,
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
