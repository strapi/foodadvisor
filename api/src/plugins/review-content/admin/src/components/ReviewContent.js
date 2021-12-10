import React from "react";
import { Button } from "@strapi/design-system/Button";
import Write from "@strapi/icons/Write";
import { useQueryParams } from "@strapi/helper-plugin";
import { useHistory } from "react-router-dom";

const ReviewContent = () => {
  const rawQuery = useQueryParams()[0].rawQuery;
  const history = useHistory();

  const handleClick = () => {
    const param =
      "&filters[$and][0][ready][$eq]=true&filters[$and][1][publish_at][$null]=true";
    if (!rawQuery.includes(param)) {
      history.push(`${rawQuery}${param}`);
    }
  };

  return (
    <Button variant="secondary" startIcon={<Write />} onClick={handleClick}>
      Show Drafts
    </Button>
  );
};

export default ReviewContent;
