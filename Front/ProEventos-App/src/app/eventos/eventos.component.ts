import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos : any

  ngOnInit(): void {
    this.getEventos();
  }


  public getEventos():void{
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      Response => this.eventos = Response,
      error => console.error(error),

    );
  }
  constructor(private http: HttpClient) { }


}
