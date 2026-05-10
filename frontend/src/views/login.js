import { JetView } from "/node_modules/webix-jet/dist/jet.mjs";

export default class LoginView extends JetView {
  config() {
    return {
      rows: [
        { template: "NEON", type: "header" },
        {
          cols: [
            {},
            {
              view: "form",
              width: 350,
              elements: [
                {
                  view: "text",
                  label: "Email",
                },
                {
                  view: "text",
                  type: "password",
                  label: "Password",
                },
                {
                  view: "button",
                  value: "Login",
                  css: "webix_primary",
                  click: () => {
                    this.show("dashboard");
                  },
                },
              ],
            },
            {},
          ],
        },
        {},
      ],
    };
  }
}
