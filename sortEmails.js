// Make sure to type your preffered email and label name

function sortEmails() {
  const emails = GmailApp.search("from:someone@gmail.com");
  const label = GmailApp.createLabel("Name of label");
  emails.forEach(email => email.addLabel(label));
}
