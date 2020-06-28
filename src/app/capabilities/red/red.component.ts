import {
  Component,
  OnInit,
  ViewChild,
  Output,
  Input,
} from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-red",
  templateUrl: "./red.component.html",
  styleUrls: ["./red.component.css"]
})
export class RedComponent {
  @Input() done = new Subject();
}
