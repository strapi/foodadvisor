/*
 *
 * HomePage
 *
 */

import React, { memo, useEffect, useState } from 'react';

import { LoadingIndicatorPage } from '@strapi/helper-plugin';

import EmptyComponentLayout from '../../components/SeoPage/Info/EmptyComponentLayout';

import Header from '../../components/SeoPage/Header';
import Info from '../../components/SeoPage/Info';

import { fetchSeoComponent, fetchContentTypes } from '../../utils/api';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentTypes, setContentTypes] = useState(null);
  const [seoComponent, setSeoComponent] = useState(null);
  const [shouldEffect, setShouldEffect] = useState(false);

  // Fetching the SEO component & Content-Types
  useEffect(async () => {
    setSeoComponent(await fetchSeoComponent());
    setContentTypes(await fetchContentTypes());
    setIsLoading(false);
  }, [shouldEffect]);

  // Displaying the LoadingIndicatorPage while it fetches the data
  if (isLoading) {
    return <LoadingIndicatorPage />;
  }

  // No SEO component => Return x component
  if (!seoComponent) {
    return (
      <>
        <Header seoComponent={seoComponent} />
        <EmptyComponentLayout setShouldEffect={setShouldEffect} />
      </>
    );
  }

  return (
    <>
      <Header seoComponent={seoComponent} />
      <Info contentTypes={contentTypes} />
    </>
  );
};

export default memo(HomePage);
