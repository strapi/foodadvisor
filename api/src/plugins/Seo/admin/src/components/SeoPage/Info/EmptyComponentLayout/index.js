import React, { useState } from 'react';

import { Box } from '@strapi/design-system/Box';
import { Flex } from '@strapi/design-system/Flex';
import { Button } from '@strapi/design-system/Button';
import { Tooltip } from '@strapi/design-system/Tooltip';
import { TextInput } from '@strapi/design-system/TextInput';
import { EmptyStateLayout } from '@strapi/design-system/EmptyStateLayout';

import { Illo } from './illo';
import { createSeoComponent } from '../../../../utils/api';
import { useAutoReloadOverlayBlocker } from '@strapi/helper-plugin';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../utils';

import Plus from '@strapi/icons/Plus';
import Information from '@strapi/icons/Information';

const EmptyComponentLayout = ({ setShouldEffect }) => {
  const { formatMessage } = useIntl();
  const [error, setError] = useState(false);
  const [content, setContent] = useState(
    'https://github.com/strapi/components'
  );
  const re = new RegExp(
    '(?:https://)github.com(/)(d*[a-zA-Z][a-zA-Z0-9]*)(/)(d*[a-zA-Z][a-zA-Z0-9]*)'
  );

  const { lockAppWithAutoreload, unlockAppWithAutoreload } =
    useAutoReloadOverlayBlocker();

  const handleError = (content) => {
    if (error) {
      return formatMessage({
        id: getTrad('SEOPage.empty-component-layout.github-error'),
        defaultMessage:
          "This GitHub repository doesn't contains shared.seo or shared.meta-social component",
      });
    }

    return re.test(content)
      ? undefined
      : formatMessage({
          id: getTrad('SEOPage.empty-component-layout.regexp-error'),
          defaultMessage: 'Please provide a valid Github repository URL',
        });
  };

  const handleClick = async () => {
    try {
      lockAppWithAutoreload();
      const data = await createSeoComponent(content);
      if (!data) setError(true);
    } catch (error) {
      console.log(error);
    } finally {
      unlockAppWithAutoreload();
      setShouldEffect(true);
    }
  };

  return (
    <Box padding={8} background="neutral100">
      <EmptyStateLayout
        icon={<Illo />}
        content={formatMessage({
          id: getTrad('SEOPage.empty-component-layout.no-component'),
          defaultMessage: "You don't have any SEO component yet",
        })}
        action={
          <Box padding={2}>
            <Flex alignItems="end">
              <Box padding={2}>
                <TextInput
                  style={{ width: '350px' }}
                  label="Github repository"
                  name="github"
                  error={handleError(content)}
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  labelAction={
                    <Tooltip
                      description={formatMessage({
                        id: getTrad(
                          'SEOPage.empty-component-layout.input.tooltip'
                        ),
                        defaultMessage:
                          'The strapi/components GitHub repository contains the default SEO component',
                      })}
                    >
                      <button
                        style={{
                          border: 'none',
                          padding: 0,
                          background: 'transparent',
                        }}
                      >
                        <Information aria-hidden={true} />
                      </button>
                    </Tooltip>
                  }
                />
              </Box>
              <Box padding={2}>
                <Button
                  size="L"
                  variant="secondary"
                  startIcon={<Plus />}
                  onClick={handleClick}
                  padding={2}
                >
                  {formatMessage({
                    id: getTrad('SEOPage.empty-component-layout.button'),
                    defaultMessage: 'Add SEO component',
                  })}
                </Button>
              </Box>
            </Flex>
          </Box>
        }
      />
    </Box>
  );
};

export default EmptyComponentLayout;
