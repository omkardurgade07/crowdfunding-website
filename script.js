let projects = [];

function createProject() {
    let title = document.getElementById("title").value;
    let goal = document.getElementById("goal").value;

    if (title === "" || goal === "") return;

    projects.push({
        title: title,
        goal: Number(goal),
        raised: 0,
        updates: []
    });

    document.getElementById("title").value = "";
    document.getElementById("goal").value = "";

    showProjects();
}

function showProjects() {
    let div = document.getElementById("projects");
    div.innerHTML = "";

    projects.forEach((p, index) => {
        div.innerHTML += `
            <div class="project">
                <h3>${p.title}</h3>
                <p>Goal: ₹${p.goal}</p>
                <p>Raised: ₹${p.raised}</p>

                <input type="number" placeholder="Contribution Amount"
                       id="amt${index}">
                <button onclick="contribute(${index})">Contribute</button>

                <br><br>
                <input placeholder="Project Update"
                       id="upd${index}">
                <button onclick="addUpdate(${index})">Add Update</button>

                <ul>
                    ${p.updates.map(u => <li>${u}</li>).join("")}
                </ul>
            </div>
        `;
    });
}

function contribute(index) {
    let amount = Number(document.getElementById("amt" + index).value);
    if (amount <= 0) return;

    // Simulated payment success
    projects[index].raised += amount;
    alert("Payment Successful!");
    showProjects();
}

function addUpdate(index) {
    let update = document.getElementById("upd" + index).value;
    if (update === "") return;

    projects[index].updates.push(update);
    showProjects();
}