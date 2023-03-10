import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-regulatory',
  templateUrl: './regulatory.component.html',
  styleUrls: ['./regulatory.component.css']
})
export class RegulatoryComponent {

  @Input()
  fdaApproved : boolean = false;

  @Input()
  fdaCleared : boolean = false;
}
