// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-124411502-1");

// Console prompt easter egg
console.log(
  "%cWhy hello there! Interested in web dev? Join the team! Send us a message at hello@rosehack.com",
  "font-size: 30px; background: red; color: white;"
);

// Typeform
var qs,
  js,
  q,
  s,
  d = document,
  gi = d.getElementById,
  ce = d.createElement,
  gt = d.getElementsByTagName,
  id = "typef_orm_share",
  b = "https://embed.typeform.com/";
if (!gi.call(d, id)) {
  js = ce.call(d, "script");
  js.id = id;
  js.src = b + "embed.js";
  q = gt.call(d, "script")[0];
  q.parentNode.insertBefore(js, q);
}
