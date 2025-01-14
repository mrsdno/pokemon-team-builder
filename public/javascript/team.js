function viewGallery(event) {
  event.preventDefault();
  console.log("you clicked the button");
  document.location.replace("/pokemon");
}

// add listener to pokemon buttons in loop
pokemonBtns = document.getElementsByClassName("add-pokemon");

for (var i = 0; i < pokemonBtns.length; i++) {
  pokemonBtns[i].addEventListener("click", viewGallery);
}

const deleteBtn = document.querySelector("#delete-pokemon");

async function deletePokemon(event) {
  event.preventDefault();

  //get id from delete btn
  const id = event.target.dataset.id;
  if (confirm("Are you sure you want to delete this pokemon?") == true) {
    const response = await fetch(`/api/pokemon/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

deleteBtns = document.getElementsByClassName("delete-pokemon");
for (var i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", deletePokemon);
}

window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + "#loaded";
    window.location.reload();
  }
};
