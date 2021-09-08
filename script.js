"use strict";

const RSS_URL = "https://anchor.fm/s/1d60e538/podcast/rss";
const MAX_PODCASTS = 10;

fetch(RSS_URL)
  .then(res => res.text())
  .catch(err => {
    console.error(err);

    const p = document.createElement("p");
    p.textContent = "Seems like there was a problem getting the feed...";
    document.getElementById("podcasts").append(p);
  })
  .then(rss => (new DOMParser()).parseFromString(rss, "text/xml"))
  .then(rss => {
    const items = rss.getElementsByTagName("item");
    const length = items.length < MAX_PODCASTS ? items.length : MAX_PODCASTS;

    for(let i = 0; i < length; i++) {
      const item = items[i];

      const titleText = item.getElementsByTagName("title")[0].textContent;
      const linkText = item.getElementsByTagName("link")[0].textContent;
      const dateText = item.getElementsByTagName("pubDate")[0].textContent;

      const podcast = document.createElement("li");

      const link = document.createElement("a");
      link.href = linkText;
      link.target = "blank";

      const date = document.createElement("p");
      date.textContent = ago(new Date(dateText));
      link.append(date);

      const title = document.createElement("h4");
      title.textContent = titleText;
      link.append(title);

      podcast.append(link);
      document.getElementById("podcasts").append(podcast);
    }
  });

// source - https://www.npmjs.com/package/s-ago
function format(diff, divisor, unit, past, future, isInTheFuture) {
    const val = Math.round(Math.abs(diff) / divisor);
    if (isInTheFuture)
        return val <= 1 ? future : 'in ' + val + ' ' + unit + 's';
    return val <= 1 ? past : val + ' ' + unit + 's ago';
}
const units = [
    { max: 2760000, value: 60000, name: 'minute', past: 'a minute ago', future: 'in a minute' },
    { max: 72000000, value: 3600000, name: 'hour', past: 'an hour ago', future: 'in an hour' },
    { max: 518400000, value: 86400000, name: 'day', past: 'yesterday', future: 'tomorrow' },
    { max: 2419200000, value: 604800000, name: 'week', past: 'last week', future: 'in a week' },
    { max: 28512000000, value: 2592000000, name: 'month', past: 'last month', future: 'in a month' } // max: 11 months
];
function ago(date, max) {
    const diff = Date.now() - date.getTime();
    if (Math.abs(diff) < 60000)
        return 'just now';
    for (let i = 0; i < units.length; i++) {
        if (Math.abs(diff) < units[i].max || (max && units[i].name === max)) {
            return format(diff, units[i].value, units[i].name, units[i].past, units[i].future, diff < 0);
        }
    }
    return format(diff, 31536000000, 'year', 'last year', 'in a year', diff < 0);
};