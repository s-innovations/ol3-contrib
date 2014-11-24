


import ol = require("openLayers");
import color = require("color");

module Controls {
    export class LegendControl extends ol.control.Control {
        private map: ol.Map;


        private createElement() {
            var element = document.createElement('div');
            return element;
        }


        constructor(opt_options: { target? } = {}) {
            super({
                element: this.createElement(),
                target: opt_options.target
            });
        }

        setMap(map: ol.Map) {
            ol.control.Control.prototype.setMap.call(this, map);
            var c = new color();


        }
    }
}
//ol.control.Control = LegendControl;
//export = LegendControl;
export = Controls;