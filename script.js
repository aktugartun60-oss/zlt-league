fetch("data.json")
  .then(res => res.json())
  .then(data => {

    let table = document.getElementById("table");

    data.teams.forEach(team => {
      let row = document.createElement("tr");

      row.innerHTML = `
        <td>${team.name}</td>
        <td>${team.points}</td>
      `;

      table.appendChild(row);
    });

  });
