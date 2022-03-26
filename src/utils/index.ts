export const environmentVariable = () => {
  const env = import.meta.env.VITE_APP_ANT;
  let parps = null;
  switch (env) {
    case "dev":
      parps = "dev";
      break;
    case "test":
      parps = "test";
      break;
    case "prod":
      parps = "prod";
      break;
    default:
      parps = "dev";
      break;
  }
  return parps;
};
