import { JetView } from "/node_modules/webix-jet/dist/jet.mjs";

export default class DashboardView extends JetView {
  config() {
    return {
      rows: [
        {
          template: "DASHBOARD",
          type: "header",
        },
        {
          template: "Welcome to the dashboard!",
        },
      ],
    };
  }
}
