import React, { useState } from 'react';

import { useCMEditViewDataManager } from '@strapi/helper-plugin';

import { Box } from '@strapi/design-system/Box';
import { AccordionGroup } from '@strapi/design-system/Accordion';
import { Button } from '@strapi/design-system/Button';
import { Divider } from '@strapi/design-system/Divider';
import { Typography } from '@strapi/design-system/Typography';
import { EmptyStateLayout } from '@strapi/design-system/EmptyStateLayout';

import {
  ModalLayout,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from '@strapi/design-system/ModalLayout';

import CustomAccordion from './accordion';

import { Illo } from './illo';

const PublicationWorkflow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { modifiedData } = useCMEditViewDataManager();
  if (modifiedData?.publicationStages === undefined) {
    return <></>;
  }
  const stages = JSON.parse(modifiedData.publicationStages);
  return (
    <Box
      as="aside"
      aria-labelledby="additional-informations"
      background="neutral0"
      borderColor="neutral150"
      hasRadius
      paddingBottom={4}
      paddingLeft={4}
      paddingRight={4}
      paddingTop={6}
      shadow="tableShadow"
    >
      <Box>
        <Typography variant="sigma" textColor="neutral600" id="seo">
          Publication Workflow
        </Typography>
        <Box paddingTop={2} paddingBottom={4}>
          <Divider />
        </Box>

        <Button
          fullWidth
          variant="secondary"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          See workflow
        </Button>
        {isVisible && (
          <ModalLayout
            onClose={() => setIsVisible((prev) => !prev)}
            labelledBy="Publication Workflow"
          >
            <ModalHeader>
              <Typography
                fontWeight="bold"
                textColor="neutral800"
                as="h2"
                id="title"
              >
                Publication Workflow
              </Typography>
            </ModalHeader>
            <ModalBody>
              <Box padding={8} background="neutral0">
                {!stages?.stages.length > 0 && (
                  <EmptyStateLayout
                    icon={<Illo />}
                    content="There is no publication stages yet..."
                  />
                )}
                {stages?.stages.length > 0 && (
                  <AccordionGroup label="Stages">
                    {stages.stages.map((stage) => {
                      return <CustomAccordion stage={stage} />;
                    })}
                  </AccordionGroup>
                )}
              </Box>
            </ModalBody>
            <ModalFooter
              endActions={
                <>
                  <Button onClick={() => setIsVisible((prev) => !prev)}>
                    Close
                  </Button>
                </>
              }
            />
          </ModalLayout>
        )}
      </Box>
    </Box>
  );
};

export default PublicationWorkflow;
