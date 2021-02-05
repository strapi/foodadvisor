import React from 'react'

const tour = {
  'admin': {
    steps: [{
      selector: 'a[href="/admin"]',
      content: () => (
        <div>
        <h1>Hi! 👋 </h1><br />
          <h4>Welcome to the official demo of Strapi: <strong>Foodadvisor!</strong></h4><br />
          What about following this little guided tour to learn more about our product? Ready? <strong>Let's go!</strong><br /><br />
          (Use arrow keys to change steps)
        </div>
      )
    },
    {
      selector: 'body',
      content: () => (
        <div>
        <h1>Homepage</h1><br />
          This is the homepage of Strapi.<br />
          Let's focus on the most important part of it. <strong>The left menu</strong>.
        </div>
      )
    },
    {
      selector: 'a[href="/admin/plugins/content-manager/collectionType/application::category.category"]',
      content: () => (
        <div>
        <h1>Collection Types</h1><br />
          First of all, you have your collection types.<br />
          You can create them in the <strong>Content Types Builder</strong>.<br />
          It lets you define the structure of you content. A collection type contains multiple fields like <strong>Text</strong>, <strong>RichText</strong>, <strong>Number</strong>, <strong>JSON</strong>, <strong>Media</strong> etc...<br />
        </div>
      )
    },
    {
      selector: 'a[href="/admin/plugins/content-manager/singleType/application::footer.footer"]',
      content: () => (
        <div>
        <h1>Single Types</h1><br />
          A single type <strong>facilitates content management</strong>.<br />
          Handy to manage content like a homepage, an About us page, or any other type of content that is not part of a collection.
        </div>
      )
    },
    {
      selector: 'a[href="/admin/plugins/content-type-builder"]',
      content: () => (
        <div>
        <h1>Content Types Builder</h1><br />
          This is where you create your <strong>collection types</strong>, <strong>single types</strong> and <strong>components</strong>.
        </div>
      )
    },
    {
      selector: 'a[href="/admin/plugins/content-type-builder"]',
      content: () => (
        <div>
          <h1>Content Types Builder</h1><br />
          <strong>Important:</strong> The <strong>creation</strong> and <strong>modification</strong> in the Content Types Builder is <strong>not possible on production environment</strong>.<br />
          <a target="_blank" href="https://strapi.io/documentation/developer-docs/latest/getting-started/troubleshooting.html#frequently-asked-questions">Learn more</a>
        </div>
      )
    },
    {
      selector: 'a[href="/admin/plugins/documentation"]',
      content: () => (
        <div>
          <h1>Documentation Plugin</h1><br />
          The documentation plugin takes out most of your pain to generate your documentation. This plugin uses <strong>SWAGGER UI</strong> to visualize your API's documentation.
        </div>
      )
    },
    {
      selector: 'a[href="/admin/plugins/upload"]',
      content: () => (
        <div>
        <h1>Media Library</h1><br />
          The media library allows you to store your <strong>images</strong>, <strong>videos</strong> and <strong>files</strong> in your Strapi admin panel with many ways to visualize and manage them.
        </div>
      )
    },
    {
      selector: 'a[href="/admin/marketplace"]',
      content: () => (
        <div>
        <h1>Marketplace</h1><br />
        This is the place where you can find <strong>plugins to install</strong> on your project.
        </div>
      )
    },
    {
      selector: 'a[href="/admin/list-plugins"]',
      content: () => (
        <div>
        <h1>Installed plugins</h1><br />
        This is the list of the <strong>installed plugins</strong> on your project.
        </div>
      )
    },
    {
      selector: 'a[href="/admin/settings"]',
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
      selector: 'a[href="/admin/plugins/content-type-builder"]',
      content: () => (
        <div>
        <h1>Collection type</h1><br />
        Let's get started by browsing our <strong>collection types</strong> in the <strong>Content Types Builder</strong>!<br /><br />
        <ul>
          <li>
            <strong>Click</strong> on the link to be redirect to the Content Types Builder.
          </li>
        </ul>
        </div>
      )
    }],
  },
  'content-type-builder': {
    steps: [
      {
        selector: 'a[href="/admin"]',
        content: () => (
          <div>
          <h1>Content Types Builder</h1><br />
          Welcome to the CTB! This is where you create your <strong>collection types</strong>, <strong>single types</strong> and <strong>components</strong>.<br /><br />
          Let's see how it's working here!
          </div>
        ),
      },
      {
        selector: 'div.col-md-3',
        content: () => (
          <div>
          <h1>Manage your Content Types</h1><br />
          In this sidebar you can browse your <strong>collection types</strong>, <strong>single types</strong>, <strong>components</strong> and also create new ones!.<br /><br />
          Let's see one specific collection type!
          </div>
        ),
      },
      {
        selector: 'a[href="/admin/plugins/content-type-builder/content-types/application::restaurant.restaurant"]',
        content: () => (
          <div>
          <h1>Restaurant Collection Type</h1><br />
          This is one of the collection type that compose your project.<br /><br />
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
          <h1>Manage your Collection Type</h1><br />
          Awesome! You can now see how this collection type is constituted.<br /><br />
          The majority of the fields here are simple <strong>text</strong>, <strong>rich text</strong>, <strong>enumeration</strong>, <strong>date</strong> but I want to focus on those who are more complicated to understand.<br /><br />
          </div>
        ),
      },
      {
        selector: 'tr.relation-row.clickable',
        content: () => (
          <div>
          <h1>Relations</h1><br />
          A <strong>relation</strong> field is used to link a collection type to another.<br /><br />
          <ul>
            <li>
              <strong>Click</strong> on this field to see more details about this relation and go to the <i>next step</i> to clear the guided tour for the modal ;)
            </li>
          </ul>
          </div>
        ),
      },
      {
        selector: 'div.modal-content',
        content: () => (
          <div>
          <h1>Relations</h1><br />
          Perfect! You can see here the nature of the relation.<br />
          The <strong>reviews</strong> field in this <strong>Restaurant</strong> collection type is connected to the <strong>Review</strong> collection type. The exact expression of this relation is: <strong>Restaurant belongs to many Reviews</strong>.<br /><br />
          This is a very cool feature since you'll be able to fetch every reviews information for any restaurant.
          </div>
        ),
      },
      {
        selector: 'body',
        content: () => (
          <div>
          <h1>Relations</h1><br /><br />
          <ul>
            <li>
              <strong>Close</strong> the relation modal.
            </li>
          </ul>
          </div>
        ),
      },
      {
        selector: 'div.col-md-9.content',
        content: () => (
          <div>
          <h1>Components</h1><br />
          You may wonder why there are fields nested in a single field. These are <strong>components</strong>.<br />
          Indeed here the component <strong>opening_hours</strong> is neither more nor less than a set of predefined fields.<br /><br />
          This is very useful if you want to have the same fields for several collection types. Instead of repeating yourself, you can <strong>create a component and reuse it in different collection types</strong>.
          </div>
        ),
      },
      {
        selector: 'a[href="/admin/plugins/content-type-builder/content-types/application::footer.footer"]',
        content: () => (
          <div>
          <h1>Single type</h1><br />
          Let's see what your single type looks like.<br /><br />
          <ul>
            <li>
              <strong>Click</strong> on the Footer single type.
            </li>
          </ul>
          </div>
        ),
      },
      {
        selector: 'div.col-md-9.content',
        content: () => (
          <div>
          <h1>Single type</h1><br />
          It may seem complicated but this single type is composed of a <strong>columns</strong> component which itself contains a <strong>links</strong> component.<br />
          </div>
        ),
      },
      {
        selector: 'div.col-md-3',
        content: () => (
          <div>
          <h1>Components</h1><br />
          Feel free to close the guided tour to browse your components here on the bottom of this sidebar.<br />
          <strong>You can open the guided tour back in the Content Types Builder to where you left it.</strong>
          </div>
        ),
      },
      {
        selector: 'body',
        content: () => (
          <div>
          <h1>Content Manager</h1><br />
          Creating the structure of our content is nice but what about seeing the actual content now? Let's go!<br />
          </div>
        ),
      },
      {
        selector: 'a[href="/admin/plugins/content-manager/collectionType/application::restaurant.restaurant"]',
        content: () => (
          <div>
          <h1>Content Manager</h1><br />
          Let's browse our restaurants!<br /><br />
          <ul>
            <li>
              <strong>Click</strong> on the Restaurant collection type.
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
          <h1>Content</h1><br />
          Great! Here is a list content that has been created.<br />
          You can do a lot of things here:
          </div>
        ),
      },
      {
        selector: 'button[style*="padding-left: 15px; padding-right: 15px; font-weight: 600;"]',
        content: () => (
          <div>
          <h1>Create a new entry</h1><br />
          You can simply create a new entry by filling the fields you created for this collection type.<br />
          <strong>Important:</strong> This is a way for your to directly create data from the admin with a UI but you can definitely create data <a target="_blank" href="https://strapi.io/documentation/developer-docs/latest/content-api/api-endpoints.html#endpoints">using the API</a> too.
          </div>
        ),
      },
      {
        selector: 'div[style*="margin-bottom: 5px;"]',
        content: () => (
          <div>
          <h1>Filter & Display</h1><br />
          <strong>Left:</strong> Filter your data to only find relevant content depending on some fields, relations etc...<br />
          <strong>Right:</strong> Configure what fields and relations you want to see in this view.
          </div>
        ),
      },
      {
        selector: 'thead',
        content: () => (
          <div>
          <h1>Sort</h1><br />
          You can sort your content depending on the fields you want by clicking on it.<br />
          </div>
        ),
      },
      {
        selector: 'body',
        content: () => (
          <div>
          <h1>Content Manager</h1><br /><br />
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
          <h1>Content Manager</h1><br />
          On the left side you can see all the fields for your content.
          </div>
        ),
      },
      {
        selector: 'div.col-md-12.col-lg-3',
        content: () => (
          <div>
          <h1>Content Manager</h1><br />
          On the right side you can see some informations about the content but also the <strong>relations</strong> it has.<br />
          On the bottom you can manage the view, the model and delete the content.
          </div>
        ),
      },
      {
        selector: 'a[href="/admin"]',
        content: () => (
          <div>
          <h1>API</h1><br />
          I think it's time to let you play with this demo! But first you need to at least view your content <strong>through the API</strong>.<br />
          By default the permission to fetch its content via the API on a Strapi project is <strong>disabled</strong> inside <strong>Settings - Roles & Permission - Public</strong> but here it is already enabled.<br /><br />
          <ul>
            <li>
              <strong>Add</strong> /restaurants just after the host of your demo url (ex: https://api-4p93j.strapidemo.com/restaurants) to see all your restaurants!
            </li>
          </ul>
          </div>
        ),
      },
      {
        selector: 'a[href="/admin"]',
        content: () => (
          <div>
          <h1>Thanks 👋</h1><br />
          Thank you for following this guided tour. We hope that it was useful for you to understand how Strapi works!<br />
          If you want to create <strong>your own project on your local machine</strong>:<br /><br />
          <code>npx create-strapi-app my-project --quickstart</code>
          </div>
        ),
      },
    ]
  }
};

export default tour;
