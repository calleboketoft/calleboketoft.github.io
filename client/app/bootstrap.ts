import 'zone.js'
import 'reflect-metadata'
import { Component, bootstrap } from 'angular2/angular2'
import { AppCmp as CoSelectableItemsExample } from '../jspm_packages/npm/co-selectable-items@0.1.1/src/example/app-cmp'
import { AppCmp as CoTagsExample } from '../jspm_packages/npm/co-tags@0.0.7/src/example/app-cmp'
import { }

@Component({
  selector: 'app',
  directives: [CoSelectableItemsExample, CoTagsExample],
  template: `
    <h2>{{ title }}</h2>
    <co-selectable-items-example></co-selectable-items-example>
    <co-tags-example></co-tags-example>
  `
})
class AppComponent {
  title: string
  constructor () {
    this.title = 'Angular 2 Components'
  }
}

bootstrap(AppComponent)