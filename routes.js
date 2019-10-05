const routes = require( 'next-routes' );

// Setup router.
module.exports = routes()
  .add( 'index', '/' )
  .add( 'posts' )
  .add( 'frontend' )
  .add( 'single', '/posts/:slug' )
  .add( 'singlefrontend', '/frontend/:slug' )
