import { Component, Input } from '@angular/core';
import { ContactModel } from '../app.model';
/**
 * This component is used to display list of contacts
 *
 * @export
 * @class ContactListComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  /**
   * Input Data for contct list
   * 
   * @type {Array<ContactModel>}
   * @memberof ContactListComponent
   */
  @Input() data: Array<ContactModel>;
  constructor() { }

}
