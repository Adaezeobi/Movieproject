import { API_KEY, baseURL } from "../config";

export const GET = async (url) => {
  const API_URL = `${baseURL}${url}?api_key=${API_KEY}`;

  let response = await fetch(API_URL, { method: "GET" });

  response = await response.json();

  return response;
};
