import { Component, OnInit,Input } from '@angular/core';
import { Subject } from 'rxjs'; 

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent  {
  @Input() done = new Subject();

}