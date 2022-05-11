import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  sendMessage(event: any) {
      this.notifyParent.emit(event.target.value);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
