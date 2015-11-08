var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var DashboardComponent = (function () {
    function DashboardComponent(http) {
        console.log('something is happening at least');
        http.get('http://api.github.com/users/calleboketoft/repos')
            .subscribe(function (res) {
            console.log(res.json());
        });
    }
    DashboardComponent = __decorate([
        angular2_1.Component({
            selector: 'my-dashboard',
            template: "\n    <h2>Dashboard</h2>\n    <p>time to download some Github stuff!</p>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;
// https://api.github.com/
// GET /users/:username/repos 
//# sourceMappingURL=dashboard.component.js.map