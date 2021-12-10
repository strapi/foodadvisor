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
        "components.PreviewButton.button": "Prévisualiser",
      },
      en: {
        "components.DraftFilterButton.show-drafts": "Show drafts",
        "components.DraftFilterButton.hide-drafts": "Hide drafts",
        "components.PreviewButton.button": "Preview",
      },
    },
  },
  bootstrap(app) {
    app.injectContentManagerComponent("listView", "actions", {
      name: "DraftFilterButton",
      Component: DraftFilterButton,
    });
    app.injectContentManagerComponent("editView", "right-links", {
      name: "PreviewButton",
      Component: PreviewButton,
    });
  },
};
