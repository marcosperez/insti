import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() imagenSrc: string = '';
  @Input() hovereable: boolean = true;
  @Input() colorCls: string = 'primary';
  classColor = 'card-epe ';
  constructor() {}

  ngOnInit(): void {
    this.classColor += this.colorCls;
  }
}
