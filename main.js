function openPopup() {
    var popup = document.getElementById("popup"); 
    var popup = document.getElementById ("popup"); 
    popup.classList.add('active');
    popup.style.display = "block";
  }

function fecharPopUp() {
    var popup = document.getElementById("popup");
    popup.style.display = "none"; 
}  

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', performSearch);

function performSearch() {
  const query = searchInput.value;
  searchResults.innerHTML = '';

  // Aqui você pode implementar a lógica para realizar a pesquisa

  // Exemplo: exibindo o resultado na página
  const resultElement = document.createElement('p');
  resultElement.textContent = `Você pesquisou por...  ${query}`;
  searchResults.appendChild(resultElement);
}
