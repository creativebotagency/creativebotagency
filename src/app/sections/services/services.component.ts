import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Service[] = [];

  constructor() { }

  ngOnInit() {
    this.createServices();
  }

  createServices() {
    this.services.push(new Service(
      'Mobile App Development',
      'Cross platform mobile app development for iOS, Android and Windows',
      'ion-ios-phone-portrait'
    ));
    this.services.push(new Service(
      'Website Development',
      'Development of beautiful, mobile-friendly websites of any scale',
      'ion-ios-desktop'
    ));
    this.services.push(new Service(
      'UI & UX Design',
      'We can create the user interface and user experience for your product with an exceptinal attention to detail',
      'ion-ios-color-filter'
    ));
    this.services.push(new Service(
      'E-commerce',
      'We use Woocommerce to create feature-rich e-commerce websites',
      'ion-ios-cart'
    ));
    this.services.push(new Service(
      'Wordpress Development',
      'We can create a content management system for your website using Wordpress',
      'ion-logo-wordpress'
    ));
    this.services.push(new Service(
      'Support & Maintenance',
      'We can offer you any support that you require and can look after your app or website',
      'ion-ios-hammer'
    ));
  }

}
