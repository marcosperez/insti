import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  sliders = [
    {
      title: 'Slide 1',
      src: 'assets/img/slide-1.png',
    },
    {
      title: 'Slide 2',
      src: 'assets/img/slide-2.jpg',
    },
    {
      title: 'Slide 3',
      src: 'assets/img/slide-3.jpg',
    },
    {
      title: 'Slide 4',
      src: 'assets/img/slide-4.jpg',
    },
  ];
  effect = 'scrollx';

  constructor() {}

  ngOnInit(): void {}
}
