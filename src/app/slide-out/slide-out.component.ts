import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * This is the generic slide out component which can display any content.
 *
 * @export
 * @class SlideOutComponent
 */
@Component({
  selector: 'app-slide-out',
  templateUrl: './slide-out.component.html',
  styleUrls: ['./slide-out.component.css']
})
export class SlideOutComponent {
  @Input() display: boolean;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() onAction1: EventEmitter<any> = new EventEmitter<any>();
  @Output() onAction2: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Creates an instance of SlideOutComponent.
   * @memberof SlideOutComponent
   */
  constructor() { }

  /**
   * Close event of slide out conponent
   *
   * @memberof SlideOutComponent
   */
  CloseSlide() {
    this.display = false;
    this.onClose.emit();
  }

  /**
   * Action 1 event of SlideOut Component
   *
   * @memberof SlideOutComponent
   */
  Action1() {
    console.log('Action 1');
    this.onAction1.emit();
  }

  /**
   * Action 2 event of SlideOut component
   *
   * @memberof SlideOutComponent
   */
  Action2() {
    console.log('Action 2');
    this.onAction2.emit();
  }
}
