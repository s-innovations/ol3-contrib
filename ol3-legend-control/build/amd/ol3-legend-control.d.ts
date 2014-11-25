import ol = require("openLayers");
declare module ol3Contrib {
    module controls {
        interface LegendControlOptions {
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
        class LegendControl extends ol.control.Control {
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
    }
}
export = ol3Contrib;
