// each need a fetch with a post method in it. 
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_text = document.querySelector('#comment-body').value.trim();
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
  
