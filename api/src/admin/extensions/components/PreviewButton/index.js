import React from "react";
import { Button } from "@strapi/design-system/Button";
import Eye from "@strapi/icons/Eye";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";

const PreviewButton = () => {
  const { modifiedData, layout } = useCMEditViewDataManager();
  const bannedApiID = ["category"];

  if (
    bannedApiID.includes(layout.apiID) ||
    modifiedData.publishedAt ||
    !modifiedData.createdAt
  ) {
    return null;
  }

  if (
    !process.env.STRAPI_ADMIN_CLIENT_URL ||
    !process.env.STRAPI_ADMIN_CLIENT_PREVIEW_SECRET
  ) {
    return null;
  }

  const handlePreview = () => {
    const previewUrl = `${process.env.STRAPI_ADMIN_CLIENT_URL}/api/preview?secret=${process.env.STRAPI_ADMIN_CLIENT_PREVIEW_SECRET}&slug=${modifiedData.slug}&locale=${modifiedData.locale}&apiID=${layout.apiID}&kind=${layout.kind}`;

    window.open(previewUrl, "_blank").focus();
  };

  return (
    <Button variant="secondary" startIcon={<Eye />} onClick={handlePreview}>
      Preview
    </Button>
  );
};

export default PreviewButton;
