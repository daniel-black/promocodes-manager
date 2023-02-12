export function getBaseURL() {
  return isDev()
    ? 'http://localhost:3000'
    : process.env.VERCEL_URL;
}

export function isDev() {
  return process.env.NODE_ENV === 'development';
}