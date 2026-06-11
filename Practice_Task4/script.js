const userSection = document.querySelector("#user-list");

fetch("https://dummyjson.com/users")
.then(response => response.json())

.then(result => {

    result.users.forEach(person => {

        const card = document.createElement("article");

        card.classList.add("profile-card");

        card.innerHTML = `

            <div class="profile-header">

                <img src="${person.image}" alt="${person.firstName}">

            </div>

            <div class="profile-body">

                <h2>${person.firstName} ${person.lastName}</h2>

                <p><strong>Age:</strong> ${person.age}</p>

                <p><strong>Email:</strong> ${person.email}</p>

                <p><strong>Phone:</strong> ${person.phone}</p>

                <p><strong>City:</strong> ${person.address.city}</p>

            </div>

        `;

        userSection.appendChild(card);

    });

})

.catch(error => {

    userSection.innerHTML =
    "<h2>Unable to load user information.</h2>";

    console.error(error);

});