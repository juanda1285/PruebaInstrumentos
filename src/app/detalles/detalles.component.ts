import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {


  @Input() instrumento:any = null; 
 

  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  
  
}
