import React from "react";
import { Button } from "@strapi/design-system/Button";
import Write from "@strapi/icons/Write";
import { useQueryParams } from "@strapi/helper-plugin";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";

const ReviewContent = () => {
  const { formatMessage } = useIntl();
  const [{ query }, setQuery] = useQueryParams();
  const filters = query.filters?.$and || [];
  const hasReadyFilter = filters.find((filter) => filter.ready);
  const hasPublishFilter = filters.find((filter) => filter.publishedAt);
  const hasPreviewFilter =
    hasReadyFilter !== undefined && hasPublishFilter !== undefined;
  const validPathNames = [
    "/content-manager/collectionType/api::article.article",
    "/content-manager/collectionType/api::restaurant.restaurant",
    "/content-manager/collectionType/api::page.page",
  ];
  const displayButton = validPathNames.includes(useLocation().pathname);

  const handleClick = () => {
    if (hasPreviewFilter) {
      const nextFilters = filters.filter((filter) => {
        const [filterName] = Object.keys(filter);

        return filterName !== "ready" && filterName !== "publishedAt";
      });

      setQuery({ filters: { $and: nextFilters }, page: 1 });

      return;
    }

    const nextFilters = filters.slice();

    nextFilters.push({
      ready: { $eq: true },
    });
    nextFilters.push({
      publishedAt: { $null: true },
    });

    setQuery({ filters: { $and: nextFilters }, page: 1 });
  };

  const content = hasPreviewFilter
    ? {
        id: "components.DraftFilterButton.hide-drafts",
        defaultMessage: "Hide drafts",
      }
    : {
        id: "components.DraftFilterButton.show-drafts",
        defaultMessage: "Show drafts",
      };

  if (displayButton) {
    return (
      <Button variant="secondary" startIcon={<Write />} onClick={handleClick}>
        {formatMessage(content)}
      </Button>
    );
  }
  return <></>;
};

export default ReviewContent;
