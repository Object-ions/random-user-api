function fetchUser() {
  showSpinner();
  fetch('https://randomuser.me/api')
  .then(response => response.json())
  .then(data => {
    hideSpinner();
    displayUser(data.results[0]);
  });
}

function displayUser(user) {
  const userDisplay = document.querySelector('#user');

  if (user.gender === 'female') {
    document.body.style.backgroundColor = 'rebeccapurple';
  } else {
    document.body.style.backgroundColor = 'steelblue';
    
  }

  userDisplay.innerHTML = `
  <div class="flex justify-between">
  <div class="flex">
    <img
      class="w-48 h-48 rounded-full mr-8"
      src="${user.picture.medium}"
    />
    <div class="space-y-3">
      <p class="text-xl">
        <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
      </p>
      <p class="text-xl">
        <span class="font-bold">Email: </span> ${user.email}
      </p>
      <p class="text-xl">
        <span class="font-bold">Phone: </span> ${user.phone}
      </p>
      <p class="text-xl">
        <span class="font-bold">Location: </span> ${user.location.city}, ${user.location.state}
      </p>
      <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
    </div>
  </div>
</div>
  `;

}

// Show Spinner
function showSpinner() {
  document.querySelector('.spinner').style.display = 'block';
}

// Hide Spinner
function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}

// Event Listeners
document.querySelector('#generate').addEventListener('click', fetchUser);

// IIFE
fetchUser();