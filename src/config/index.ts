const AppConfig = (): { env: string; baseURL?: string, baiduMapURL?: string} => {
  const env = process.env.NODE_ENV
  const baseURL = process.env.REACT_APP_BASE_API
  const baiduMapURL = process.env.REACT_APP_BAIDUMAP_API
  return {
    env,
    baseURL,
    baiduMapURL
  }
}

export default AppConfig
