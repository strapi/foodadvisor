/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { get, upperFirst } from 'lodash';
import { auth, LoadingIndicatorPage } from 'strapi-helper-plugin';
import PageTitle from '../../components/PageTitle';
import { useModels } from '../../hooks';
import { Button } from '@buffetjs/core';


import useFetch from './hooks';
import { ALink, Block, Container, LinkWrapper, P, Wave, Separator } from './components';
import BlogPost from './BlogPost';
import SocialLink from './SocialLink';

// import Tour from 'reactour'
//
// const steps = [
//   {
//     selector: '.app',
//     content: () => (
//       <div>
//         Welcome to the official demo of Strapi: <strong>Foodadvisor!</strong><br />
//         What about following this little guided tour to learn more about our product? Ready? <strong>Let's go!</strong>
//       </div>
//     )
//   },
//   {
//     selector: '.app',
//     content: () => (
//       <div>
//         Little advice for this guided tour, you can use arrow keys to change steps, it will be easier for you ;)
//       </div>
//     )
//   },
//   {
//     selector: '[data-tut="Categories"]',
//     content: () => (
//       <div>
//         <strong>Collection types:</strong> A Collection type lets you define the structure of you content. It contains multiple fields like Text, RichText, Number, JSON, Media etc...
//       </div>
//     )
//   },
//   {
//     selector: '[data-tut="Footer"]',
//     content: () => (
//       <div>
//         <strong>Single types:</strong>  Facilitates content management. Handy to manage content like a homepage, an About us page, or any other type of content that is not part of a collection.
//       </div>
//     )
//   },
//   {
//     selector: '[data-tut="Content-Types Builder"]',
//     content: () => (
//       <div>
//         <strong>Content-Types Builder:</strong> This is where you create or update your collection types and single types. The Category collection type and the Footer single type were created inside this builder.
//       </div>
//     )
//   },
//   {
//     selector: '[data-tut="Content-Types Builder"]',
//     content: () => (
//       <div>
//       <h1>Hello</h1>
//         <strong>IMPORTANT NOTE</strong> The creation and modification in the builder is not possible on production environment except here in this demo.
//       </div>
//     )
//   },
//   {
//     selector: '[data-tut="Documentation"]',
//     content: () => (
//       <div>
//         <strong>Documentation:</strong> The documentation plugin takes out most of your pain to generate your documentation. This plugin uses SWAGGER UI to visualize your API's documentation.
//       </div>
//     )
//   },
//   {
//     selector: '[data-tut="Media Library"]',
//     content: () => (
//       <div>
//         <strong>Media Library:</strong> The media library allows you to store your images, videos and files in your Strapi admin panel with many ways to visualize and manage them.
//       </div>
//     )
//   },
//   {
//     selector: '[data-tut="app.components.LeftMenuLinkContainer.installNewPlugin"]',
//     content: () => (
//       <div>
//         <strong>Marketplace:</strong> This is the place where you can find plugins to install on your project.
//       </div>
//     )
//   },
//   {
//     selector: '[data-tut="app.components.LeftMenuLinkContainer.listPlugins"]',
//     content: () => (
//       <div>
//         <strong>Installed plugins:</strong> This is the list of the installed plugins on your project.
//       </div>
//     )
//   },
// ];

const FIRST_BLOCK_LINKS = [
  {
    link:
      'https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#_4-create-a-category-content-type',
    contentId: 'app.components.BlockLink.documentation.content',
    titleId: 'app.components.BlockLink.documentation',
  },
  {
    link: 'https://github.com/strapi/foodadvisor',
    contentId: 'app.components.BlockLink.code.content',
    titleId: 'app.components.BlockLink.code',
  },
];

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    link: 'https://github.com/strapi/strapi/',
  },
  {
    name: 'Slack',
    link: 'https://slack.strapi.io/',
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@strapi',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/strapijs',
  },
  {
    name: 'Reddit',
    link: 'https://www.reddit.com/r/Strapi/',
  },
  {
    name: 'Forum',
    link: 'https://forum.strapi.io',
  },
  {
    name: 'Academy',
    link: 'https://academy.strapi.io',
  },
];

function updateTourStatus(setIsTourOpen, status) {
  setIsTourOpen(status)
  localStorage.setItem('isTourOpen', status)
}

const HomePage = ({ history: { push } }) => {
  const [isTourOpen, setIsTourOpen] = useState(
    true || true
  );

  // const [isTourOpen, setIsTourOpen] = useState(
  //   localStorage.getItem('isTourOpen') || true
  // );

  console.log(JSON.parse(isTourOpen));

  const { error, isLoading, posts } = useFetch();
  // Temporary until we develop the menu API
  const { collectionTypes, singleTypes, isLoading: isLoadingForModels } = useModels();

  const handleClick = e => {
    e.preventDefault();

    push(
      '/plugins/content-type-builder/content-types/plugins::users-permissions.user?modalType=contentType&kind=collectionType&actionType=create&settingType=base&forTarget=contentType&headerId=content-type-builder.modalForm.contentType.header-create&header_icon_isCustom_1=false&header_icon_name_1=contentType&header_label_1=null'
    );
  };

  const hasAlreadyCreatedContentTypes = useMemo(() => {
    const filterContentTypes = contentTypes => contentTypes.filter(c => c.isDisplayed);

    return (
      filterContentTypes(collectionTypes).length > 1 || filterContentTypes(singleTypes).length > 0
    );
  }, [collectionTypes, singleTypes]);

  if (isLoadingForModels) {
    return <LoadingIndicatorPage />;
  }

  const headerId = hasAlreadyCreatedContentTypes
    ? 'HomePage.greetings'
    : 'app.components.HomePage.welcome';
  const username = get(auth.getUserInfo(), 'firstname', '');
  const linkProps = hasAlreadyCreatedContentTypes
    ? {
        id: 'app.components.HomePage.button.blog',
        href: 'https://strapi.io/blog/',
        onClick: () => {},
        type: 'blog',
        target: '_blank',
      }
    : {
        id: 'app.components.HomePage.create',
        href: '',
        onClick: handleClick,
        type: 'documentation',
      };

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <Wave />
              <FormattedMessage
                id={headerId}
                values={{
                  name: upperFirst(username),
                }}
              >
                {msg => <h2 id="mainHeader">{msg}</h2>}
              </FormattedMessage>
              {hasAlreadyCreatedContentTypes ? (
                <FormattedMessage id="app.components.HomePage.welcomeBlock.content.again">
                  {msg => <P>{msg}</P>}
                </FormattedMessage>
              ) : (
                <FormattedMessage id="HomePage.welcome.congrats">
                  {congrats => {
                    return (
                      <FormattedMessage id="HomePage.welcome.congrats.content">
                        {content => {
                          return (
                            <FormattedMessage id="HomePage.welcome.congrats.content.bold">
                              {boldContent => {
                                return (
                                  <P>
                                    <b>{congrats}</b>&nbsp;
                                    {content}&nbsp;
                                    <b>{boldContent}</b>
                                  </P>
                                );
                              }}
                            </FormattedMessage>
                          );
                        }}
                      </FormattedMessage>
                    );
                  }}
                </FormattedMessage>
              )}
              {hasAlreadyCreatedContentTypes && (
                <div style={{ marginTop: isLoading ? 60 : 50 }}>
                  {posts.map((post, index) => (
                    <BlogPost
                      {...post}
                      key={post.link}
                      isFirst={index === 0}
                      isLoading={isLoading}
                      error={error}
                    />
                  ))}
                </div>
              )}
              <FormattedMessage id={linkProps.id}>
                {msg => (
                  <ALink
                    rel="noopener noreferrer"
                    {...linkProps}
                    style={{ verticalAlign: ' bottom', marginBottom: 5 }}
                  >
                    {msg}
                  </ALink>
                )}
              </FormattedMessage>
              <Separator style={{ marginTop: 37, marginBottom: 36 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {FIRST_BLOCK_LINKS.map((data, index) => {
                  const type = index === 0 ? 'doc' : 'code';

                  return (
                    <LinkWrapper href={data.link} target="_blank" key={data.link} type={type}>
                      <FormattedMessage id={data.titleId}>
                        {title => <p className="bold">{title}</p>}
                      </FormattedMessage>
                      <FormattedMessage id={data.contentId}>
                        {content => <p>{content}</p>}
                      </FormattedMessage>
                    </LinkWrapper>
                  );
                })}
              </div>
            </Block>
          </div>

          <div className="col-md-12 col-lg-4">
            <Block style={{ paddingRight: 30, paddingBottom: 0 }}>
              <FormattedMessage id="HomePage.community">{msg => <h2>{msg}</h2>}</FormattedMessage>
              <FormattedMessage id="app.components.HomePage.community.content">
                {content => <P style={{ marginTop: 7, marginBottom: 0 }}>{content}</P>}
              </FormattedMessage>
              <FormattedMessage id="HomePage.roadmap">
                {msg => (
                  <ALink
                    rel="noopener noreferrer"
                    href="https://portal.productboard.com/strapi/1-public-roadmap/tabs/2-under-consideration"
                    target="_blank"
                  >
                    {msg}
                  </ALink>
                )}
              </FormattedMessage>

              <Separator style={{ marginTop: 18 }} />
              <div
                className="row social-wrapper"
                style={{
                  display: 'flex',
                  margin: 0,
                  marginTop: 36,
                  marginLeft: -15,
                }}
              >
                {SOCIAL_LINKS.map((value, key) => (
                  <SocialLink key={key} {...value} />
                ))}
              </div>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
