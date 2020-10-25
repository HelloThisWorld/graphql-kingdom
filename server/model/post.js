const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const MSchema = mongoose.Schema;

const postSchema = new MSchema({
    comment: String,
    userId: String
});

module.exports = mongoose.model('Post', postSchema);