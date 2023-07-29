export default async function exit(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.setDraftMode({ enable: false });

  // Redirect the user back to a provided redirect path or the index page
  res.redirect('/');
}
