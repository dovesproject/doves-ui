import { Component, Input } from '@angular/core';
import { Explanation } from '../explanation';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.css']
})
export class ExplanationComponent {

  @Input()
  explanation : Explanation | undefined;
}
