import React from "react";
import { Button } from "@strapi/design-system/Button";
import Twitter from "@strapi/icons/Twitter";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useIntl } from "react-intl";

const TweetButton = () => {
  const { formatMessage } = useIntl();
  const { modifiedData, layout } = useCMEditViewDataManager();
  const allowedTypes = ["restaurant", "article"];

  if (!allowedTypes.includes(layout.apiID)) {
    return <></>;
  }

  const base = layout.apiID == "restaurant" ? "restaurants" : "blog";

  const handleTweet = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${`${encodeURIComponent(
      modifiedData.seo.metaTitle
    )} (powered by Strapi)`}&url=${
      process.env.STRAPI_ADMIN_CLIENT_URL
    }/${base}/${modifiedData.slug}`;

    window.open(tweetUrl, "_blank").focus();
  };

  const content = {
    id: "components.TweetButton.button",
    defaultMessage: "Share on Twitter",
  };

  return (
    <Button variant="secondary" startIcon={<Twitter />} onClick={handleTweet}>
      {formatMessage(content)}
    </Button>
  );
};

export default TweetButton;
