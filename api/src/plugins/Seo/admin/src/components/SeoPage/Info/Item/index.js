import React from 'react';

import {
  Card,
  CardBody,
  CardContent,
  CardTitle,
} from '@strapi/design-system/Card';

import { Flex } from '@strapi/design-system/Flex';
import { LinkButton } from '@strapi/design-system/LinkButton';

import Plus from '@strapi/icons/Plus';
import Check from '@strapi/icons/Check';
import SingleType from '@strapi/icons/SingleType';
import CollectionType from '@strapi/icons/CollectionType';

const Item = ({ item }) => {

  return (
    <Card id="fourth">
      <CardBody>
        {item.kind === 'collectionType' ? <CollectionType /> : <SingleType />}
        <CardContent paddingLeft={2}>
          <CardTitle>{item.globalId}</CardTitle>
        </CardContent>
        {item.seo ? (
          <LinkButton disabled startIcon={<Check />}>
            Added
          </LinkButton>
        ) : (
          <Flex inline={true} alignItems="right" justifyContent="right">
            <LinkButton
              startIcon={<Plus />}
              to={`/plugins/content-type-builder/content-types/${item.uid}`}
            >
              Add
            </LinkButton>
          </Flex>
        )}
      </CardBody>
    </Card>
  );
};

export default Item;
