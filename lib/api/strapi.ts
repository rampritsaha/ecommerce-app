import qs from 'qs';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const API_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchOptions {
  path: string;
  urlParams?: Record<string, any>;
  options?: RequestInit;
}

async function fetchAPI({ path, urlParams, options = {} }: FetchOptions) {
  try {
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
      ...options,
    };

    const queryString = urlParams ? `?${qs.stringify(urlParams)}` : '';
    const url = `${STRAPI_URL}/api${path}${queryString}`;

    const res = await fetch(url, mergedOptions);

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}