import Users from './collection.js';
import Comments from '/imports/api/comments/collection.js';
import Posts from '/imports/api/posts/collection.js';
import Groups from '/imports/api/groups/collection.js';

Users.addLinks({
    posts: {
        inversedBy: 'owner',
        collection: Posts
    },
    comments: {
        inversedBy: 'user',
        collection: Comments
    },
    groups: {
        collection: Groups,
        field: 'groupIds',
        type: 'many',
        metadata: {
            isAdmin: {type: Boolean, optional: true}
        }
    }
});