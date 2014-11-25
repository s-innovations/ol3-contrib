


import ol = require("openLayers");
import $ = require("jquery");



 module ol3Contrib {
    export module controls {

        export interface LegendControlOptions {
            target? ;
            steps: Array<{ color: string; value: number; showMarker?: boolean; text?: string; }>;
            gradientHeight: number;
            gradientWidth: number;

        }

        export class LegendControl extends ol.control.Control {
            private map: ol.Map;
            private maxValue: number ;
            private minValue: number ;
            private options: LegendControlOptions;
            private element: HTMLDivElement;
            private legendCanvas: HTMLCanvasElement;
    
            private createElement() {
                this.element = document.createElement("div");
                this.element.setAttribute("class","ol-legend ol-control");
                
                return this.element;
            }


            constructor(opt_options: LegendControlOptions) {
                super({
                    element: this.createElement(),
                    target: opt_options.target
                });
                this.maxValue = Number.MIN_VALUE;
                this.minValue = Number.MAX_VALUE;

                this.options = opt_options;
                this.options.steps.forEach(step=> {
                    if (step.value < this.minValue)
                        this.minValue = step.value;
                    if (step.value > this.maxValue)
                        this.maxValue = step.value; 
                    if (typeof step.showMarker === "undefined")
                        step.showMarker = true;
                });

                
            }

            setMap(map: ol.Map) {
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
                var gradientHeight = this.legendCanvas.height-gradientOffset*2;

                var left = false;
                var maxSize = Number.MIN_VALUE;
                var lingrad = ctx.createLinearGradient(0, 0, 0, gradientHeight);
                this.options.steps.forEach(step => {
                    var pos = 1 - (step.value / (this.maxValue - this.minValue));
                    lingrad.addColorStop(pos, step.color); 
                    if (step.showMarker) {
                        ctx.beginPath();
                        ctx.moveTo(gradientOffset + (left ? 0 : gradientWidth), gradientOffset + pos * gradientHeight);
                        ctx.lineTo(gradientOffset + (left ? 0 : gradientWidth) + (left ? -10 : 10), gradientOffset + pos * gradientHeight);
                        ctx.stroke();

                        var text = step.text || step.value.toString();
                        if (text.length > maxSize)
                            maxSize = text.length;

                        ctx.fillText(text,
                            gradientOffset + (left ? 0 : gradientWidth) + (left ? -10 : 10)+2,
                            gradientOffset + pos * gradientHeight+4);
                    }
                });                
                // assign gradients to fill and stroke styles
                ctx.fillStyle = lingrad;
                ctx.lineWidth = 1;
                ctx.strokeStyle = 'black';
                // draw shapes
                ctx.fillRect(gradientOffset, gradientOffset, gradientWidth, gradientHeight);
                ctx.strokeRect(gradientOffset, gradientOffset, gradientWidth, gradientHeight);

                this.element.style.width = (gradientWidth+2*gradientOffset + 10 + maxSize * 8) + "px";
                this.element.style.height = (gradientHeight + 2 * gradientOffset) + "px";
           

            }
        }
        //ol.control.Control = LegendControl;
        //export = LegendControl;

    }
}

export =ol3Contrib;
