import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Work } from '../../models/work';

import * as Flickity from 'flickity';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit, AfterViewInit {

  carousel: Flickity;

  projects: Work[];

  constructor() { }

  ngOnInit() {
    this.setWorkArray();
  }

  ngAfterViewInit() {
    this.initialiseCarousel();
  }

  initialiseCarousel() {
    this.carousel = new Flickity('.carousel', {
      autoPlay: true
    });
  }

  setWorkArray() {
    const projects: Work[] = [
      new Work(
         'Beast Mode',
         'A great site',
         'http://beastmodeacademy.co.uk/wp-content/themes/beastmode_theme/img/STORM%20BANNER%20web%201.jpg'
       ),
       new Work(
         'Takamo Auto Clinic',
         'A garage with a digital edge',
         'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/IMac_vector.svg/1449px-IMac_vector.svg.png'
       )
    ];
    this.projects = projects;
  }

}
