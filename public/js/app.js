window.addEventListener("DOMContentLoaded",()=>{
    const toggleButton = document.getElementById("dropbtn");
    const navList = document.getElementsByClassName("nav-list")[0];

    toggleButton.addEventListener("click", (e) => {
        navList.classList.toggle("active-navbar");
        if (toggleButton.classList.contains("dropbtn")) {
            toggleButton.classList.remove("dropbtn");
            toggleButton.classList.add("animate-nav-toggle");
        } else {
            toggleButton.classList.add("dropbtn");
            toggleButton.classList.remove("animate-nav-toggle");
        }
    });
})
