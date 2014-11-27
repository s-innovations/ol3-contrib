var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "openLayers", "jquery"], function(require, exports, ol, $) {
    

    var LegendControl = (function (_super) {
        __extends(LegendControl, _super);
        function LegendControl(opt_options) {
            var _this = this;
            _super.call(this, {
                element: this.createElement(),
                target: opt_options.target
            });
            this.maxValue = Number.MIN_VALUE;
            this.minValue = Number.MAX_VALUE;

            this.options = opt_options;
            this.options.steps.forEach(function (step) {
                if (step.value < _this.minValue)
                    _this.minValue = step.value;
                if (step.value > _this.maxValue)
                    _this.maxValue = step.value;
                if (typeof step.showMarker === "undefined")
                    step.showMarker = true;
            });
        }
        LegendControl.prototype.createElement = function () {
            this.element = document.createElement("div");
            this.element.setAttribute("class", "ol-legend ol-control");

            return this.element;
        };

        LegendControl.prototype.setMap = function (map) {
            var _this = this;
            ol.control.Control.prototype.setMap.call(this, map);

            //  var c = new color();
            //  alert('hello');
            console.log($(this.element).innerHeight());

            this.legendCanvas = document.createElement("canvas");
            this.element.appendChild(this.legendCanvas);
            this.legendCanvas.width = this.legendCanvas.offsetWidth;
            this.legendCanvas.height = this.options.gradientHeight || this.legendCanvas.offsetHeight;

            var ctx = this.legendCanvas.getContext('2d');
            ctx.font = "16px Georgia";

            //var max = 168;
            //var min = 0;
            //var step = 100;
            var gradientWidth = this.options.gradientWidth || 20;
            var gradientOffset = 10;
            var gradientHeight = this.legendCanvas.height - gradientOffset * 2;

            var left = false;
            var maxSize = Number.MIN_VALUE;
            var lingrad = ctx.createLinearGradient(0, 0, 0, gradientHeight);
            this.options.steps.forEach(function (step) {
                var pos = 1 - (step.value / (_this.maxValue - _this.minValue));
                lingrad.addColorStop(pos, step.color);
                if (step.showMarker) {
                    ctx.beginPath();
                    ctx.moveTo(gradientOffset + (left ? 0 : gradientWidth), gradientOffset + pos * gradientHeight);
                    ctx.lineTo(gradientOffset + (left ? 0 : gradientWidth) + (left ? -10 : 10), gradientOffset + pos * gradientHeight);
                    ctx.stroke();

                    var text = step.text || step.value.toString();
                    if (text.length > maxSize)
                        maxSize = text.length;

                    ctx.fillText(text, gradientOffset + (left ? 0 : gradientWidth) + (left ? -10 : 10) + 2, gradientOffset + pos * gradientHeight + 4);
                }
            });

            // assign gradients to fill and stroke styles
            ctx.fillStyle = lingrad;
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'black';

            // draw shapes
            ctx.fillRect(gradientOffset, gradientOffset, gradientWidth, gradientHeight);
            ctx.strokeRect(gradientOffset, gradientOffset, gradientWidth, gradientHeight);

            this.element.style.width = (gradientWidth + 2 * gradientOffset + 10 + maxSize * 8) + "px";
            this.element.style.height = (gradientHeight + 2 * gradientOffset) + "px";
        };
        return LegendControl;
    })(ol.control.Control);
    exports.LegendControl = LegendControl;
});
//ol.control.Control = LegendControl;
//export = LegendControl;
//    }
//}
//export =ol3Contrib;
//# sourceMappingURL=ol3-legend-control.js.map
