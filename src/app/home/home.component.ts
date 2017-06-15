import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { Tarefa } from './../model/tarefa.model';

@Component( {
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit
{

    private tarefaForm: Tarefa;

    private listaTarefas: Array<Tarefa> = [];

    constructor(
        private afDatabase: AngularFireDatabase
    ) 
    {
        this.tarefaForm = new Tarefa();
    }

    ngOnInit()
    {
        this.afDatabase.list("/tarefas").subscribe( ( result ) => {
            this.listaTarefas = result;       
        });
    }

    public salvarTarefa(): void
    {
        if(this.tarefaForm.titulo == null || this.tarefaForm.titulo == "" )
        {
            alert("O titulo é obrigatório");
            return;
        }
        
        if(this.tarefaForm.$key != null && this.tarefaForm.$key != undefined)
        {
            this.afDatabase.object("/tarefas/"+this.tarefaForm.$key)
            .update(this.tarefaForm)
            .then( (result) => {
                this.tarefaForm = new Tarefa();
            })
            .catch( (exception) => {
                console.error(exception);
            })
        }
        else
        {
            this.afDatabase.list("/tarefas").push(this.tarefaForm)
            .then( (result) => {
                this.tarefaForm = new Tarefa();
            });
        }

    }

    public editarTarefa(tarefa: Tarefa): void
    {
        this.tarefaForm = tarefa;
    }

    public excluirTarefa(tarefa: Tarefa): void
    {
        this.afDatabase.object("/tarefas/"+tarefa.$key)
        .remove();
    }

}
