const tour = {
  admin: {
    steps: [{ selector: 'a[href="/admin"]', content: 'Step 1' }],
  },
  'content-type-builder': {
    steps: [
      {
        selector:
          'a[href="/admin/plugins/content-type-builder/content-types/application::category.category"]',
        content: 'Step 2',
      },
    ],
  },
};

export default tour;
