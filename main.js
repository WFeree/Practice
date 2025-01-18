let searchTypes = document.querySelectorAll('.search-type');

searchTypes.forEach(type => {
    type.addEventListener('click', () => {
        searchTypes.forEach(t => t.classList.remove('selected-type'));
        type.classList.add('selected-type');
    });
});