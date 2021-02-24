import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Projeto } from '../shared/projeto.model';
import { ProjetoService } from '../shared/projeto.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  projeto: Projeto;

  constructor(private projetoService: ProjetoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => this.projetoService.getProjetoWithMetadados(params.get('id')))
    ).subscribe(
      res => {
        this.projeto = res,
          this.projeto.metadados.sort((a, b) => a.order - b.order)
      }
    )
  }

}
