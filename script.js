// TODO: add code here
window.addEventListener("load", function () {
    const astronautsDivElement = document.getElementById("container");
    const fetchAstronautsPromise = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchAstronautsPromise.then(function (response) {
        const astronautsJsonPromise = response.json();
        astronautsJsonPromise.then(function (json) {
            for (let i = 0; i < json.length; i++) {
                let newAstronautElement = document.createElement("div");
                newAstronautElement.classList.add("astronaut");
                newAstronautElement.innerHTML = `
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>                            
                        </ul>
                    </div>
                    <img class="avatar" src=${json[i].picture}>
                `;
                astronautsDivElement.appendChild(newAstronautElement);
            }
        });            
    });
});