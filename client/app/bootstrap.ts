import 'zone.js'
import 'reflect-metadata'
import { Component, bootstrap } from 'angular2/angular2'
import { AppCmp } from '../jspm_packages/npm/co-selectable-items@0.1.0/src/example/app-cmp'

@Component({
  selector: 'app',
  directives: [AppCmp],
  template: `
    <h2>{{ title }}</h2>
    <co-selectable-items-example></co-selectable-items-example>
  `
})
class AppComponent {
  title: string
  constructor () {
    this.title = 'Angular 2 Components'
  }
}

bootstrap(AppComponent)