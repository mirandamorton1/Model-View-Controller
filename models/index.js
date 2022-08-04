const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const { userInfo } = require('os');

User.hasMany(Post, {
    foreignKey: 'userId'
});

User.hasMany(Comment, { 
    foreignKey: 'postId'
});

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'postId'
});

module.exports = {
    User,
    Comment,
    Post
};