const editFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const comment = document.querySelector('#post-comment').value.trim();  
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];  
    
    
    const post_id = window.location.toString().split('/') [
      window.locationtoString().split('/').length -1
    ]; 
  
    if (comment_text) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ post_id, comment_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-form')
    .addEventListener('submit', newFormHandler);