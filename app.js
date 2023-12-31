const themeToggleBtn = document.querySelector('.dark-btn');
const theme = localStorage.getItem('theme');
const iconSrc = localStorage.getItem('icon');
const image = document.querySelector('header img');

theme && document.body.classList.add(theme);

image.src = iconSrc || 'assets/darkBtn.svg';

image.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
        image.src = 'assets/lightBtn.svg';
    } else {
        localStorage.removeItem('theme');
        image.src = 'assets/darkBtn.svg';
    }
    
    
    localStorage.setItem('icon', image.src);
});







document.addEventListener("DOMContentLoaded", fetchData);
function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const cardContainer1 = document.querySelector('.grid-container1');
            const followersDetails = data.followersData;

            followersDetails.forEach(item => {
                const cardContent = `
                    <div class="card">
                        <div class="card-top">
                            <img src="assets/${item.platform}.svg">
                            <span>${item.handle}</span>
                        </div>
                        <div class="card-middle">
                            <p class="followers-today">${item.followersCount}</p>
                            <p class="followers">FOLLOWERS</p>
                        </div>
                        <div class="card-bottom">
                            <img src="assets/${item.arrow}.svg">
                            <span class="today">${item.today}</span>
                        </div>
                    </div>`;
                cardContainer1.innerHTML += cardContent;
            });

            const cardContainer2 = document.querySelector('.grid-container2');
            const overviewDetails = data.overviewData;

            overviewDetails.forEach(item => {
                const card2Content = `
                    <div class="card2">
                        <div class="card2-top">
                            <p>${item.title}</p>
                            <p><img src="assets/${item.platform}.svg"></p>
                        </div>
                        <div class="card2-bottom">
                            <p id="number">${item.value}</p>
                            <div class="card2-br">
                                <img src="assets/${item.arrow}.svg">
                                <p class="percentage">${item.percentage}</p>
                            </div>
                        </div>
                    </div>`;
                cardContainer2.innerHTML += card2Content;
            });
        });
}
