import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetallesComponent } from 'src/app/detalles/detalles.component';
import { Instrumento } from 'src/app/model/instrumento';
import { InstrumentosServiceService } from 'src/app/servicios/instrumentos-service.service';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {

  constructor(private api: InstrumentosServiceService, private modalService: NgbModal) { }

  instrumentos!: Instrumento[];
  total!: number;
  suma!: number;
  instrumento = null;

  ngOnInit(): void {
    this.api.getInstrumentos().subscribe(data => {
      this.instrumentos = data;
      this.precioPromedio(data);
    })
  }

  precioPromedio(data: Instrumento[]): void {
    this.suma = (data.reduce((acc, obj) => acc + (obj.price), 0)) / data.length;
    this.total = parseFloat(this.suma.toFixed(2));
  }

  //Uso de modal ya que Card no esta en ngBoostrap
  //le envio el instrumento seleccionado al componente de los detalles
  onClick(instrumento: any) {
    this.instrumento = instrumento;
    const modalRef = this.modalService.open(DetallesComponent)
    modalRef.componentInstance.instrumento = this.instrumento

  }

  cerrarDetalles() {
    this.instrumento = null;

  }
}
