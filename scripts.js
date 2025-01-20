/* ============ NAVBAR OPENING ============ */

function openMenu(){
    document.getElementById("navbar").classList.toggle("navbar-toggle");
}




window.addEventListener('load', function () {
    const fixedImage = document.getElementById('fixedImage');
    const principalSection = document.querySelector('.principal');

    // Update the height of the principal section
    principalSection.style.height = `${fixedImage.offsetHeight}px`;
});

window.addEventListener('resize', function () {
    const fixedImage = document.getElementById('fixedImage');
    const principalSection = document.querySelector('.principal');
    
    // Adjust height on window resize
    principalSection.style.height = `${fixedImage.offsetHeight}px`;
});
