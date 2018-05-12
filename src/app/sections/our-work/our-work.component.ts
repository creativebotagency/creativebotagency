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
  }

  ngAfterViewInit() {
    this.initialiseCarousel();
  }

  initialiseCarousel() {
    this.setWorkArray();
    this.carousel = new Flickity('.carousel', {});
  }

  setWorkArray() {
    const projects: Work[] = [];
    projects.push(new Work(
      'Beast Mode',
      'A great site',
      'http://beastmodeacademy.co.uk/wp-content/themes/beastmode_theme/img/STORM%20BANNER%20web%201.jpg'
    ));
    this.projects = projects;
  }

}
