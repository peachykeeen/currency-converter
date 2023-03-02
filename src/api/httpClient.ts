/* eslint-disable import/no-anonymous-default-export */

async function httpClient<T>(
  path: string,
  config: RequestInit
): Promise<T | string> {
  const request = new Request(path, config);
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const contentType = response.headers.get("content-type");
  if (contentType?.includes("text/plain")) {
    return response.text();
  }

  return response.json();
}

async function get<T>(path: string, config?: RequestInit): Promise<T | string> {
  const init = { method: "GET", ...config };
  return await httpClient<T>(path, init);
}

export default {
  get,
};
