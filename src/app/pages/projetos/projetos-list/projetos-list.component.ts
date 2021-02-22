import { Component, OnInit } from '@angular/core';
import { Projeto } from '../shared/projeto.model';
import { ProjetoService } from '../shared/projeto.service';

@Component({
  selector: 'app-projetos-list',
  templateUrl: './projetos-list.component.html',
  styleUrls: ['./projetos-list.component.css']
})
export class ProjetosListComponent implements OnInit {

  projetos: Projeto[] = []

  constructor(private projetoService: ProjetoService) { }

  ngOnInit(): void {

    this.projetoService.getAll().subscribe(
      res => this.projetos = res
    )

  }

}
