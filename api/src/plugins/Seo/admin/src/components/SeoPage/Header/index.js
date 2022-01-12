import React from 'react';

import { Box } from '@strapi/design-system/Box';
import { LinkButton } from '@strapi/design-system/LinkButton';
import { BaseHeaderLayout } from '@strapi/design-system/Layout';

import Pencil from '@strapi/icons/Pencil';

const Header = (seoComponent) => {
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
              Edit component
            </LinkButton>
          )
        }
        title="SEO"
        subtitle="Manage the SEO of your content"
        as="h2"
      />
    </Box>
  );
};

export default Header;
