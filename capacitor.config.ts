import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Foody',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
    scopes: ["profile","email", "https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest"],
    serverClientId: "966483059530-2bd3tkjisb06c8di41eo3j5rdcocaqkv.apps.googleusercontent.com",
    forceCodeForRefreshToken: true,
    },
  }
};

export default config;
