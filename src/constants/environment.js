export const appConstants = {
  REACT_APP_BASE_URL:
    process.env.NODE_ENV === "development"
      ? "https://trail-api.staging.vggdev.com"
      : window.env.REACT_APP_BASE_URL,
};

// https://trail-api.prod.vggdev.com
// https://trail-api.staging.vggdev.com
// https://trailapi1test.azurewebsites.net