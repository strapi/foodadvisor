import React, { useState } from 'react';

const { format } = require('date-fns');

import { Box } from '@strapi/design-system/Box';
import {
  Accordion,
  AccordionToggle,
  AccordionContent,
} from '@strapi/design-system/Accordion';
import { Typography } from '@strapi/design-system/Typography';

import Calendar from '@strapi/icons/Calendar';
import PaperPlane from '@strapi/icons/PaperPlane';
import Cross from '@strapi/icons/Cross';
import ChartBubble from '@strapi/icons/ChartBubble';

const CustomAccordion = ({ stage }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Accordion
      expanded={expanded}
      onToggle={() => setExpanded((s) => !s)}
      id="acc-1"
      size="S"
    >
      <AccordionToggle
        startIcon={
          {
            'In review': <ChartBubble aria-hidden={true} />,
            'Changes requested': <Cross aria-hidden={true} />,
            'Publication scheduled': <Calendar aria-hidden={true} />,
            Published: <PaperPlane aria-hidden={true} />,
          }[stage.name]
        }
        title={stage.name + ` (${format(new Date(stage.date), 'MM-dd-yyyy')})`}
        togglePosition="right"
      />
      <AccordionContent>
        <Box padding={3}>
          <Typography>{stage.message}</Typography>
        </Box>
      </AccordionContent>
    </Accordion>
  );
};

export default CustomAccordion;
