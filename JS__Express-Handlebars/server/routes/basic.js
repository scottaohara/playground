const HOME_VIEW = 'home';
const ABOUT_VIEW = 'about';

export function home( req, res ) {
  const context = {
    layoutData: {
      title: 'Index',
      projectTitle: 'Derp',
      meta: {
        author: 'Scott O\'Hara',
        description: '',
        robots: ''
      }
    }
  };

  res.render(HOME_VIEW, context);
}



export function about( req, res ) {
  const context = {
    layoutData: {
      title: 'My Basic Example',
      projectTitle: 'Derp',
      meta: {
        author: 'Scott O\'Hara',
        description: '',
        robots: ''
      }
    }
  };

  res.render(ABOUT_VIEW, context);
}
