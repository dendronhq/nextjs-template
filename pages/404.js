// pages/404.js
// dendron redirect {note}.html to {note}

// Is Node running headless?
const isServer = () => typeof window === 'undefined'

// Redirect URLs matching `/note/{noteId}.html` to `/note/{noteId}`
export default function redirectHtmlUrl() {

    // If a browser window is open..
    if (!isServer()) {

    // Get the current URL and look for the pattern w/ regex.
    const currentUrl = window.location.toString();
    const endsWithHtml = /(.+)\/notes\/(\w+).html/;
    const urlParts = currentUrl.match(endsWithHtml);

    // If the pattern matches, redirect to the new URL.
    if (urlParts) {
      const server = urlParts[1];
      const noteId = urlParts[2];
      const newUrl = `${server}/notes/${noteId}`
      window.location = newUrl
    }
    
  }
  return <h1>404 - Page not found. Try the <a href="/">home page</a>?</h1>;
}
