import React from 'react';
import styled from 'styled-components';
import { useContentManagerEditViewDataManager } from 'strapi-helper-plugin';
import EyeIcon from './view.svg';

const StyledExternalLink = styled.a`
  display: block;
  color: #333740;
  width: 100%;
  text-decoration: none;
  span,
  i,
  svg {
    color: #333740;
    width: 13px;
    height: 12px;
    margin-right: 10px;
    vertical-align: 0;
  }
  span {
    font-size: 13px;
  }
  i {
    display: inline-block;
    background-image: url(${EyeIcon});
    background-size: contain;
  }
  &:hover {
    text-decoration: none;
    span,
    i,
    svg {
      color: #007eff;
    }
  }
`;

const ExternalLink = () => {
  const { modifiedData, layout } = useContentManagerEditViewDataManager();
  if (modifiedData.published_at) {
    return null;
  }

  if (!modifiedData.slug) {
    return null;
  }

  if (!CLIENT_URL || !CLIENT_PREVIEW_SECRET) {
    return null;
  }

  return (
    <li>
      <StyledExternalLink
        href={`${CLIENT_URL}/api/preview?secret=${CLIENT_PREVIEW_SECRET}&slug=${modifiedData.slug}&locale=${modifiedData.locale}&apiID=${layout.apiID}&kind=${layout.kind}`}
        target="_blank"
        rel="noopener noreferrer"
        title="page preview"
      >
        <i />
        Preview
      </StyledExternalLink>
    </li>
  );
};

export default ExternalLink;
