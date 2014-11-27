import ol = require("openLayers");
export interface LegendControlOptions {
    target?: any;
    steps: {
        color: string;
        value: number;
        showMarker?: boolean;
        text?: string;
    }[];
    gradientHeight: number;
    gradientWidth: number;
}
export declare class LegendControl extends ol.control.Control {
    private map;
    private maxValue;
    private minValue;
    private options;
    private element;
    private legendCanvas;
    private createElement();
    constructor(opt_options: LegendControlOptions);
    setMap(map: ol.Map): void;
}
