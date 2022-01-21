import React from 'react';

import { Box } from '@strapi/design-system/Box';
import { LinkButton } from '@strapi/design-system/LinkButton';
import { BaseHeaderLayout } from '@strapi/design-system/Layout';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../utils';

import Pencil from '@strapi/icons/Pencil';

const Header = (seoComponent) => {
  const { formatMessage } = useIntl();
  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        secondaryAction={
          seoComponent ? null : (
            <LinkButton
              variant="tertiary"
              to="/plugins/content-type-builder/component-categories/shared/shared.seo"
              startIcon={<Pencil />}
            >
              {formatMessage({
                id: getTrad('SEOPage.header.button.edit-component'),
                defaultMessage: 'Edit SEO component',
              })}
            </LinkButton>
          )
        }
        title={formatMessage({
          id: getTrad('SEOPage.header.title'),
          defaultMessage: 'SEO',
        })}
        subtitle={formatMessage({
          id: getTrad('SEOPage.header.subtitle'),
          defaultMessage: 'Optimize your content to be SEO friendly',
        })}
        as="h2"
      />
    </Box>
  );
};

export default Header;
