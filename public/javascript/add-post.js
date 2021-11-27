async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="movie-title"]').value;
    const rating = document.querySelector('select[name="rating"]').value;
    const content = document.querySelector('textarea[name="content"]').value;
  
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            rating,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
  
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);