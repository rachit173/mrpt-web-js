import CartesianPlane from "./CartesianPlane";

export default class ScatterPlot extends CartesianPlane {
  /**
   * @param {Array} xs - array containing x coords
   * @param {Array} ys - array containing y coords
   * @param {String} divID - the id of the container
   * @param {Object} options - with the following keys
   *    @param {Number} size - the size of the point, default is 3
   */
  constructor(xs = [], ys = [], divID, options = {})
  {
    let size = options.size || 3;
    let config = { mode: 'markers', marker: {size}, type: 'scatter' };
    let trace = {
      x: xs,
      y: ys,
      ...config
    };
    super(divID, trace);
    this.trace = trace;
  }
  /**
   * processData : processes new points an replaces them
   * in the scatter plot, also alter the size and color of points
   * @param {Array} xs
   * @param {Array} ys
   * @param {Number} size
   * @param {*} color
   */
  processData(xs = [], ys = [], size = null, color = null) {
    this.trace.x = xs;
    this.trace.y = ys;
    if (size) {
      this.trace.marker.size = size;
    }
    if (color) {
      /**
       * @todo Add code for setting color of points
       */
    }
    this.refresh();
  }
  static processTrace(xs = [], ys = [], size = null, color = null) {
    let config = { mode: 'markers', marker: {size}, type: 'scatter' };
    let trace = {
      x: xs,
      y: ys,
      ...config
    };
    if (size) {
      trace.marker.size = size;
    }
    if (color) {
      /**
       *
       * @todo Add code for setting color of points
       */
    }
    return trace;
  }
}