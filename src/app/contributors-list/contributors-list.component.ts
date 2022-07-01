import { Component, Input, OnInit } from '@angular/core';
import { GitHubService } from 'src/github.service';
// import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-contributors-list',
  templateUrl: './contributors-list.component.html',
  styleUrls: ['./contributors-list.component.scss'],
})
export class ContributorsListComponent implements OnInit {

  data: any = [];
  value: string = '';
  searchTerm: string = '';
  error: string = '';

  constructor(private githubService: GitHubService) {}

  ngOnInit(): void {

  }

  getContributors(repo: string) {
    this.githubService
    .getContributors(repo)
    .subscribe(
      (res) => {

        if(res) {
          this.data = res;
          this.error = '';
          console.log(this.data);
        } else {
          this.error = 'No se encontraron contribuidores';
        }

    },
      (error) => {
        this.error = `Error ${error.status}. Por favor, escribe un Owner/Repository válido para visualizar sus contribuidores`
      }
    )
  }

  getSearchTerm() {
    console.log(this.value);
  }

  onSubmit() {
    if(this.validarInput(this.value)) {
      this.getContributors(this.value);
      this.searchTerm = this.value;

      // Limpiamos value para evitar errores
      this.value = '';
    }
  }

  validarInput(input:string) {
    if(input.includes('/') && input.length >= 3)  {
      return true
    } else {
      this.error = 'Hay un error sintáctico en tu query, escribe Owner/Repository correctamente.';
      return false
    }
  }
}
