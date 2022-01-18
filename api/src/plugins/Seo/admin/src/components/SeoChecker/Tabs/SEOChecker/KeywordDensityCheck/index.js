import React, { useState } from 'react';

import _ from 'lodash';

import {
  Accordion,
  AccordionToggle,
  AccordionContent,
  AccordionGroup,
} from '@strapi/design-system/Accordion';

import { Box } from '@strapi/design-system/Box';
import { Icon } from '@strapi/design-system/Icon';
import Dot from '@strapi/icons/Dot';

const SEOChecker = ({ modifiedData, richTextFields }) => {
  const [expanded, setExpanded] = useState(false);
  const keywords = _.get(modifiedData, 'seo.keywords');
  
  let counter = 0

  // TODO count

  if (keywords) {
    const keywordsArray = keywords.split(',');
    let check = '';
    if (keywordsArray.length === 0) {
      check = 'danger';
    } else if (keywordsArray.length <= 1) {
      check = 'neutral';
    } else {
      check = 'success';
    }

    return (
      <AccordionGroup label="Label">
        <Accordion
          expanded={expanded}
          toggle={() => setExpanded((s) => !s)}
          id="acc-1"
          size="S"
        >
          <AccordionToggle
            title="Keyword Density"
            togglePosition="left"
            startIcon={
              <Icon
                aria-hidden={true}
                colors={(theme) => ({
                  rect: {
                    fill: _.get(theme, `colors.${check}600`),
                  },
                })}
                as={Dot}
              />
            }
          />
          <AccordionContent>
            <Box padding={3}>My name is John Duff</Box>
          </AccordionContent>
        </Accordion>
      </AccordionGroup>
    );
  }

  return <></>;
};

export default SEOChecker;
