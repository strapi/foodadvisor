import DraftFilterButton from "./extensions/components/DraftFilterButton";
import PreviewButton from "./extensions/components/PreviewButton";

export default {
  config: {
    locales: ["fr"],
    translations: {
      fr: {
        "components.DraftFilterButton.show-drafts": "Afficher les drafts",
        "components.DraftFilterButton.hide-drafts":
          "Ne pas afficher les drafts",
      },
      en: {
        "components.DraftFilterButton.show-drafts": "Show drafts",
        "components.DraftFilterButton.hide-drafts": "Hide drafts",
      },
    },
  },
  bootstrap(app) {
    app.injectContentManagerComponent("editView", "right-links", {
      name: "my-plugin-my-compo",
      Component: PreviewButton,
    });
    app.injectContentManagerComponent("listView", "actions", {
      name: "my-plugin-my-compo",
      Component: DraftFilterButton,
    });
  },
};
