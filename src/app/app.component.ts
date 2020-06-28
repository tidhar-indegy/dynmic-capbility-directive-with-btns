import { Component, VERSION, ViewContainerRef, ViewChild } from "@angular/core";
import { CompGeneratorService } from "./services/comp-generator.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [CompGeneratorService]
})
export class AppComponent {
  @ViewChild("container_one", { read: ViewContainerRef }) colorsVcr;
  @ViewChild("container_two", { read: ViewContainerRef }) colors2Vcr;
  currentColor: string;
  
  done(evt: any) {
    console.log('Done', evt);
  }

  moveRedToGroup2(evt:MouseEvent){
    evt.currentTarget['disabled'] = true;
    this.colorsVcr = this.colors2Vcr
  }
}
