window.onload = () => {
    document.getElementsByClassName('add-article-button')[0]
        .addEventListener('click', () => {
            const name = document.getElementById('name');
            const content = document.getElementById('content');
            const author = document.getElementById('author');
            const file = document.getElementById('file');
            
            if (!name.value.trim() || !content.value.trim() || !author.value.trim()) {
                alert('');
                return;
            }
            
        });
}