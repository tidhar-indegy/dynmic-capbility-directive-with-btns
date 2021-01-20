import { Directive, Output, EventEmitter, Input, ViewContainerRef } from "@angular/core";
import { Subject } from "rxjs";
import { BlueComponent } from "./blue.component";
import { CompGeneratorService } from "../../services/comp-generator.service";
import { AppComponent } from "../../app.component";

@Directive({
  selector: "[appBlue]",
  providers: [CompGeneratorService]
})
export class BlueDirective {
  @Output() onDone = new EventEmitter();
  _onClickBtn = new Subject();
  isDefualtVCR = true
  @Input("appBlue") set ref(vcr ) {
    if (vcr) {
      this.isDefualtVCR = false;
      this.compGeneratorService.createComponent(
        BlueComponent,
        vcr,
        this._onClickBtn
      );
      
      this._onClickBtn.subscribe(() => {
       this.host.currentColor = "blue"
        setTimeout(() => this.onDone.emit("blue"), 300);
      });
    }
  }
  constructor(
   private compGeneratorService: CompGeneratorService,
   private host:AppComponent
   ) {}

}
