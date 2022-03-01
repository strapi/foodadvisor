import React from "react";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";

import { Textarea } from "@strapi/design-system/Textarea";

const InternalComment = () => {
  const { modifiedData } = useCMEditViewDataManager();

  return (
    <>
      {modifiedData.comment && (
        <Textarea
          disabled
          placeholder="This is a content placeholder"
          label="Comments"
          name="content"
        >
          {modifiedData.comment}
        </Textarea>
      )}
    </>
  );
};

export default InternalComment;
