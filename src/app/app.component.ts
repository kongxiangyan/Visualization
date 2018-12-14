import { Component } from "@angular/core";
import { timer } from "rxjs";
declare var d3;

const CONFIG = {
  // 数据源的编码方式。
  // 默认为GBK,按需可修改为UTF-8等。
  // 如果输入的数据是用Excel编写的csv文件，那么大概率应该使用GBK。
  encoding: "GBK",

  // 每个时间节点最多显示的条目数。
  max_number: 10,

  // 控制是否显示顶部附加信息文字。
  showMessage: false,

  // !!!请确保打开此项时，使用的是标准日期格式！!!(即：YYYY-MM-DD HH:MM)
  // 时间自动排序。
  // 如果关闭，排序顺序为csv表格的时间字段自上而下的出现顺序。
  // 如果你的日期格式为标准的日期格式，则可以无视数据排序，达到自动按照日期顺序排序的效果。
  // 开启auto_sort可以实现时间的自动补间。
  auto_sort: false,
  timeFormat: "%Y-%m-%d",

  // 倒序，使得最短的条位于最上方
  reverse: false,

  // 颜色根据什么字段区分？
  divide_by: "name",

  // 字段的值与其对应的颜色值
  color: {
    // 张三: "#00318b",
    // 李四: "#007123"
  },

  // 颜色绑定增长率
  changeable_color: false,

  // 附加信息内容。
  itemLabel: "左侧文字",
  typeLabel: "右侧文字",
  // 榜首项目信息的水平位置 。
  item_x: 400,

  // 时间点间隔时间。
  interval_time: 2,

  // 上方文字水平高度。
  text_y: -50,

  // 右侧文字横坐标
  text_x: 1000,
  // 偏移量
  offset: 300,

  // 长度小于display_barInfo的bar将不显示barInfo。
  display_barInfo: 200,

  // 使用计数器
  // 注意！使用计时器和使用类型目前不能兼容，即不能同时开启！
  // 计数器会出现在右上角，记录着当前榜首的持续时间。
  use_counter: false,
  // 每个时间节点对于计数器的步长。
  // 比如时间节点日期的间隔可能为1周（七天），那么step的值就应该为7。
  step: 7,

  // 格式化数值
  // 这里控制着数值的显示位数。主要靠修改中间的数字完成，如果为1则为保留一位小数。
  format: ".0f",

  // 图表左右上下间距。
  left_margin: 150,
  right_margin: 150,
  top_margin: 106,
  bottom_margin: 50,

  // 时间标签坐标。
  dateLabel_x: 1440,
  dateLabel_y: 750,

  // 允许大于平均值的条消失时上浮。
  allow_up: false,

  // 设置动画效果，如果为true，则新进入的条目从0开始。
  enter_from_0: false,

  // 如果所有数字都很大，导致拉不开差距则开启此项使得坐标原点变换为（最小值）*2-（最大值）
  big_value: false,

  // 如果要使用半对数坐标，则开启此项
  use_semilogarithmic_coordinate: false,

  // barinfo太长？也许可以试试这个
  long: false,

  // 延迟多少个时间节点开始
  wait: 0,

  // 单独控制交换动画速度倍率
  update_rate: 1,

  // 开启匀速动画效果
  animation: undefined //'linear',
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Visualization";
  if_file = false;
  file = "上传文件";
  svg_area;
  data;

  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.svg_area = document.getElementById("area");
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
    console.info(
      "视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret"
    );
  }

  getFile(input) {
    console.info("检测到文件上传");
    let file = input.files[0];
    this.if_file = true;
    this.file = file.name;

    let filereader = new FileReader();
    filereader.readAsText(file, CONFIG.encoding);
    filereader.onload = () => {
      console.log("读取到CSV数据如下", filereader.result);
      let data = d3.csvParse(filereader.result, function(d) {
        console.info(d);
        return {
          name: d.name,
          type: d.type,
          value: d.value,
          date: d.date
        };
      });
      this.data = data;
      console.log("CSV解析后的数据如下", JSON.stringify(data));
    };
  }

  areaReset() {
    this.svg_area.innerHTML = "";
  }

  draw() {
    this.areaReset();
    let config = CONFIG;
    let data = this.data;
    let date = [];

    // 遍历读入date
    data.forEach(element => {
      if (date.indexOf(element["date"]) == -1) {
        date.push(element["date"]);
      }
    });

    let auto_sort = config.auto_sort;
    let time;
    if (auto_sort) {
      time = date.sort((x, y) => Number(new Date(x)) - Number(new Date(y)));
    } else {
      time = date;
    }

    let use_semilogarithmic_coordinate = config.use_semilogarithmic_coordinate;
    let big_value = config.big_value;
    let divide_by = config.divide_by;

    let name_list = [];

    // 遍历读入name
    data
      .sort((a, b) => Number(b.value) - Number(a.value))
      .forEach(e => {
        if (name_list.indexOf(e.name) == -1) {
          name_list.push(e.name);
        }
      });

    let rate = [];
    let colorRange = d3.interpolateCubehelix("#003AAB", "#01ADFF");
    let changeable_color = config.changeable_color;
    // 选择颜色
    function getColor(d) {
      let r = 0.0;
      if (changeable_color) {
        let v =
          Math.abs(rate[d.name] - rate["MIN_RATE"]) /
          (rate["MAX_RATE"] - rate["MIN_RATE"]); // 0-1标准化
        if (isNaN(v) || v == -1) {
          return colorRange(0.6); // ???为什么要0.6
        }
        return colorRange(v);
      }

      if (d[divide_by] in config.color) return config.color[d[divide_by]];
      else {
        return d3.schemeCategory10[Math.floor(d[divide_by].charCodeAt() % 10)];
      }
    }

    // 控制是否显示顶部附加信息文字
    let showMessage = config.showMessage;
    // 允许大于平均值的条消失时上浮
    let allow_up = config.allow_up;
    // 时间点间隔时间
    let interval_time = config.interval_time;
    // 上方文字水平高度。
    let text_y = config.text_y;
    // 上方的文字，一左一右
    let itemLabel = config.itemLabel;
    let typeLabel = config.typeLabel;
    // 长度小于display_barInfo的bar将不显示barInfo
    let display_barInfo = config.display_barInfo;

    // 显示类型
    // 不根据name区分颜色，则显示类型
    if (divide_by != "name") {
      var use_type_info = true;
    } else {
      var use_type_info = false;
    }

    // 使用计数器
    let use_counter = config.use_counter;
    // 每个数据的间隔日期
    let step = config.step;
    let long = config.long;
    let format = config.format;
    let left_margin = config.left_margin;
    let right_margin = config.right_margin;
    let top_margin = config.top_margin;
    let bottom_margin = config.bottom_margin;
    let timeFormat = config.timeFormat;
    let item_x = config.item_x;
    let max_number = config.max_number;
    let reverse = config.reverse;
    let text_x = config.text_x;
    let offset = config.offset;
    let animation = config.animation;
    const margin = {
      left: left_margin,
      right: right_margin,
      top: top_margin,
      bottom: bottom_margin
    };

    var enter_from_0 = config.enter_from_0;
    interval_time /= 3;
    var lastData = [];
    var currentdate = time[0].toString();
    var currentData = [];
    var lastname;
    const svg = d3.select("svg");

    let style = window.getComputedStyle(this.svg_area);
    const width = parseInt(style.width);
    const height = parseInt(style.height);
    console.info(width, height);

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom - 32;
    var dateLabel_y = height - margin.top - margin.bottom - 32;
    const xValue = d => Number(d.value);
    const yValue = d => d.name;

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    const xAxisG = g
      .append("g")
      .attr("transform", `translate(0, ${innerHeight})`);
    const yAxisG = g.append("g");

    xAxisG
      .append("text")
      .attr("class", "axis-label")
      .attr("x", innerWidth / 2)
      .attr("y", 100);

    var xScale = d3.scaleLinear();
    if (use_semilogarithmic_coordinate) {
      xScale = d3.scalePow().exponent(0.5);
    } else {
      xScale = d3.scaleLinear();
    }
    const yScale = d3
      .scaleBand()
      .paddingInner(0.3)
      .paddingOuter(0);

    const xTicks = 10;
    const xAxis = d3
      .axisBottom()
      .scale(xScale)
      .ticks(xTicks)
      .tickPadding(20)
      .tickFormat(d => {
        if (d == 0) {
          return "";
        }
        return d;
      })
      .tickSize(-innerHeight);

    const yAxis = d3
      .axisLeft()
      .scale(yScale)
      .tickPadding(5)
      .tickSize(-innerWidth);

    var dateLabel = g
      .insert("text")
      .data(currentdate)
      .attr("class", "dateLabel")
      .attr("x", innerWidth)
      .attr("y", innerHeight)
      .attr("text-anchor", function() {
        return "end";
      })

      .text(currentdate);

    var topLabel = g
      .insert("text")
      .attr("class", "topLabel")
      .attr("x", item_x)
      .attr("y", text_y);

    function dataSort() {
      if (reverse) {
        currentData.sort(function(a, b) {
          if (Number(a.value) == Number(b.value)) {
            var r1 = 0;
            var r2 = 0;
            for (let index = 0; index < a.name.length; index++) {
              r1 = r1 + a.name.charCodeAt(index);
            }
            for (let index = 0; index < b.name.length; index++) {
              r2 = r2 + b.name.charCodeAt(index);
            }
            return r2 - r1;
          } else {
            return Number(a.value) - Number(b.value);
          }
        });
      } else {
        currentData.sort(function(a, b) {
          if (Number(a.value) == Number(b.value)) {
            var r1 = 0;
            var r2 = 0;
            for (let index = 0; index < a.name.length; index++) {
              r1 = r1 + a.name.charCodeAt(index);
            }
            for (let index = 0; index < b.name.length; index++) {
              r2 = r2 + b.name.charCodeAt(index);
            }
            return r2 - r1;
          } else {
            return Number(b.value) - Number(a.value);
          }
        });
      }
    }

    function getCurrentData(date) {
      rate = [];
      currentData = [];
      data.forEach(element => {
        if (element["date"] == date && parseFloat(element["value"]) != 0) {
          currentData.push(element);
        }
      });

      rate["MAX_RATE"] = 0;
      rate["MIN_RATE"] = 1;
      currentData.forEach(e => {
        // _cName = e.name;
        lastData.forEach(el => {
          if (el.name == e.name) {
            rate[e.name] = Number(Number(e.value) - Number(el.value));
          }
        });
        if (rate[e.name] == undefined) {
          rate[e.name] = rate["MIN_RATE"];
        }
        if (rate[e.name] > rate["MAX_RATE"]) {
          rate["MAX_RATE"] = rate[e.name];
        } else if (rate[e.name] < rate["MIN_RATE"]) {
          rate["MIN_RATE"] = rate[e.name];
        }
      });
      currentData = currentData.slice(0, max_number);

      d3.transition("2").each(redraw);
      lastData = currentData;
    }

    if (showMessage) {
      // 左1文字
      var topInfo = g
        .insert("text")
        .attr("class", "growth")
        .attr("x", 0)
        .attr("y", text_y)
        .text(itemLabel);

      // 右1文字
      g.insert("text")
        .attr("class", "growth")
        .attr("x", text_x)
        .attr("y", text_y)
        .text(typeLabel);

      // 榜首日期计数
      if (use_counter == true) {
        var days = g
          .insert("text")
          .attr("class", "days")
          .attr("x", text_x + offset)
          .attr("y", text_y);
      } else {
        // 显示榜首type
        if (use_type_info == true) {
          var top_type = g
            .insert("text")
            .attr("class", "days")
            .attr("x", text_x + offset)
            .attr("y", text_y);
        }
      }
    }

    var lastname;
    var counter = {
      value: 1
    };

    var avg = 0;

    function redraw() {
      if (currentData.length == 0) return;
      yScale
        .domain(currentData.map(d => d.name).reverse())
        .range([innerHeight, 0]);
      // x轴范围
      // 如果所有数字很大导致拉不开差距

      if (big_value) {
        xScale
          .domain([
            2 * d3.min(currentData, xValue) - d3.max(currentData, xValue),
            d3.max(currentData, xValue) + 10
          ])
          .range([0, innerWidth]);
      } else {
        xScale
          .domain([0, d3.max(currentData, xValue) + 1])
          .range([0, innerWidth]);
      }
      if (auto_sort) {
        dateLabel
          .data(currentData)
          .transition()
          .duration(3000 * interval_time)
          .ease(d3.easeLinear)
          .tween("text", function(d) {
            var self = this;
            var i = d3.interpolateDate(
              new Date(self.textContent),
              new Date(d.date)
            );
            // var prec = (new Date(d.date) + "").split(".");
            // var round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;
            return function(t) {
              var dateformat = d3.timeFormat(timeFormat);
              self.textContent = dateformat(i(t));
            };
          });
      } else {
        dateLabel.text(currentdate);
      }

      xAxisG
        .transition()
        .duration(3000 * interval_time)
        .ease(d3.easeLinear)
        .call(xAxis);
      yAxisG
        .transition()
        .duration(3000 * interval_time)
        .ease(d3.easeLinear)
        .call(yAxis);

      yAxisG.selectAll(".tick").remove();

      var bar = g.selectAll(".bar").data(currentData, function(d) {
        return d.name;
      });

      if (showMessage) {
        // 榜首文字
        topLabel.data(currentData).text(function(d) {
          if (lastname == d.name) {
            counter.value = counter.value + step;
          } else {
            counter.value = 1;
          }
          lastname = d.name;
          return d.name;
        });

        if (use_counter == true) {
          // 榜首持续时间更新
          days
            .data(currentData)
            .transition()
            .duration(3000 * interval_time)
            .ease(d3.easeLinear)
            .tween("text", function(d) {
              var self = this;
              var i = d3.interpolate(self.textContent, counter.value),
                prec = (counter.value + "").split("."),
                round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
              return function(t) {
                self.textContent = d3.format(format)(
                  Math.round(i(t) * round) / round
                );
              };
            });
        } else if (use_type_info == true) {
          // 榜首type更新
          top_type.data(currentData).text(function(d) {
            return d["type"];
          });
        }
      }

      var barEnter = bar
        .enter()
        .insert("g", ".axis")
        .attr("class", "bar")
        .attr("transform", function(d) {
          return "translate(0," + yScale(yValue(d)) + ")";
        });

      barEnter
        .append("rect")
        .attr("width", function(d) {
          if (enter_from_0) {
            return 0;
          } else {
            return xScale(currentData[currentData.length - 1].value);
          }
        })
        .attr("fill-opacity", 0)
        .attr("height", 26)
        .attr("y", 50)
        .style("fill", d => getColor(d))
        .transition("a")
        .delay(500 * interval_time)
        .duration(2490 * interval_time)
        .attr("y", 0)
        .attr("width", d => xScale(xValue(d)))
        .attr("fill-opacity", 1);

      barEnter
        .append("text")
        .attr("y", 50)
        .attr("fill-opacity", 0)
        .style("fill", d => getColor(d))
        .transition("2")
        .delay(500 * interval_time)
        .duration(2490 * interval_time)
        .attr("fill-opacity", 1)
        .attr("y", 0)
        .attr("class", function(d) {
          return "label ";
        })
        .attr("x", -15)
        .attr("y", 20)
        .attr("text-anchor", "end")
        .text(function(d) {
          if (long) {
            return "";
          }
          return d.name;
        });
      // bar上文字
      var barInfo = barEnter
        .append("text")
        .attr("x", function(d) {
          if (long) return 10;
          if (enter_from_0) {
            return 0;
          } else {
            return xScale(currentData[currentData.length - 1].value);
          }
        })
        .attr("stroke", d => getColor(d))
        .attr("class", function() {
          return "barInfo";
        })
        .attr("y", 50)
        .attr("stroke-width", "0px")
        .attr("fill-opacity", 0)
        .transition()
        .delay(500 * interval_time)
        .duration(2490 * interval_time)
        .text(function(d) {
          if (use_type_info) {
            return d[divide_by] + "-" + d.name;
          }
          return d.name;
        })
        .attr("x", d => {
          if (long) return 10;
          return xScale(xValue(d)) - 10;
        })
        .attr("fill-opacity", function(d) {
          if (xScale(xValue(d)) - 10 < display_barInfo) {
            return 0;
          }
          return 1;
        })
        .attr("y", 2)
        .attr("dy", ".5em")
        .attr("text-anchor", function() {
          if (long) return "start";
          return "end";
        })
        .attr("stroke-width", function(d) {
          if (xScale(xValue(d)) - 10 < display_barInfo) {
            return "0px";
          }
          return "1px";
        });
      if (long) {
        barInfo.tween("text", function(d) {
          var self = this;

          var i = d3.interpolate(self.textContent, Number(d.value)),
            prec = (Number(d.value) + "").split("."),
            round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
          return function(t) {
            self.textContent =
              d[divide_by] +
              "-" +
              d.name +
              "  数值:" +
              d3.format(format)(Math.round(i(t) * round) / round);
          };
        });
      }
      if (!long) {
        barEnter
          .append("text")
          .attr("x", function() {
            if (long) {
              return 10;
            }
            if (enter_from_0) {
              return 0;
            } else {
              return xScale(currentData[currentData.length - 1].value);
            }
          })
          .attr("y", 50)
          .attr("fill-opacity", 0)
          .style("fill", d => getColor(d))
          .transition()
          .duration(2990 * interval_time)
          .tween("text", function(d) {
            var self = this;
            var i = d3.interpolate(self.textContent, Number(d.value)),
              prec = (Number(d.value) + "").split("."),
              round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
            return function(t) {
              self.textContent = d3.format(format)(
                Math.round(i(t) * round) / round
              );
              let value = self.textContent;
            };
          })
          .attr("fill-opacity", 1)
          .attr("y", 0)
          .attr("class", function(d) {
            return "value";
          })
          .attr("x", d => {
            return xScale(xValue(d)) + 10;
          })
          .attr("y", 22);
      }

      var barUpdate = bar
        .transition("2")
        .duration(2990 * interval_time)
        .ease(d3.easeLinear);

      barUpdate
        .select("rect")
        .style("fill", d => getColor(d))
        .attr("width", d => xScale(xValue(d)));

      barUpdate
        .select(".label")
        .attr("class", function(d) {
          return "label ";
        })
        .style("fill", d => getColor(d))
        .attr("width", d => xScale(xValue(d)));
      if (!long) {
        barUpdate
          .select(".value")
          .attr("class", function(d) {
            return "value";
          })
          .style("fill", d => getColor(d))
          .attr("width", d => xScale(xValue(d)));
      }
      barUpdate.select(".barInfo").attr("stroke", function(d) {
        return getColor(d);
      });

      var barInfo = barUpdate
        .select(".barInfo")
        .text(function(d) {
          if (use_type_info) {
            return d[divide_by] + "-" + d.name;
          }
          return d.name;
        })
        .attr("x", d => {
          if (long) return 10;
          return xScale(xValue(d)) - 10;
        })
        .attr("fill-opacity", function(d) {
          if (xScale(xValue(d)) - 10 < display_barInfo) {
            return 0;
          }
          return 1;
        })

        .attr("stroke-width", function(d) {
          if (xScale(xValue(d)) - 10 < display_barInfo) {
            return "0px";
          }
          return "1px";
        });

      if (long) {
        barInfo.tween("text", function(d) {
          var self = this;
          var str = d[divide_by] + "-" + d.name + "  数值:";

          var i = d3.interpolate(
              self.textContent.slice(str.length, 99),
              Number(d.value)
            ),
            prec = (Number(d.value) + "").split("."),
            round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
          return function(t) {
            self.textContent =
              d[divide_by] +
              "-" +
              d.name +
              "  数值:" +
              d3.format(format)(Math.round(i(t) * round) / round);
          };
        });
      }
      if (!long) {
        barUpdate
          .select(".value")
          .tween("text", function(d) {
            var self = this;
            var i = d3.interpolate(self.textContent, Number(d.value)),
              prec = (Number(d.value) + "").split("."),
              round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
            return function(t) {
              self.textContent = d3.format(format)(
                Math.round(i(t) * round) / round
              );
              d.value = self.textContent;
            };
          })
          .duration(2990 * interval_time)
          .attr("x", d => xScale(xValue(d)) + 10);
      }
      avg =
        (Number(currentData[0]["value"]) +
          Number(currentData[currentData.length - 1]["value"])) /
        2;

      var barExit = bar
        .exit()
        .attr("fill-opacity", 1)
        .transition()
        .duration(2500 * interval_time);

      barExit
        .attr("transform", function(d) {
          if (Number(d.value) > avg && allow_up) {
            return "translate(0," + "-100" + ")";
          }
          return "translate(0," + "880" + ")";
        })
        .remove()
        .attr("fill-opacity", 0);
      barExit
        .select("rect")
        .attr("fill-opacity", 0)
        .attr("width", xScale(currentData[currentData.length - 1]["value"]));
      if (!long) {
        barExit
          .select(".value")
          .attr("fill-opacity", 0)
          .attr("x", () => {
            return xScale(currentData[currentData.length - 1]["value"]);
          });
      }
      barExit
        .select(".barInfo")
        .attr("fill-opacity", 0)
        .attr("stroke-width", function(d) {
          return "0px";
        })
        .attr("x", () => {
          if (long) return 10;
          return xScale(currentData[currentData.length - 1]["value"] - 10);
        });
      barExit.select(".label").attr("fill-opacity", 0);
    }

    function change() {
      dataSort();
      yScale
        .domain(currentData.map(d => d.name).reverse())
        .range([innerHeight, 0]);
      if (animation == "linear") {
        g.selectAll(".bar")
          .data(currentData, function(d) {
            return d.name;
          })
          .transition("1")
          .ease(d3.easeLinear)
          .duration(3000 * update_rate * interval_time)
          .attr("transform", function(d) {
            return "translate(0," + yScale(yValue(d)) + ")";
          });
      } else {
        g.selectAll(".bar")
          .data(currentData, function(d) {
            return d.name;
          })
          .transition("1")
          .duration(3000 * update_rate * interval_time)
          .attr("transform", function(d) {
            return "translate(0," + yScale(yValue(d)) + ")";
          });
      }
    }

    var i = 0;
    var p = config.wait;
    var update_rate = config.update_rate;
    var inter = setInterval(function next() {
      // 空过p回合
      while (p) {
        p -= 1;
        return;
      }
      currentdate = time[i];
      getCurrentData(time[i]);
      i++;

      if (i >= time.length) {
        window.clearInterval(Number(inter));
      }
    }, 3000 * interval_time);
    setInterval(() => {
      console.log(currentData);
      d3.transition().each(change);
    }, 3000 * update_rate * interval_time);
  }
}
