async function httpClient(
  path: string,
  config: RequestInit
) {
  const request = new Request(path, config);
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}

export async function get(path: string, config?: RequestInit) {
  const init = { method: "GET", ...config };
  const response = await httpClient(path, init);

  const contentType = response.headers.get("content-type");
  if (contentType?.includes("text/plain")) {
    return response.text();
  }

  return response.json();
}
