import MainLayout from 'components/layouts/MainLayout';

import initialLoad from 'helpers/initialLoad';
import { postsPath, contactsPath } from 'helpers/routes';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import ContactsView from 'components/views/Contacts';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

const ContactsRoute = {
  path: '/contacts',
  component: ContactsView
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    ContactsRoute
  ]
};
