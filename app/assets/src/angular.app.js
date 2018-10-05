const  neuAngular = angular.module("neutralinoAngular", ["ngRoute"])

neuAngular.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        template : `
        <section id="homeSection">

   
    <div class="container">
    
    <div class="home-container">
        <div id="home">
      <p class="text-muted h6">  Welcome to your NeutralinoJs app, using a AngularJS template!
      Follow our quick start guide, found <a href="https://neutralinojs.github.io/docs/#/gettingstarted/quickstart">here</a>, to build your own NeutralinoJS App!
      To get familiar with NeutralinoJS, visit our docs <a href="https://neutralinojs.github.io/docs/">here</a>.
      Visit our repo found at <a href="https://github.com/neutralinojs">github.com/neutralinoj</a>s, and give us a big star!</p>
        
        </div>
        <p class="h6">{{runningInstanceInfo}}</p>
        <a href="#!/ram" class="btn btn-primary">View Second Page</a>
    </div>

    </div>
</section>
        
        `,
        controller:"homeController"
    })
    .when("/ram", {
        template : `
        <section class="ram-section">
        <h2>Your Current Machine Ram Usage</h2>
        <h1 class="display-4">{{ramDetails}}</h1>
        <a href="#!/" class="btn btn-primary">Load Home Controller</a>
        </section>
        `,
        controller:"ramController"
    })
    
});