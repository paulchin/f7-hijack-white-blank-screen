// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe'
      }
    };
  },
  methods: {
    helloWorld: function() {
      app.dialog.alert('Hello World!');
    }
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14'
  },
  init: true,
  initOnDeviceReady: true,
  on: {
    init: function() {
      console.log('App initialized');
      this.views.create('.view', {
        pushState: false,
        url: '/'
      });
    }
  }
});

function sayHello() {
  alert('hello paul');
}

app.init();

app.on('deviceready', function() {
  console.log('app.init called');
});
