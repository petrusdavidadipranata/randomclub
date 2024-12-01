fetch('https://petrusdavidadipranata.github.io/clubs.json')
  .then(response => response.json())
  .then(data => {
    // Fungsi untuk memilih klub secara acak
    function getRandomClub(clubs) {
      const randomIndex = Math.floor(Math.random() * clubs.length);
      return clubs[randomIndex];
    }

    const singleRandomDiv = document.querySelector('.single-random');
    const loadingDiv = document.querySelector('#loading');
    const icon = document.querySelector('.icon');

    singleRandomDiv.addEventListener('click', () => {
      // Menampilkan loading spinner
      loadingDiv.style.display = 'block';
      icon.style.display = 'none';
      singleRandomDiv.querySelector('p').innerHTML = '' // Optional: Change icon to show loading state

      // Memilih klub secara acak setelah delay (simulasi proses loading)
      setTimeout(() => {
        const randomClub = getRandomClub(data.teams);

        // Menyembunyikan loading spinner
        loadingDiv.style.display = 'none';
        icon.textContent = '✅'; // Change icon after random club is selected

        singleRandomDiv.querySelector('p').innerHTML = `
        <span style="font-size: 16px; font-weight: bold;">CLUB</span><br><br> 
        <span style="font-size: 28px; font-weight: bold;">${randomClub.name}</span><br><hr> 
        <span style="font-size: 16px; font-weight: bold;">LEAGUE</span><br><br> 
        <span style="font-size: 28px;">${randomClub.league}</span>
      
        `;
      }, 1500); // Simulasi loading selama 1.5 detik
    });
  })
  .catch(error => {
    console.error('Ada masalah saat mengambil data JSON:', error);
  });
