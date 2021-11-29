async function newFormHandler(event) {
    event.preventDefault();
  
<<<<<<< HEAD
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
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
  };
  
document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
=======
    const title = document.querySelector('input[name="movie-title"]').value;
    const rating = document.querySelector('select[name="rating"]').value;
    const content = document.querySelector('textarea[name="content"]').value;

    if(!title || !rating || !content) {
        $('#errorModal').modal();
        return;
    }
  
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
>>>>>>> 0430541e4d7261b47e2a80f061274f62d6a0275f
