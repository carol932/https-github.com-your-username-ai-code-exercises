// userList.js
function renderUserList(users) {
  const userListElement = document.getElementById('user-list');
  userListElement.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const user = users[i];

    const userName = user ? user.name : '';
    const userEmail = user ? user.email : '';

    const userElement = document.createElement('div');
    userElement.className = 'user-card';

    userElement.innerHTML = `
      <h3>${userName}</h3>
      <p>${userEmail}</p>
    `;

    userListElement.appendChild(userElement);
  }
}

// dashboard.js
function loadDashboard() {
  renderUserList(sampleResponse.users);
}

// Sample data from API
const sampleResponse = {
  users: [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
    { name: "Bob Johnson", email: "bob@example.com" }
  ]
};

// Export the loadDashboard function for testing
module.exports = {
  loadDashboard
};
