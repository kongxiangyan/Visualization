(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced. -->\n<!--\n  <div style=\"text-align:center\">\n    <h1>\n      Welcome to {{ title }}!\n    </h1>\n    <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n  </div>\n-->\n\n<!-- 容器 -->\n<div fxLayout=\"column\" fxLayoutAlign=\"stretch\" style=\"height: 100%;\">\n  <!-- 顶部导航栏 -->\n  <div\n    class=\"navbar-header\"\n    fxFlex=\"0 0 auto\"\n    fxLayout=\"row\"\n    fxLayoutAlign=\"space-between center\"\n    style=\"background-color: #3f51b5; height: 56px; padding: 8px 16px;\"\n  >\n    <button mat-button>\n      <img src=\"../assets/image/homepage/angular-white-transparent.svg\" />\n      Visualization\n    </button>\n    <button mat-button>\n      <label for=\"inputfile\" title=\"点击上传文件\">{{ file }}</label>\n      <input\n        type=\"file\"\n        name=\"timeSeriesData\"\n        id=\"inputfile\"\n        hidden\n        (change)=\"getFile($event.target)\"\n      />\n    </button>\n    <button mat-button *ngIf=\"if_file\" (click)=\"draw()\">START</button>\n    <a mat-button href=\"https://github.com/kongxiangyan\">\n      <img src=\"../assets/image/homepage/github-circle-white-transparent.svg\" />\n      GitHub\n    </a>\n  </div>\n  <!-- 页面主体 -->\n  <div fxFlex=\"1 1 auto\" class=\"contentcontainer\"><svg id=\"area\"></svg></div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-header {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n  .navbar-header img {\n    margin: 0 4px 3px 0;\n    height: 26px;\n    line-height: 38px; }\n  .navbar-header button,\n  .navbar-header a {\n    color: #fff; }\n  .navbar-header button *,\n    .navbar-header a * {\n      cursor: pointer; }\n  .contentcontainer {\n  position: relative; }\n  .contentcontainer #area {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEdpdExvY2FsXFxfUHJvamVjdHNcXFZpc3VhbGl6YXRpb24vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtIQUNvRSxFQWFyRTtFQWZEO0lBSUksb0JBQW1CO0lBQ25CLGFBQVk7SUFDWixrQkFBaUIsRUFDbEI7RUFQSDs7SUFVSSxZQVhZLEVBZWI7RUFkSDs7TUFZTSxnQkFBZSxFQUNoQjtFQUdMO0VBQ0UsbUJBQWtCLEVBTW5CO0VBUEQ7SUFHSSxtQkFBa0I7SUFDbEIsWUFBVztJQUNYLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0ZXh0Y29sb3I6ICNmZmY7XHJcbi5uYXZiYXItaGVhZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbjogMCA0cHggM3B4IDA7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICB9XHJcbiAgYnV0dG9uLFxyXG4gIGEge1xyXG4gICAgY29sb3I6ICR0ZXh0Y29sb3I7XHJcbiAgICAqIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY29udGVudGNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICNhcmVhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CONFIG = {
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
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Visualization";
        this.if_file = false;
        this.file = "上传文件";
    }
    AppComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.svg_area = document.getElementById("area");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
        console.info("视觉效果及具体实现来源：动态排名数据可视化 ver1.3 By Jannchie，https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js ，扩展 By cigaret");
    };
    AppComponent.prototype.getFile = function (input) {
        var _this = this;
        console.info("检测到文件上传");
        var file = input.files[0];
        this.if_file = true;
        this.file = file.name;
        var filereader = new FileReader();
        filereader.readAsText(file, CONFIG.encoding);
        filereader.onload = function () {
            console.log("读取到CSV数据如下", filereader.result);
            var data = d3.csvParse(filereader.result, function (d) {
                console.info(d);
                return {
                    name: d.name,
                    type: d.type,
                    value: d.value,
                    date: d.date
                };
            });
            _this.data = data;
            console.log("CSV解析后的数据如下", JSON.stringify(data));
        };
    };
    AppComponent.prototype.areaReset = function () {
        this.svg_area.innerHTML = "";
    };
    AppComponent.prototype.draw = function () {
        this.areaReset();
        var config = CONFIG;
        var data = this.data;
        var date = [];
        // 遍历读入date
        data.forEach(function (element) {
            if (date.indexOf(element["date"]) == -1) {
                date.push(element["date"]);
            }
        });
        var auto_sort = config.auto_sort;
        var time;
        if (auto_sort) {
            time = date.sort(function (x, y) { return Number(new Date(x)) - Number(new Date(y)); });
        }
        else {
            time = date;
        }
        var use_semilogarithmic_coordinate = config.use_semilogarithmic_coordinate;
        var big_value = config.big_value;
        var divide_by = config.divide_by;
        var name_list = [];
        // 遍历读入name
        data
            .sort(function (a, b) { return Number(b.value) - Number(a.value); })
            .forEach(function (e) {
            if (name_list.indexOf(e.name) == -1) {
                name_list.push(e.name);
            }
        });
        var rate = [];
        var colorRange = d3.interpolateCubehelix("#003AAB", "#01ADFF");
        var changeable_color = config.changeable_color;
        // 选择颜色
        function getColor(d) {
            var r = 0.0;
            if (changeable_color) {
                var v = Math.abs(rate[d.name] - rate["MIN_RATE"]) /
                    (rate["MAX_RATE"] - rate["MIN_RATE"]); // 0-1标准化
                if (isNaN(v) || v == -1) {
                    return colorRange(0.6); // ???为什么要0.6
                }
                return colorRange(v);
            }
            if (d[divide_by] in config.color)
                return config.color[d[divide_by]];
            else {
                return d3.schemeCategory10[Math.floor(d[divide_by].charCodeAt() % 10)];
            }
        }
        // 控制是否显示顶部附加信息文字
        var showMessage = config.showMessage;
        // 允许大于平均值的条消失时上浮
        var allow_up = config.allow_up;
        // 时间点间隔时间
        var interval_time = config.interval_time;
        // 上方文字水平高度。
        var text_y = config.text_y;
        // 上方的文字，一左一右
        var itemLabel = config.itemLabel;
        var typeLabel = config.typeLabel;
        // 长度小于display_barInfo的bar将不显示barInfo
        var display_barInfo = config.display_barInfo;
        // 显示类型
        // 不根据name区分颜色，则显示类型
        if (divide_by != "name") {
            var use_type_info = true;
        }
        else {
            var use_type_info = false;
        }
        // 使用计数器
        var use_counter = config.use_counter;
        // 每个数据的间隔日期
        var step = config.step;
        var long = config.long;
        var format = config.format;
        var left_margin = config.left_margin;
        var right_margin = config.right_margin;
        var top_margin = config.top_margin;
        var bottom_margin = config.bottom_margin;
        var timeFormat = config.timeFormat;
        var item_x = config.item_x;
        var max_number = config.max_number;
        var reverse = config.reverse;
        var text_x = config.text_x;
        var offset = config.offset;
        var animation = config.animation;
        var margin = {
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
        var svg = d3.select("svg");
        var style = window.getComputedStyle(this.svg_area);
        var width = parseInt(style.width);
        var height = parseInt(style.height);
        console.info(width, height);
        var innerWidth = width - margin.left - margin.right;
        var innerHeight = height - margin.top - margin.bottom - 32;
        var dateLabel_y = height - margin.top - margin.bottom - 32;
        var xValue = function (d) { return Number(d.value); };
        var yValue = function (d) { return d.name; };
        var g = svg
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var xAxisG = g
            .append("g")
            .attr("transform", "translate(0, " + innerHeight + ")");
        var yAxisG = g.append("g");
        xAxisG
            .append("text")
            .attr("class", "axis-label")
            .attr("x", innerWidth / 2)
            .attr("y", 100);
        var xScale = d3.scaleLinear();
        if (use_semilogarithmic_coordinate) {
            xScale = d3.scalePow().exponent(0.5);
        }
        else {
            xScale = d3.scaleLinear();
        }
        var yScale = d3
            .scaleBand()
            .paddingInner(0.3)
            .paddingOuter(0);
        var xTicks = 10;
        var xAxis = d3
            .axisBottom()
            .scale(xScale)
            .ticks(xTicks)
            .tickPadding(20)
            .tickFormat(function (d) {
            if (d == 0) {
                return "";
            }
            return d;
        })
            .tickSize(-innerHeight);
        var yAxis = d3
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
            .attr("text-anchor", function () {
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
                currentData.sort(function (a, b) {
                    if (Number(a.value) == Number(b.value)) {
                        var r1 = 0;
                        var r2 = 0;
                        for (var index = 0; index < a.name.length; index++) {
                            r1 = r1 + a.name.charCodeAt(index);
                        }
                        for (var index = 0; index < b.name.length; index++) {
                            r2 = r2 + b.name.charCodeAt(index);
                        }
                        return r2 - r1;
                    }
                    else {
                        return Number(a.value) - Number(b.value);
                    }
                });
            }
            else {
                currentData.sort(function (a, b) {
                    if (Number(a.value) == Number(b.value)) {
                        var r1 = 0;
                        var r2 = 0;
                        for (var index = 0; index < a.name.length; index++) {
                            r1 = r1 + a.name.charCodeAt(index);
                        }
                        for (var index = 0; index < b.name.length; index++) {
                            r2 = r2 + b.name.charCodeAt(index);
                        }
                        return r2 - r1;
                    }
                    else {
                        return Number(b.value) - Number(a.value);
                    }
                });
            }
        }
        function getCurrentData(date) {
            rate = [];
            currentData = [];
            data.forEach(function (element) {
                if (element["date"] == date && parseFloat(element["value"]) != 0) {
                    currentData.push(element);
                }
            });
            rate["MAX_RATE"] = 0;
            rate["MIN_RATE"] = 1;
            currentData.forEach(function (e) {
                // _cName = e.name;
                lastData.forEach(function (el) {
                    if (el.name == e.name) {
                        rate[e.name] = Number(Number(e.value) - Number(el.value));
                    }
                });
                if (rate[e.name] == undefined) {
                    rate[e.name] = rate["MIN_RATE"];
                }
                if (rate[e.name] > rate["MAX_RATE"]) {
                    rate["MAX_RATE"] = rate[e.name];
                }
                else if (rate[e.name] < rate["MIN_RATE"]) {
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
            }
            else {
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
            if (currentData.length == 0)
                return;
            yScale
                .domain(currentData.map(function (d) { return d.name; }).reverse())
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
            }
            else {
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
                    .tween("text", function (d) {
                    var self = this;
                    var i = d3.interpolateDate(new Date(self.textContent), new Date(d.date));
                    // var prec = (new Date(d.date) + "").split(".");
                    // var round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;
                    return function (t) {
                        var dateformat = d3.timeFormat(timeFormat);
                        self.textContent = dateformat(i(t));
                    };
                });
            }
            else {
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
            var bar = g.selectAll(".bar").data(currentData, function (d) {
                return d.name;
            });
            if (showMessage) {
                // 榜首文字
                topLabel.data(currentData).text(function (d) {
                    if (lastname == d.name) {
                        counter.value = counter.value + step;
                    }
                    else {
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
                        .tween("text", function (d) {
                        var self = this;
                        var i = d3.interpolate(self.textContent, counter.value), prec = (counter.value + "").split("."), round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                        return function (t) {
                            self.textContent = d3.format(format)(Math.round(i(t) * round) / round);
                        };
                    });
                }
                else if (use_type_info == true) {
                    // 榜首type更新
                    top_type.data(currentData).text(function (d) {
                        return d["type"];
                    });
                }
            }
            var barEnter = bar
                .enter()
                .insert("g", ".axis")
                .attr("class", "bar")
                .attr("transform", function (d) {
                return "translate(0," + yScale(yValue(d)) + ")";
            });
            barEnter
                .append("rect")
                .attr("width", function (d) {
                if (enter_from_0) {
                    return 0;
                }
                else {
                    return xScale(currentData[currentData.length - 1].value);
                }
            })
                .attr("fill-opacity", 0)
                .attr("height", 26)
                .attr("y", 50)
                .style("fill", function (d) { return getColor(d); })
                .transition("a")
                .delay(500 * interval_time)
                .duration(2490 * interval_time)
                .attr("y", 0)
                .attr("width", function (d) { return xScale(xValue(d)); })
                .attr("fill-opacity", 1);
            barEnter
                .append("text")
                .attr("y", 50)
                .attr("fill-opacity", 0)
                .style("fill", function (d) { return getColor(d); })
                .transition("2")
                .delay(500 * interval_time)
                .duration(2490 * interval_time)
                .attr("fill-opacity", 1)
                .attr("y", 0)
                .attr("class", function (d) {
                return "label ";
            })
                .attr("x", -15)
                .attr("y", 20)
                .attr("text-anchor", "end")
                .text(function (d) {
                if (long) {
                    return "";
                }
                return d.name;
            });
            // bar上文字
            var barInfo = barEnter
                .append("text")
                .attr("x", function (d) {
                if (long)
                    return 10;
                if (enter_from_0) {
                    return 0;
                }
                else {
                    return xScale(currentData[currentData.length - 1].value);
                }
            })
                .attr("stroke", function (d) { return getColor(d); })
                .attr("class", function () {
                return "barInfo";
            })
                .attr("y", 50)
                .attr("stroke-width", "0px")
                .attr("fill-opacity", 0)
                .transition()
                .delay(500 * interval_time)
                .duration(2490 * interval_time)
                .text(function (d) {
                if (use_type_info) {
                    return d[divide_by] + "-" + d.name;
                }
                return d.name;
            })
                .attr("x", function (d) {
                if (long)
                    return 10;
                return xScale(xValue(d)) - 10;
            })
                .attr("fill-opacity", function (d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return 0;
                }
                return 1;
            })
                .attr("y", 2)
                .attr("dy", ".5em")
                .attr("text-anchor", function () {
                if (long)
                    return "start";
                return "end";
            })
                .attr("stroke-width", function (d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return "0px";
                }
                return "1px";
            });
            if (long) {
                barInfo.tween("text", function (d) {
                    var self = this;
                    var i = d3.interpolate(self.textContent, Number(d.value)), prec = (Number(d.value) + "").split("."), round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    return function (t) {
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
                    .attr("x", function () {
                    if (long) {
                        return 10;
                    }
                    if (enter_from_0) {
                        return 0;
                    }
                    else {
                        return xScale(currentData[currentData.length - 1].value);
                    }
                })
                    .attr("y", 50)
                    .attr("fill-opacity", 0)
                    .style("fill", function (d) { return getColor(d); })
                    .transition()
                    .duration(2990 * interval_time)
                    .tween("text", function (d) {
                    var self = this;
                    var i = d3.interpolate(self.textContent, Number(d.value)), prec = (Number(d.value) + "").split("."), round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    return function (t) {
                        self.textContent = d3.format(format)(Math.round(i(t) * round) / round);
                        var value = self.textContent;
                    };
                })
                    .attr("fill-opacity", 1)
                    .attr("y", 0)
                    .attr("class", function (d) {
                    return "value";
                })
                    .attr("x", function (d) {
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
                .style("fill", function (d) { return getColor(d); })
                .attr("width", function (d) { return xScale(xValue(d)); });
            barUpdate
                .select(".label")
                .attr("class", function (d) {
                return "label ";
            })
                .style("fill", function (d) { return getColor(d); })
                .attr("width", function (d) { return xScale(xValue(d)); });
            if (!long) {
                barUpdate
                    .select(".value")
                    .attr("class", function (d) {
                    return "value";
                })
                    .style("fill", function (d) { return getColor(d); })
                    .attr("width", function (d) { return xScale(xValue(d)); });
            }
            barUpdate.select(".barInfo").attr("stroke", function (d) {
                return getColor(d);
            });
            var barInfo = barUpdate
                .select(".barInfo")
                .text(function (d) {
                if (use_type_info) {
                    return d[divide_by] + "-" + d.name;
                }
                return d.name;
            })
                .attr("x", function (d) {
                if (long)
                    return 10;
                return xScale(xValue(d)) - 10;
            })
                .attr("fill-opacity", function (d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return 0;
                }
                return 1;
            })
                .attr("stroke-width", function (d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return "0px";
                }
                return "1px";
            });
            if (long) {
                barInfo.tween("text", function (d) {
                    var self = this;
                    var str = d[divide_by] + "-" + d.name + "  数值:";
                    var i = d3.interpolate(self.textContent.slice(str.length, 99), Number(d.value)), prec = (Number(d.value) + "").split("."), round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    return function (t) {
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
                    .tween("text", function (d) {
                    var self = this;
                    var i = d3.interpolate(self.textContent, Number(d.value)), prec = (Number(d.value) + "").split("."), round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    return function (t) {
                        self.textContent = d3.format(format)(Math.round(i(t) * round) / round);
                        d.value = self.textContent;
                    };
                })
                    .duration(2990 * interval_time)
                    .attr("x", function (d) { return xScale(xValue(d)) + 10; });
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
                .attr("transform", function (d) {
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
                    .attr("x", function () {
                    return xScale(currentData[currentData.length - 1]["value"]);
                });
            }
            barExit
                .select(".barInfo")
                .attr("fill-opacity", 0)
                .attr("stroke-width", function (d) {
                return "0px";
            })
                .attr("x", function () {
                if (long)
                    return 10;
                return xScale(currentData[currentData.length - 1]["value"] - 10);
            });
            barExit.select(".label").attr("fill-opacity", 0);
        }
        function change() {
            dataSort();
            yScale
                .domain(currentData.map(function (d) { return d.name; }).reverse())
                .range([innerHeight, 0]);
            if (animation == "linear") {
                g.selectAll(".bar")
                    .data(currentData, function (d) {
                    return d.name;
                })
                    .transition("1")
                    .ease(d3.easeLinear)
                    .duration(3000 * update_rate * interval_time)
                    .attr("transform", function (d) {
                    return "translate(0," + yScale(yValue(d)) + ")";
                });
            }
            else {
                g.selectAll(".bar")
                    .data(currentData, function (d) {
                    return d.name;
                })
                    .transition("1")
                    .duration(3000 * update_rate * interval_time)
                    .attr("transform", function (d) {
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
        setInterval(function () {
            console.log(currentData);
            d3.transition().each(change);
        }, 3000 * update_rate * interval_time);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitLocal\_Projects\Visualization\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map