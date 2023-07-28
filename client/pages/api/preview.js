import { getData } from '../../utils';

export default async (req, res) => {
  console.log(req.query.secret, process.env.PREVIEW_SECRET);

  if (
    req.query.secret !== process.env.PREVIEW_SECRET ||
    (req.query.slug != '' && !req.query.slug)
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const previewData = await getData(
    req.query.slug,
    req.query.locale,
    req.query.apiID,
    req.query.kind,
    true
  );

  console.log({ previewData });

  if (!previewData.data) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  console.log('enabling draft mode');
  res.setDraftMode({ enable: true });
  res.redirect(previewData.slug);
};
