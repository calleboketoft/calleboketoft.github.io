import { Component, NgFor } from 'angular2/angular2'
import { Http } from 'angular2/http'

@Component({
  selector: 'my-dashboard',
  directives: [NgFor],
  template: `
    <div class="container" style="margin-top: 25px;">
      <h3>Repos</h3>
      <table class="table">
        <thead>
          <tr>
            <th>
              Repo
            </th>
            <th>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ng-for="var repo of filteredRepos">
            <td>
              {{repo.name}}
            </td>
            <td>
              {{repo.description}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class DashboardComponent {
  filteredRepos: Array<any>

  constructor (http: Http) {
    http.get('http://localhost:3000')
      .subscribe((res:any) => {
        console.log(res.json())
        this.filteredRepos = JSON.parse(res.json().body)
      })
  }
}
