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
        var _this = this;
        http.get('http://localhost:3000')
            .subscribe(function (res) {
            console.log(res.json());
            _this.filteredRepos = JSON.parse(res.json().body);
        });
    }
    DashboardComponent = __decorate([
        angular2_1.Component({
            selector: 'my-dashboard',
            directives: [angular2_1.NgFor],
            template: "\n    <div class=\"container\" style=\"margin-top: 25px;\">\n      <h3>Repos</h3>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>\n              Repo\n            </th>\n            <th>\n              Description\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ng-for=\"var repo of filteredRepos\">\n            <td>\n              {{repo.name}}\n            </td>\n            <td>\n              {{repo.description}}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map