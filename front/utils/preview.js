export function getPreviewParams(preview) {
  return preview ? '&_publicationState=preview&published_at_null=true' : '';
}
