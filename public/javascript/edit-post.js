<<<<<<< HEAD
async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('input[name="content"]').value.trim();
    console.log(title);
    console.log(content);

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
      
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          post_id: id,
          title,
          content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }

}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
=======
async function editPostHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
  
    const rating = document.querySelector('select[name="rating"]').value.trim();
    const content = document.querySelector('textarea[name="post-content"]').value.trim();

    if(!rating || !content) {
        $('#errorModal').modal();
        return;
    }
  
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
        $('#errorServerModal').modal();
        return;
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
        $('#errorServerModal').modal();
        return;
    }
}
  
document.querySelector('.edit-post-form').addEventListener('submit', editPostHandler);

document.querySelector('#delete-btn').addEventListener('click', deletePostHandler);
>>>>>>> sc-style
