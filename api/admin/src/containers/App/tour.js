import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import ReactTour from 'reactour'

const Tour = withRouter(
  ({ isOpen, closeTour, location: { pathname }, history }) => {

    console.log(pathname);
    const steps = []
    if (pathname === "/") {
      steps.push(
        {
          selector: '.app',
          content: () => (
            <div>
            <h1>Hi! 👋 </h1><br />
              <h4>Welcome to the official demo of Strapi: <strong>Foodadvisor!</strong></h4><br />
              What about following this little guided tour to learn more about our product? Ready? <strong>Let's go!</strong><br />
              (Use arrow keys to change steps)
            </div>
          )
        },
        {
          selector: '.app',
          content: () => (
            <div>
            <h1>Homepage</h1><br />
              This is the homepage of Strapi.<br />
              Let's see what you can do here.
            </div>
          )
        },
        {
          selector: '#leftMenu',
          content: () => (
            <div>
            <h1>Left Menu</h1><br />
              This menu will always be present in the admin.<br />
              It will allow you to browse the different parts of your project.
            </div>
          )
        },
        {
          selector: '[data-tut="Categories"]',
          content: () => (
            <div>
            <h1>Collection Types</h1><br />
              First of all, you have your collection types.<br />
              You can create them in the <strong>Content Types Builder</strong>.<br />
              It lets you define the structure of you content. A collection type contains multiple fields like <strong>Text</strong>, <strong>RichText</strong>, <strong>Number</strong>, <strong>JSON</strong>, <strong>Media</strong> etc...
            </div>
          )
        },
        {
          selector: '[data-tut="Footer"]',
          content: () => (
            <div>
            <h1>Single Types</h1><br />
              A single type <strong>facilitates content management</strong>.<br />
              Handy to manage content like a homepage, an About us page, or any other type of content that is not part of a collection.
            </div>
          )
        },
        {
          selector: '[data-tut="Content-Types Builder"]',
          content: () => (
            <div>
            <h1>Content-Types Builder</h1><br />
              This is where you create your <strong>collection types</strong>, <strong>single types</strong> and <strong>components</strong>.
            </div>
          )
        },
        {
          selector: '[data-tut="Content-Types Builder"]',
          content: () => (
            <div>
              <h1>IMPORTANT</h1><br />
              The <strong>creation</strong> and <strong>modification</strong> in the builder is <strong>not possible on production environment</strong> except here in this demo.
            </div>
          )
        },
        {
          selector: '[data-tut="Documentation"]',
          content: () => (
            <div>
              <h1>Documentation Plugin</h1><br />
              The documentation plugin takes out most of your pain to generate your documentation. This plugin uses <strong>SWAGGER UI</strong> to visualize your API's documentation.
            </div>
          )
        },
        {
          selector: '[data-tut="Media Library"]',
          content: () => (
            <div>
            <h1>Media Library</h1><br />
              The media library allows you to store your <strong>images</strong>, <strong>videos</strong> and <strong>files</strong> in your Strapi admin panel with many ways to visualize and manage them.
            </div>
          )
        },
        {
          selector: '[data-tut="app.components.LeftMenuLinkContainer.installNewPlugin"]',
          content: () => (
            <div>
            <h1>Marketplace</h1><br />
            This is the place where you can find <strong>plugins to install</strong> on your project.
            </div>
          )
        },
        {
          selector: '[data-tut="app.components.LeftMenuLinkContainer.listPlugins"]',
          content: () => (
            <div>
            <h1>Installed plugins</h1><br />
            This is the list of the <strong>installed plugins</strong> on your project.
            </div>
          )
        },
        {
          selector: '[data-tut="app.components.LeftMenuLinkContainer.settings"]',
          content: () => (
            <div>
            <h1>Settings</h1><br />
            General settings of your project. You can manage:
            <ul>
              <li>
                Global settings
                <ul>
                  <li>
                    Media Library
                  </li>
                  <li>
                    Webhooks
                  </li>
                </ul>
              </li>
              <li>
                Administration panel
                <ul>
                  <li>
                    Roles
                  </li>
                  <li>
                    Users
                  </li>
                </ul>
              </li>
              <li>
                Users & Permissions plugin
                <ul>
                  <li>
                    Roles & Permission
                  </li>
                  <li>
                    Providers
                  </li>
                  <li>
                    Email templates
                  </li>
                  <li>
                    Advanced settings
                  </li>
                </ul>
              </li>
            </ul>
            </div>
          )
        },
        {
          selector: '[data-tut="Content-Types Builder"]',
          content: () => (
            <div>
            <h1>Create a collection type</h1><br />
            Let's get started by creating a <strong>collection type</strong> in the <strong>Content Types Builder</strong>!<br />
            We are going to create a <strong>blog</strong> section for our project.
            </div>
          )
        },
      )
    }
    else if (pathname === "/plugins/content-type-builder" || pathname === "/plugins/content-type-builder/content-types/application::category.category") {
      steps.push(
        {
          selector: '.app',
          content: () => (
            <div>
            <h1>Create a collection type</h1><br />
            Let's get started by creating a <strong>collection type</strong> in the <strong>Content Types Builder</strong>!<br />
            We are going to create a <strong>blog</strong> section for our project.
            </div>
          )
        }
      )
    }
    if (pathname !== "/auth/login") {
      return (
        <ReactTour
          steps={steps}
          isOpen={isOpen}
          onRequestClose={closeTour}
          update={pathname}
        />
      );
    }
    else {
      return <div></div>;
    }
  }
);

export default Tour;
