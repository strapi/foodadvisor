import { getData } from '../../utils';

export default async (req, res) => {
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
    null
  );

  if (!previewData.data) {
    return res.status(401).json({ message: 'Invalid slug' });
  }
  res.setPreviewData({});

  res.writeHead(307, {
    Location: previewData.slug,
  });

  res.end();
};
