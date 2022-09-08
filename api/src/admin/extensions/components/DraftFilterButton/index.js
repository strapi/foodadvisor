import React, { useEffect, useState } from 'react';
import { Button } from '@strapi/design-system/Button';
import Write from '@strapi/icons/Write';
import { useQueryParams, auth } from '@strapi/helper-plugin';
import { useIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';

const ReviewContent = () => {
  const { formatMessage } = useIntl();
  const [me, setMe] = useState({});

  const [{ query }, setQuery] = useQueryParams();
  const filters = query.filters?.$and || [];
  const hasPublicationStateFilter = filters.find(
    (filter) => filter.publicationState
  );
  const hasPublishFilter = filters.find((filter) => filter.publishedAt);
  const hasPreviewFilter =
    hasPublicationStateFilter !== undefined && hasPublishFilter !== undefined;

  const validPathNames = [
    '/content-manager/collectionType/api::article.article',
  ];
  let displayButton = validPathNames.includes(useLocation().pathname);

  useEffect(async () => {
    const jwtToken = auth.getToken();

    const baseURL = process.env.BACKEND_URL || 'http://localhost:1337';

    const res = await fetch(`${baseURL}/admin/users/me?populate=role`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    const data = await res.json();
    setMe(data.data);
  }, []);

  const handleClick = () => {
    if (hasPreviewFilter) {
      const nextFilters = filters.filter((filter) => {
        const [filterName] = Object.keys(filter);

        return (
          filterName !== 'publicationState' && filterName !== 'publishedAt'
        );
      });

      setQuery({ filters: { $and: nextFilters }, page: 1 });

      return;
    }

    const nextFilters = filters.slice();

    // If this is an Editor
    if (me.roles.filter((e) => e.name === 'Editor').length > 0) {
      nextFilters.push({
        publicationState: { $eq: 'In review' },
      });
    } else {
      nextFilters.push({
        publicationState: { $eq: 'Changes requested' },
      });
    }

    nextFilters.push({
      publishedAt: { $null: true },
    });

    setQuery({ filters: { $and: nextFilters }, page: 1 });
  };

  let content = {
    id: 'components.DraftFilterButton.hide-to-review',
    defaultMessage: 'Show draft',
  };

  if (me.roles) {
    if (me.roles.filter((e) => e.name === 'Editor').length > 0) {
      if (hasPreviewFilter) {
        content = {
          id: 'components.DraftFilterButton.hide-to-review',
          defaultMessage: 'Hide content to review',
        };
      } else {
        content = {
          id: 'components.DraftFilterButton.show-to-review',
          defaultMessage: 'Show content to review',
        };
      }
    } else if (me.roles.filter((e) => e.name === 'Author').length > 0) {
      if (hasPreviewFilter) {
        content = {
          id: 'components.DraftFilterButton.hide-to-change',
          defaultMessage: 'Hide content to change',
        };
      } else {
        content = {
          id: 'components.DraftFilterButton.show-to-change',
          defaultMessage: 'Show content to change',
        };
      }
    } else {
      displayButton = false
    }
  }

  if (displayButton) {
    return (
      <Button
        variant="secondary"
        startIcon={<Write />}
        onClick={handleClick}
      >
        {formatMessage(content)}
      </Button>
    );
  }
  return <></>;
};

export default ReviewContent;
