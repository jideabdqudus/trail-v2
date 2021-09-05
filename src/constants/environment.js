export const COMPONENT_TYPES = {
  number: 'number',
  radio: 'radio',
  text: 'text',
}

export const appConstants = {
  REACT_APP_BASE_URL:
    process.env.NODE_ENV === "development"
      ? "https://trail-api.test.vggdev.com"
      : window.env.REACT_APP_BASE_URL,
};