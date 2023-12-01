const createWebsiteCard = (websiteLink, websiteLogo, websiteName, websiteLinkText) => {
  // Get the 'apps-container' div
  const appsContainer = document.getElementById('apps-container');

  // Create a new div
  const newDiv = document.createElement('a');

  // Set the innerHTML of the new div
  newDiv.innerHTML = `
    <a href="${websiteLink}">
      <img src="${websiteLogo}" alt="${websiteName}">
      <h2>${websiteName}</h2>
      <p>${websiteLinkText}</p>
    </a>
  `;

  // Append the new div to the 'apps-container' div
  appsContainer.appendChild(newDiv);
};

// Get the submit button
const submitButton = document.getElementById('submit-button');

// Add an event listener to the submit button
submitButton.addEventListener('click', () => {
  // Get the user inputs
  const websiteLink = document.getElementById('website-link').value;
  const websiteLogo = document.getElementById('website-logo').value;
  const websiteName = document.getElementById('website-name').value;
  const websiteLinkText = document.getElementById('website-link-text').value;

  // Call the createWebsiteCard function with the user inputs
  createWebsiteCard(websiteLink, websiteLogo, websiteName, websiteLinkText);
});
