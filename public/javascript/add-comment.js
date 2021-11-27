async function addCommentHandler(event) {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    const response = await fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({
            comment_text,
            post_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace(`/post/${post_id}`);
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.comment-form').addEventListener('submit', addCommentHandler);