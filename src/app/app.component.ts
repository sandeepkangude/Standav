import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ContactModel } from './app.model';

/**
 * Main Component
 *
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Title of the app
   * 
   * @type {string}
   * @memberof AppComponent
   */
  title: string;

  /**
   * flag to show/hide contact list
   * 
   * @type {boolean}
   * @memberof AppComponent
   */
  displayContactList: boolean;

  /**
   * List of contacts
   * 
   * @type {Array<ContactModel>}
   * @memberof AppComponent
   */
  contactList: Array<ContactModel>;

  /**
   * Creates an instance of AppComponent.
   * @memberof AppComponent
   */
  constructor() {
    this.title = 'My App';
  }

  /**
   * Open contact list action
   * 
   * @memberof AppComponent
   */
  OpenContactList(): void {
    this.displayContactList = true;
    this.contactList = [
      {
        id: 1,
        image: 'http://api.randomuser.me/portraits/men/49.jpg',
        name: 'Scott Stevens',
        address: '5842 Hillcrest Rd',
        email: 'scott.stevens@example.com',
        phone: '(870) 288-4149'
      },
      {
        id: 1,
        image: 'http://api.randomuser.me/portraits/men/97.jpg',
        name: 'Seth Frazier',
        address: '7396 E North St',
        email: 'seth.frazier@example.com',
        phone: '(560) 180-4143'
      },
      {
        id: 1,
        image: 'http://api.randomuser.me/portraits/women/90.jpg',
        name: 'Jean Myers',
        address: '4949 W Dallas St',
        email: 'jean.myers@example.com',
        phone: '(477) 792-2822'
      }
    ];
  }


  /**
   * Close contact list action
   * 
   * @memberof AppComponent
   */
  CloseContactList(): void {
    this.displayContactList = false;
    console.log(this.contactList);
    this.contactList = [];
  }
}
