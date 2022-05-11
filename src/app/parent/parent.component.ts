import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  message: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  getMessage(evt: any) {

    this.message = evt;

    console.log(evt)
        // Do something with the notification (evt) sent by the child!
    }

}
