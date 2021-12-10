import PreviewButton from "./extensions/components/PreviewButton";

export default {
  config: {
    locales: ["fr"],
  },
  bootstrap(app) {
    app.injectContentManagerComponent("editView", "right-links", {
      name: "my-plugin-my-compo",
      Component: PreviewButton,
    });
  },
};
