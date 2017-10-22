# App Overview

This is a web-based application that reads RSS feeds. There's a hidden menu on the left that shows a fixed list of feeds. When you select one, the list is updated with links from that feed

# Tests

When you open the index.html jasmine is run automatically and displays the result from running the tests on the page. The tests are:

- RSS Feeds
  - Are defined
  - Has an url property
  - Has a name property
- The menu
  - Is hidden by default
  - Changes visibility when the menu icon is clicked
- Initial Entries
  - Contains at least a single entry
- New Feed Selection
  - Should change content
