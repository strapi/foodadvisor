import React, { useState } from 'react';

import {
  ModalLayout,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from '@strapi/design-system/ModalLayout';

import { Button } from '@strapi/design-system/Button';
import { Typography } from '@strapi/design-system/Typography';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';

import SeoTabs from '../Tabs';

import _ from 'lodash';

const SeoChecker = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { allLayoutData, modifiedData } = useCMEditViewDataManager();

  const contentType = allLayoutData.contentType;
  const components = allLayoutData.components;

  if (modifiedData.hasOwnProperty('seo')) {
    return (
      <>
        <Button onClick={() => setIsVisible((prev) => !prev)}>SEO</Button>
        {isVisible && (
          <ModalLayout
            onClose={() => setIsVisible((prev) => !prev)}
            labelledBy="title"
          >
            <ModalHeader>
              <Typography
                fontWeight="bold"
                textColor="neutral800"
                as="h2"
                id="title"
              >
                Title
              </Typography>
            </ModalHeader>
            <ModalBody>
              <SeoTabs
                modifiedData={modifiedData}
                components={components}
                contentType={contentType}
              />
            </ModalBody>
            <ModalFooter
              startActions={
                <Button
                  onClick={() => setIsVisible((prev) => !prev)}
                  variant="tertiary"
                >
                  Cancel
                </Button>
              }
            />
          </ModalLayout>
        )}
      </>
    );
  }
  return <></>;
};

export default SeoChecker;
