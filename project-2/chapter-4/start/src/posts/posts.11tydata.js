const { DateTime } = require("luxon");
const { eleventyComputed } = require("../../../end/src/posts/posts.11tydata");
module.exports = {
  layout: "layouts/post.html",
  tags: ["post"],
  author: "Alex",
  eleventyComputed: {
    dateString: ({ page }) =>
      DateTime.fromJSDate(page.date, { zone: "utc" }).toLocaleString(
        DateTime.DATE_FULL
      ),
  },
};
