import React from 'react';

import { useIntl } from 'react-intl';
import { getTrad } from '../../../../utils';

import { Box } from '@strapi/design-system/Box';
import { LinkButton } from '@strapi/design-system/LinkButton';
import { Typography } from '@strapi/design-system/Typography';

import Plus from '@strapi/icons/Plus';
import Check from '@strapi/icons/Check';
import SingleType from '@strapi/icons/SingleType';
import CollectionType from '@strapi/icons/CollectionType';

const Item = ({ item }) => {
  const { formatMessage } = useIntl();

  return (
    <Box padding={4} shadow="filterShadow">
      {item.kind === 'collectionType' ? <CollectionType /> : <SingleType />}
      <Typography variant="omega"> {item.globalId}</Typography>

      {item.seo ? (
        <LinkButton disabled style={{ float: 'right' }} startIcon={<Check />}>
          {formatMessage({
            id: getTrad('SEOPage.info.added'),
            defaultMessage: 'Added',
          })}
        </LinkButton>
      ) : (
        <LinkButton
          startIcon={<Plus />}
          style={{ float: 'right' }}
          to={`/plugins/content-type-builder/content-types/${item.uid}`}
        >
          {formatMessage({
            id: getTrad('SEOPage.info.add'),
            defaultMessage: 'Add',
          })}
        </LinkButton>
      )}
    </Box>
  );
};

export default Item;
