async function editPostHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
  
    const rating = document.querySelector('select[name="rating"]').value.trim();
    const content = document.querySelector('textarea[name="post-content"]').value.trim();
  
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
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

async function deletePostHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
  
document.querySelector('.edit-post-form').addEventListener('submit', editPostHandler);

document.querySelector('#delete-btn').addEventListener('click', deletePostHandler);