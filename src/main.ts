import "./app.postcss";
import App from "./App.svelte";
import ETLLog from './lib/ETLLog.svelte'

const app = new App({
  target: document.getElementById("app"),
});

new ETLLog({
  target: document.querySelector('#etllog')
})

export default app;
