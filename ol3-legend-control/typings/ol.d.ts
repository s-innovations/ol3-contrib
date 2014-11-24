
declare module ol {

    export function inherits(value, target);


    export interface View2DOptions {
        projection?: any;
        center: number[];
        zoom: number;
        rotation?: number;

    }

    export interface FeatureOverlayOptions {
        map: any;
        features?: Feature[];
    }
    export interface Extent extends Array<number> {

    }
    interface Size extends Array<number> {

    }
    export interface IView {
    }
    class CollectionEvent<T> {
        element: T;
        type: string;
    }
    class MapEvent {
        map: Map;
        type: string;
        frameState;
    }

    class MapBrowserEvent extends MapEvent {
        browserEvent;

        coordinate: number[];
        pixel: number[];
    }
    class Map extends Observable {
        constructor(options: any)

        getSize(): number[]

        beforeRender(...options: any[]);
        
        forEachFeatureAtPixel(pixel, callback, opt_this?, opt_layerFilter?, opt_this2?)
     /**
     * Add the given control to the map.
     * @param {ol.control.Control} control Control.
     * @todo api
     */
     addControl(control: control.Control)
    /**
     * Add the given interaction to the map.
     * @param {ol.interaction.Interaction} interaction Interaction to add.
     * @todo api
     */
        addInteraction(interaction);
        removeInteraction(interaction);
        /**
 * Adds the given layer to the top of this map.
 * @param {ol.layer.Base} layer Layer.
 * @todo api
 */
        addLayer(layerbase: layer.Base);
        removeLayer(layerbase: layer.Base);
        /**
 * Add the given overlay to the map.
 * @param {ol.Overlay} overlay Overlay.
 * @todo api
 */
        addOverlay(overlay: Overlay);
        /**
 * Get the view associated with this map. This can be a 2D or 3D view. A 2D
 * view manages properties such as center and resolution.
 * @return {ol.View|undefined} View.
 * @todo api
 */
        getView(): View;
        /**
 * Set the view for this map. Currently {@link ol.View2D} is implememnted.
 * @param {ol.IView} view View.
 * @todo api
 */
        setView(view: IView);

        getLayers() : ol.Collection<ol.layer.Base>;
        render();
        getViewport();
        getEventPixel(evt);
        getEventCoordinate(evt);
        getPixelFromCoordinate(coordinate: Array<number>): Array<number>;
    }

    class Overlay { }
    class Feature extends Object {
        constructor(geom: geom.Geometry)
        constructor(geom: string)

        getGeometry<T>(): T
        getGeometryName(): string;
        getId(): any;
        setId(id);
    }
    class FeatureOverlay {
            constructor(options?: FeatureOverlayOptions)
    }


    class View extends Object implements IView {
        constructor(options?: { center? ; constrainRotation? ; enableRotation? ; extent? ; maxResolution? ; minResolution?: number; maxZoom?: number; minZoom?: number; projection? ; resolution? ; resolutions? ; rotation? ; zoom? ; zoomFactor? ; });
        // getView2D(): View2D;
        fitExtent(extend: any, size: number[]);

        setCenter(center);
        setZoom(lvl: number);
        setResolution(res: number);
        getCenter(): any;
        getZoom(): any;

        fitGeometry(geometry, size, opt_options?);
        getRotation(): number;
        getResolution(): any;
        setRotation(rad: number);

        calculateExtent(size: number[]): number[];

    }
    class Geolocation {
    }
    class Coordinate {
        constructor(lng: number, lat: number)
    }

    class ObjectAccsor {
    }

    class Object extends Observable {
        get(key: string): any;
        bindTo(key: string, target: Object, targetkey?: string);
        getKeys(): string[];
        set(key, value);
        // NOt sure what Object.<string, *> means, which is the true return type;
        getProperties(): string;
    }

    class Observable {

        //Dispatches a change event. Register a listener for this event to get notified of changes.
        //Fires: event:change
        dispatchChangeEvent()
        on(type, listener, opt_this?);
        bindTo(type, el);
    }

    //http://ol3js.org/en/master/apidoc/ol.Collection.html
    class Collection<T> extends Object {

        ///Remove all elements from the collection
        clear()
     
        extend(arr: any[]): Collection<T>
        forEach(f: (item: T) => void, thisobj?);
        getArray(): T[]
        push(obj: T);
        insertAt(idx: number, T);
        remove(obj: T);
        on(events: string[], callback: (e) => void, thisobj?);

    }

    module format {
        class GeoJSON {
            constructor(opt_options?: any);
            writeFeatures(feature: Feature[]): string;
            writeFeature(features: Feature): string;
            readFeature(source): Feature;
            readFeatures(source): Feature[];
        }
        class GPX { }
        class IGC { }
        class KML { }
        class TopoJSON { }
    }
    module tilegrid {
        class TileGrid {

        }
        class XYZ extends TileGrid {
            constructor(options?);
        }
    }
    module animation {
        function pan(options: any): any;
        function zoom(options: any): any;
        function bounce(options: any): any;
    }
    module control {

        class Control {
            constructor(options?);
            setMap(map: ol.Map);
        }
    }
    module layer {
        class Group extends Base {
            constructor(options?: any);
            addLayer(layer: Base);
        }
        class Base extends Observable {
            setVisible(visible: boolean)
             getVisible(): boolean;
            setOpacity(o: number);
        }
        class Tile extends Base {
            constructor(options: any)
            getSource(): ol.source.Source
        }
        class Vector extends Base {
            constructor(options?: any);

            getSource();
        }
        class Image extends Base { 
              constructor(options: any)

            getSource();
        }
    }

    module source {
        class ImageVector extends ImageCanvas {
            constructor(options?: any)
        }
        class Cluster extends Vector {
          constructor(options?: any)
        }
        class Image extends Source {
                 constructor(options: any)
        }
        class ImageWMS extends Image {
                    constructor(options: any)
        }
        class TileDebug {
            constructor(options: any)
        }
        class ImageCanvas {
                  constructor(options: any)
        }
        class MapQuest {
            constructor(options: any)
        }
        class GeoJSON extends StaticVector {
            constructor(options: {
                projection?: string;
                url?: string
            })
        }
        class XYZ {
             constructor(options: any)
        }
        class OSM {
        }
        class StaticVector extends FormatVector {

        }
        class FormatVector extends Vector {

        }
        class Vector extends Source {
            constructor(options?);
            addFeature(feature: Feature);
            removeFeature(feature: Feature);
            getFeaturesAtCoordinate(point: number[]): Feature[];
            getFeatures(): Array<Feature>;
            getClosestFeatureToCoordinate(coordinate: number[]): Feature;
            clear();
            getExtent(): any;
            forEachFeatureInExtent(extend, f, opt_this?);
           
        }
        class VectorEvent {
            type: string;
            feature: Feature;
        }
        class BingMaps {
             constructor(options: any)
        }
        class ImageStatic {
              constructor(options: any)
        }
        class Source extends Observable {

        }
    }
    module style {
        class Style {
            constructor(options: any)
        }
        class Fill {
            constructor(options: any)
        }
        class Stroke {
            constructor(options: any)
        }
        class Circle {
            constructor(options: any)
        }
        class Text {
             constructor(options?: any)
        }
    }
    module extent {
        function getWidth(extent: ol.Extent): number;
        function getCenter(extent: ol.Extent): Array<number>;
    }
    module proj {

        class Projection {
            constructor(options: any);

            getExtent();
        }

        function transform(point: any[], from: string, to: string);
        function transform(point: Coordinate, from: string, to: string);
        function transform(point: Coordinate, from: string, to: ol.proj.Projection);
        function transform(point: Coordinate, from: ol.proj.Projection, to: ol.proj.Projection);
        function transform(point: Coordinate, from: ol.proj.Projection, to: string);
    }

    module control {
        function defaults(options?);
        class FullScreen { }

        class ScaleLine { }
    }
    module geom {

        /**
         * The geometry type. One of `'Point'`, `'LineString'`, `'LinearRing'`,
         * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
         * `'GeometryCollection'`, `'Circle'`.
         * @enum {string}
         * @todo api
         */
        enum GeometryType {
            POINT,
            LINE_STRING,
            LINEAR_RING,
            POLYGON,
            MULTI_POINT,
            MULTI_LINE_STRING,
            MULTI_POLYGON,
            GEOMETRY_COLLECTION,
            CIRCLE
        }

        class Geometry extends Observable {


            //An array of numbers representing an extent: [minx, miny, maxx, maxy].      
            getExtent(opt_extent?: any): number[];

        }
        class SimpleGeometry extends Geometry {

        }
        class LineString extends SimpleGeometry {
            constructor(data: any);
            appendCoordinate(coordinate: number[]);
            getClosestPoint(point: number[], opt_closestPoint?): number[];
            getCoordinateAtM(m, opt_extrapolate?): number[];
        }
        class Point extends Geometry {
            getCoordinates(): number[];
            setCoordinates(coord: number[]);
            constructor(data: any)
        }
        class GeometryCollection extends Geometry {
            constructor(geoms?: Array<Geometry>);
        }
        class Polygon extends Geometry {
        constructor(rawpolygon: any[])
            getCoordinates();
            setCoordinates(rawpolygon: any[]);
        }
        class Circle extends Geometry {
        constructor(center: number[], radius: number)
        }

    }
    module interaction {
        class Draw extends Observable {
                    constructor(data?: any)
        }
        class Select extends Observable {
              constructor(data?: any)

            getFeatures(): Collection<Feature>
        }
        class Modify extends Observable {
            constructor(options?: any);
        }
        function defaults()
        class DragAndDrop extends Observable {
            constructor(options: any);
        }
    }

    class Attribution {
        constructor(options: any)
    }

}
declare module "openLayers" {
    export = ol;
}



