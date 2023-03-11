import { Component, Input } from '@angular/core';
import { Explanation } from '../explanation';

@Component({
  selector: 'app-explanations',
  templateUrl: './explanations.component.html',
  styleUrls: ['./explanations.component.css']
})
export class ExplanationsComponent {

  @Input()
  explanations : Explanation [] = []
}
