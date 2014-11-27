import InfoControlExtern = require("ol3-info-control");
import LegendControlExtern = require("ol3-legend-control");
declare module ol3Contrib {
    module controls {
        var InfoControl: typeof InfoControlExtern;
        var LegendControl: typeof LegendControlExtern.LegendControl;
    }
}
export = ol3Contrib;
