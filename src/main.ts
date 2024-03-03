import { createApp } from "vue";

import "~/styles/globals.ts";

import App from "~/App.vue";

import router from "~/router.tsx";

import { init } from "~/store/theme.ts";

init();

const app = createApp(App);

app.use(router);

app.mount("#app");
