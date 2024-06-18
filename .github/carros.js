document.addEventListener("DOMContentLoaded", () => {
    const cars = document.querySelectorAll(".carro");
    let currentIndex = 0;

    const updateCarDisplay = () => {
        cars.forEach((car, index) => {
            car.classList.toggle("selecionado", index === currentIndex);
            car.style.display = index === currentIndex ? "block" : "none";
        });
    };

    document.getElementById("btn-passar").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % cars.length;
        updateCarDisplay();
    });

    document.getElementById("btn-voltar").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + cars.length) % cars.length;
        updateCarDisplay();
    });

    updateCarDisplay();
});
