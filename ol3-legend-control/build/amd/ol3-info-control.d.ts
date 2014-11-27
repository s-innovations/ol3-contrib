import ol = require("openLayers");
declare class InfoControl extends ol.control.Control {
    private map;
    private element;
    private createElement();
    constructor(opt_options?: {
        target?: any;
    });
    setText(str: string): void;
    setMap(map: ol.Map): void;
}
export = InfoControl;
