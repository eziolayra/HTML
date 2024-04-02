// Function to open the modal with the clicked image
function openModal(imagePath) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imagePath;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}
