import { Component, OnInit, EventEmitter, Output } from '@angular/core';

/**
 * Close button component
 *
 * @export
 * @class CloseButtonComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.css']
})
export class CloseButtonComponent {

  /**
   * Close output event of CloseButton Component
   * 
   * @type {EventEmitter<any>}
   * @memberof CloseButtonComponent
   */
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  /**
   * Emit close event of Close Component
   *
   * @memberof CloseButtonComponent
   */
  close() {
    this.onClose.emit();
  }
}
