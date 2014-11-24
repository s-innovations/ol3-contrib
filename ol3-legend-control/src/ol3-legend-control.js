var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "openLayers", "color"], function(require, exports, ol, color) {
    var Controls;
    (function (Controls) {
        var LegendControl = (function (_super) {
            __extends(LegendControl, _super);
            function LegendControl(opt_options) {
                if (typeof opt_options === "undefined") { opt_options = {}; }
                _super.call(this, {
                    element: this.createElement(),
                    target: opt_options.target
                });
            }
            LegendControl.prototype.createElement = function () {
                var element = document.createElement('div');
                return element;
            };

            LegendControl.prototype.setMap = function (map) {
                ol.control.Control.prototype.setMap.call(this, map);
                var c = new color();
            };
            return LegendControl;
        })(ol.control.Control);
        Controls.LegendControl = LegendControl;
    })(Controls || (Controls = {}));

    
    return Controls;
});
//# sourceMappingURL=ol3-legend-control.js.map
