import { JetApp } from "/node_modules/webix-jet/dist/jet.mjs";

import LoginView from "./views/login.js";
import DashboardView from "./views/dashboard.js";

const app = new JetApp({
  id: "main",
  start: "/login",
  debug: true,
  views: {
    login: LoginView,
    dashboard: DashboardView,
  },
});

app.render(document.getElementById("app"));
