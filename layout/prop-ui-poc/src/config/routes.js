import {RouterUtils} from '@prop-ui/common';

const routes = {
  path: '/props/:propCode/poc',
  component: require('../containers/App').default,
  childRoutes: [
    {
      path: 'main',
      key: 'main',
      logo: 'pencil',
      childRoutes: [
        {
          path: 'main-1',
          key: 'Main 1',
          component: require('../components/Main').default
        }, {
          path: 'main-2',
          key: 'Main 2',
          component: require('../components/Main').default
        }
      ]
    }, {
      path: 'about',
      key: 'about',
      logo: 'envelope',
      childRoutes: [
        {
          path: 'about-1',
          key: 'About 1',
          component: require('../components/About').default
        }, {
          path: 'about-2',
          key: 'About 2',
          component: require('../components/About').default
        }
      ]
    }
  ]
};

export default RouterUtils.prepareRoutes(routes, null);
