
 // 1. Show and Hide Project Details

const detailButtons = document.querySelectorAll(".details-btn");

for (let i = 0; i < detailButtons.length; i++) {

    detailButtons[i].addEventListener("click", function() {

        const detailId = this.getAttribute("data-target");
        const detail = document.getElementById(detailId);

        if (detail.hidden === true) {
            detail.hidden = false;
            this.textContent = "Hide Details -";
        } else {
            detail.hidden = true;
            this.textContent = "View Details +";
        }

    });
}


// 2. Update Footer Year Automatically

const currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;
