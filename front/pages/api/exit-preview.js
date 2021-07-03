export default async function exit(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();

  // Redirect the user back to a provided redirect path or the index page
  res.writeHead(307, { Location: '/' });
  res.end();
}
