


import ol = require("openLayers");
import $ = require("jquery");



 //module ol3Contrib {
 //   export module controls {

       

         class InfoControl extends ol.control.Control {
            private map: ol.Map;
          
            private element: HTMLDivElement;

            private createElement() {
                this.element = document.createElement("div");
                this.element.setAttribute("class","ol-info ol-control");
                
                return this.element;
            }


            constructor(opt_options: { target? } = {}) {
                super({
                    element: this.createElement(),
                    target: opt_options.target
                });
             

                
            }
            setText(str: string) {
                this.element.innerText = str;
            }

            setMap(map: ol.Map) {
                ol.control.Control.prototype.setMap.call(this, map);
                //  var c = new color();
                //  alert('hello');

               
           

            }
        }
        //ol.control.Control = LegendControl;
        //export = LegendControl;

//    }
//}

export =InfoControl;
