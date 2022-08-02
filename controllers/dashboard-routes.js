// require router, POST (from models), withAuth

//get rout that used withAuth - uses findAll on post
// render all-post admin with the dashboard layout. we'd find all old ones first. a differnt view. 

// get route for editing a post, using withAuth - findByPk

router.get('edit/:id', withAuth, async (req, res) => {
    try {
        //wait your post data
    } catch (err) {
        // throughs error with a redirect to the login page
    }
})