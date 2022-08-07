// require router, POST (from models), withAuth
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');



//get rout that used withAuth - uses findAll on post
// render all-post admin with the dashboard layout. we'd find all old ones first. a differnt view. 

router.get('/', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findAll(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Comment }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('all-post-admin', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  // get route for editing a post, using withAuth - findByPk

  

  router.get('edit/:id', withAuth, async (req, res) => {
    try {
        //wait your post data
    } catch (err) {
        // throughs error with a redirect to the login page
    }
});

/// comination of these 2?
router.put('/:id', async (req, res) => {
    try {
      const postData = await Post.update({ 
        title: req.body.title ,
        content: req.body.content ,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id
        }
      })
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;