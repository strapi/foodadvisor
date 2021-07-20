import React from 'react';

const tour = {
  admin: {
    steps: [
      {
        selector: 'a[href="/admin"]',
        content: () => (
          <div>
            <h1>Hi! 👋 </h1>
            <br />
            <h4>
              Welcome to the official demo of Strapi: <strong>Foodadvisor!</strong>
            </h4>
            <br />
            What about following this little guided tour to learn more about our product? Ready?{' '}
            <strong>Let's go!</strong>
            <br />
            <br />
            (Use arrow keys to change steps)
          </div>
        ),
      },
      {
        selector: 'a[href="/admin/plugins/content-type-builder"]',
        content: () => (
          <div>
            <h1>Content Types Builder</h1>
            <br />
            This is the most important tool, the one that allows you to{' '}
            <strong>create the architecture of your project</strong>.<br />
            <br />
            <ul>
              <li>
                <strong>Click</strong> on the link to be redirected to the Content Types Builder.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  'content-type-builder': {
    steps: [
      {
        selector: 'a[href="/admin"]',
        content: () => (
          <div>
            <h1>Content Types Builder</h1>
            <br />
            Welcome to the CTB! This is where you create your <strong>
              collection types
            </strong>, <strong>single types</strong> and <strong>components</strong>.<br />
            <br />
            Let's see how it's working here!
          </div>
        ),
      },
      {
        selector: 'div.col-md-3',
        content: () => (
          <div>
            <h1>Manage your Content Types</h1>
            <br />
            In this sidebar you can browse your <strong>collection types</strong>,{' '}
            <strong>single types</strong>, <strong>components</strong> and also create new ones!
            <br />
            <br />
            Let's see one specific collection type!
          </div>
        ),
      },
      {
        selector:
          'a[href="/admin/plugins/content-type-builder/content-types/application::article.article"]',
        content: () => (
          <div>
            <h1>Article Collection Type</h1>
            <br />
            <ul>
              <li>
                <strong>Click</strong> on this collection type to manage it.
              </li>
            </ul>
          </div>
        ),
      },
      {
        selector: 'div.col-md-9.content',
        content: () => (
          <div>
            <h1>Manage your Collection Types</h1>
            <br />
            You can observe all the fields that make up this collection type like{' '}
            <strong>text</strong>, <strong>rich text</strong>, <strong>enumeration</strong>,{' '}
            <strong>relations</strong> etc...
          </div>
        ),
      },
      {
        selector:
          'a[href="/admin/plugins/content-type-builder/content-types/application::blog-page.blog-page"]',
        content: () => (
          <div>
            <h1>Single type</h1>
            <br />
            Let's see what your single type looks like.
            <br />
            <br />
            <strong>Reminder:</strong> Single types are handy to manage content like a Navbar, the
            footer or any other type of content that is not part of a collection.
            <br />
            <br />
            <ul>
              <li>
                <strong>Click</strong> on the BlogPage single type.
              </li>
            </ul>
          </div>
        ),
      },
      {
        selector: 'div.col-md-9.content',
        content: () => (
          <div>
            <h1>Single type</h1>
            <br />
            You can see for example that it contains an <strong>seo</strong> component which itself
            contains a <strong>meta</strong> component.
            <br />
          </div>
        ),
      },
      {
        selector: 'div.col-md-9.content',
        content: () => (
          <div>
            <h1>Components</h1>
            <br />
            Components are very useful if you want to have the same fields for several collection
            types or single types. Instead of repeating yourself, you can{' '}
            <strong>
              create a component and reuse it in different collection types/single types
            </strong>
            .
          </div>
        ),
      },
      {
        selector: 'body',
        content: () => (
          <div>
            <h1>Content Manager</h1>
            <br />
            Creating the structure of our content is nice but what about seeing the actual content
            for each collection type now?
            <br />
          </div>
        ),
      },
      {
        selector:
          'a[href="/admin/plugins/content-manager/collectionType/application::article.article?page=1&pageSize=10&_sort=name:ASC&plugins[i18n][locale]=en"]',
        content: () => (
          <div>
            <h1>Content Manager</h1>
            <br />
            Let's browse our articles!
            <br />
            <br />
            <ul>
              <li>
                <strong>Click</strong> on the Article collection type.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  'content-manager': {
    steps: [
      {
        selector: 'body',
        content: () => (
          <div>
            <h1>Content</h1>
            <br />
            <strong>Great!</strong> Here is a list of content that has been created.
            <br />
            You can do a lot of things here:
          </div>
        ),
      },
      {
        selector: 'button[style*="padding-left: 15px; padding-right: 15px; font-weight: 600;"]',
        content: () => (
          <div>
            <h1>Create a new entry</h1>
            <br />
            You can simply create a new entry by filling the fields you created for this collection
            type.
            <br />
            <strong>Important:</strong> This is a way for your to directly create data from the
            admin with a UI but you can definitely create data{' '}
            <a
              target="_blank"
              href="https://strapi.io/documentation/developer-docs/latest/content-api/api-endpoints.html#endpoints"
            >
              using the API
            </a>{' '}
            too.
          </div>
        ),
      },
      {
        selector: 'div[style*="margin-bottom: 5px;"]',
        content: () => (
          <div>
            <h1>Filter & Display</h1>
            <br />
            <strong>Left:</strong> Filter your data to only find relevant content depending on some
            fields, relations etc...
            <br />
            <strong>Right:</strong> Display your content depending on a locale & configure what
            fields and relations you want to see in this view.
          </div>
        ),
      },
      {
        selector: 'thead',
        content: () => (
          <div>
            <h1>Sort</h1>
            <br />
            You can sort your content depending on the fields you want by clicking on it.
            <br />
          </div>
        ),
      },
      {
        selector: 'body',
        content: () => (
          <div>
            <h1>Content Manager</h1>
            <br />
            <br />
            <ul>
              <li>
                <strong>Click</strong> on any entry to see more details about it.
              </li>
            </ul>
          </div>
        ),
      },
      {
        selector: 'div.col-md-12.col-lg-9',
        content: () => (
          <div>
            <h1>Content Manager</h1>
            <br />
            On the left side you can see all the fields for your content.
          </div>
        ),
      },
      {
        selector: 'div.col-md-12.col-lg-3',
        content: () => (
          <div>
            <h1>Content Manager</h1>
            <br />
            On the right side you can see some informations about the content but also the{' '}
            <strong>relations</strong> it has.
            <br />
            On the bottom you can manage the view, the model and delete the content.
          </div>
        ),
      },
      {
        selector: 'div.col-md-12.col-lg-3',
        content: () => (
          <div>
            <h1>Customisation</h1>
            <br />
            We added some customization for this app. In fact you can preview you content by
            pressing the preview button that will appear{' '}
            <strong>before publishing your content</strong>.
          </div>
        ),
      },
      {
        selector: 'div.col-md-12.col-lg-3',
        content: () => (
          <div>
            <h1>Internationalization</h1>
            <br />
            The Internationalization (i18n) feature has been activated for this collection-type
            (Content-Types Builder - Edit Article - Advanced settings), which allows you to
            create the same entry but for a different locale.
            <br />
            The one by default here is <strong>English (en)</strong> but a french version of this
            entry also exists.
            <br />
            <br />
            <ul>
              <li>Feel free to exit the guided tour and browse the entry in french.</li>
            </ul>
          </div>
        ),
      },
      {
        selector: 'div.col-md-12.col-lg-3',
        content: () => (
          <div>
            <h1>Internationalization</h1>
            <br />
            Create all your locales in the global settings of this application.
            <br />
          </div>
        ),
      },
      {
        selector:
          'a[href="/admin/plugins/content-manager/collectionType/application::category.category?page=1&pageSize=10&_sort=name:ASC"]',
        content: () => (
          <div>
            <h1>Collection Types</h1>
            <br />
            You can find all the other <strong>collection types</strong> on the main navigation
            everywhere in the admin panel.
            <br />
          </div>
        ),
      },
      {
        selector: 'a[href="/admin/plugins/documentation"]',
        content: () => (
          <div>
            <h1>Documentation Plugin</h1>
            <br />
            This project includes the documentation plugin that takes out most of your pain to
            generate your documentation.
            <br />
            This plugin uses <strong>SWAGGER UI</strong> to visualize your API's documentation.
          </div>
        ),
      },
      {
        selector: 'a[href="/admin/plugins/upload"]',
        content: () => (
          <div>
            <h1>Media Library</h1>
            <br />
            The media library allows you to store your <strong>images</strong>,{' '}
            <strong>videos</strong> and <strong>files</strong> in your Strapi admin panel with many
            ways to visualize and manage them.
          </div>
        ),
      },
      {
        selector: 'a[href="/admin/marketplace"]',
        content: () => (
          <div>
            <h1>Marketplace</h1>
            <br />
            This is the place where you can find <strong>plugins to install</strong> on your
            project.
          </div>
        ),
      },
      {
        selector: 'a[href="/admin/list-plugins"]',
        content: () => (
          <div>
            <h1>Installed plugins</h1>
            <br />
            This is the list of the <strong>installed plugins</strong> on your project.
          </div>
        ),
      },
      {
        selector: 'a[href="/admin/settings"]',
        content: () => (
          <div>
            <h1>Settings</h1>
            <br />
            General settings of your project. You can find the more advanced settings of the admin
            panel such as <strong>roles</strong>, <strong>permissions</strong>,{' '}
            <strong>webhooks</strong> etc...
          </div>
        ),
      },
      {
        selector: 'a[href="/admin"]',
        content: () => (
          <div>
            <h1>API</h1>
            <br />I think it's time to let you play with this demo! But first you need to at least
            view your content <strong>through the API</strong>.<br />
            <br />
            By default the permission to fetch its content via the API on a Strapi project is{' '}
            <strong>disabled</strong> inside <strong>Settings - Roles & Permission - Public</strong>{' '}
            but here it is already enabled.
            <br />
            <br />
            <ul>
              <li>
                <strong>Open</strong> a new tab
              </li>
              <li>
                <strong>Add /restaurants</strong> just after the host of your demo url (ex:
                https://api-4p93j.strapidemo.com<strong>/restaurants</strong>) to see all your
                restaurants!
              </li>
            </ul>
          </div>
        ),
      },
      {
        selector: 'a[href="/admin"]',
        content: () => (
          <div>
            <h1>Challenge 💪</h1>
            <br />
            What do you say about a small challenge to allow you to really master Strapi?
            <br />
            <br />I suggest you to create a <strong>dish</strong> collection type containing the
            fields: name (<strong>text</strong>), ingredients (<strong>enumeration</strong>), price
            (<strong>number - decimal</strong>) and a relation linking to your Restaurant collection
            type with the following expression: <strong>Restaurants has many dishes</strong>.<br />
            <br />
            So you will be able to add dishes to your restaurants!
          </div>
        ),
      },
      {
        selector: 'a[href="/admin"]',
        content: () => (
          <div>
            <h1>Thanks 👋</h1>
            <br />
            However, thank you for following this guided tour. We hope that it was useful for you to
            understand how Strapi works!
            <br />
            If you want to create <strong>your own project on your local machine</strong>:<br />
            <br />
            <code>npx create-strapi-app my-project --quickstart</code>
          </div>
        ),
      },
    ],
  },
};

export default tour;
