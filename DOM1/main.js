let isStatus = document.querySelector("h5");
let addFriend = document.querySelector("#add");
let friends = false;

addFriend.addEventListener("click", () => {
    if(friends == false) {
        isStatus.textContent = "Friends";
        isStatus.style.color = "green";
        addFriend.textContent = "Remove";
        addFriend.style.backgroundColor = "grey"
        friends = true;
    }

    else if (friends == true) {
        isStatus.textContent = "Stranger";
        isStatus.style.color = "red";
        addFriend.textContent = "Add Friends";
        addFriend.style.backgroundColor = "cadetblue"
        friends = false;
    }
});


