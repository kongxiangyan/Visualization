import { Component, OnInit } from "@angular/core";
import { Promise } from "q";
import { TransferService } from "src/app/service/data/transfer.service";
import { EventService } from 'src/app/service/event/event.service';
declare var d3;


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  title = "Visualization-Lab";
  if_file = false;
  file = "上传文件";

  constructor(private dataTransfer: TransferService, private eventEmitter: EventService) {}

  ngOnInit() {}

  /**
   * @description 在input组件变化时触发，获取input组件的输入值，并进行处理
   * @author cigaret
   * @date 2018-12-21
   * @param {*} input
   * @memberof HeaderComponent
   */
  getFile(input) {
    console.info("检测到文件上传");
    let file = input.files[0];
    this.file = file.name;

    let filereader = new FileReader();

    // 默认文件解析选项为GBK
    filereader.readAsText(file, "GBK");
    filereader.onload = () => {
      console.log("读取到CSV数据如下", filereader.result);
      let promise = Promise(resolve => {
        console.log("开始解析CSV");
        let data = d3.csvParse(filereader.result, function(item) {
          return {
            name: item.name,
            type: item.type,
            value: item.value,
            date: item.date
          };
        });
        resolve(data);
      });
      promise.then(value => {
        console.log("CSV解析后的数据如下", JSON.stringify(value));
        this.if_file = true;
        this.dataTransfer.setData(value);
      });
    };
  }

  /**
   * @description 通知图表组件拉取数据，进入播放程序
   * @author cigaret
   * @date 2018-12-21
   * @memberof HeaderComponent
   */
  draw() {
    console.log("进行绘图");
    this.eventEmitter.emit({
        event: "start",
        message: "数据就绪，可以开始了~"
    });
  }
}
