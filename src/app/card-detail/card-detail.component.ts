import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Figurina } from '../models/figurina';
import { AssetsService } from '../services/assets-service.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})

export class CardDetailComponent implements OnInit {
  id:string | null = "";
  figurina: Figurina = new Figurina();

  constructor(private _Activetedroute : ActivatedRoute, private asset: AssetsService) { }

  ngOnInit(): void {
    this._Activetedroute.queryParams.subscribe((params) => {
      this.id = params['id'];
      
       this.asset.getDetail(Number(this.id)).subscribe(
        value => {this.figurina = value},
        error => { console.log('errore getData') }

       );
    });
  
  }

}
