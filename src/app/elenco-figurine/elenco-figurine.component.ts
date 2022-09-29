import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../services/assets-service.service';
import { Figurina } from '../models/figurina';
import { CardId } from '../models/card-id';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elenco-figurine',
  templateUrl: './elenco-figurine.component.html',
  styleUrls: ['./elenco-figurine.component.css']
})
export class ElencoFigurineComponent implements OnInit {

  public figurine: Array<Figurina> = [];
  public cardDetail: Array<CardId> = [];

  constructor(private assetsservice: AssetsService, private router: Router) {
    this.assetsservice.getData().subscribe(
      value => { this.cardDetail=value },
       error => { console.log('errore getData') }
    );
}

ngOnInit(): void {
}

onClick(id: Number) : void {
  
  this.router.navigate(['/detail'], {
    queryParams : { id: id}
  });
}

}
