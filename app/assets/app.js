// MIT License

// Copyright (c) 2018 Neutralinojs

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.



Neutralino.init({
    load: () => {
        var app = angular.module("app", ["ngRoute"]);
        app.config(function($routeProvider) {
            $routeProvider
            .when("/", {
                template : `
                <div>
                <h3>{{NL_NAME}} is running on port {{NL_PORT}} inside {{NL_OS}}</h3>
                <button type="button" class="btn btn-success btnCustom"  onClick={window.location='#!more'}>More Info</button>
                </div>
                `,
                controller : function($scope) {
                    $scope.NL_NAME = NL_NAME;
                    $scope.NL_OS = NL_OS;
                    $scope.NL_PORT = NL_PORT;
                }
            })
            .when("/more", {
                template : `
                <div>
                <div id="description">
                  <p>Welcome to your NeutralinoJs app, using a ReactJs template!
                    Follow out quick start guide, found<a target="_blank" href="https://neutralinojs.github.io/docs/#/gettingstarted/quickstart">https://neutralinojs.github.io/docs/#/gettingstarted/quickstart</a> to build your own NeutralinoJs App!
                    To get familiar with NeutralinoJs, visit our docs,<a target="_blank" href="https://neutralinojs.github.io/docs">here</a>.
                    To learn more about Vue, visit vuejs.org/guide.
                    Visit our repo<a target="_blank" href="https://github.com/neutralinojs">here</a> , and give us a big star!
                  </p>
                </div>
                <button type="button" class="btn btn-success btnCustom"  onClick="window.location='#!'">Back</button>
              </div>
                `
            });
        });
    },
    pingSuccessCallback : () => {
        console.log("ping success");
    },
    pingFailCallback : () => {
        console.log("ping fail");
    }
});