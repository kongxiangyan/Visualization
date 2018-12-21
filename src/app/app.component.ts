import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
  }
}
