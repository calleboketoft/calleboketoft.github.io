import { Component } from 'angular2/angular2'
import { Http } from 'angular2/http'

@Component({
  selector: 'my-dashboard',
  template: `
    <h2>Dashboard</h2>
    <p>time to download some Github stuff!</p>
  `
})
export class DashboardComponent {
  constructor (http: Http) {
    console.log('something is happening at least')
    http.get('http://api.github.com/users/calleboketoft/repos')
      .subscribe((res:any) => {
        console.log(res.json())
      })
  }
}


// https://api.github.com/
// GET /users/:username/repos