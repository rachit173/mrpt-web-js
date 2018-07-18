import CartesianPlane from './CartesianPlane'

export default class LinePlot extends CartesianPlane {
  constructor(xs = [], ys = [], divID, options = {})
  {
    let size = options.size || 3;
    let config = { type: 'scatter' };
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
   * in the line plot, also alter the size and color of points
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
    let config = {type: 'scatter' };
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
       * @todo Add code for setting color of line plot
       */
    }
    return trace;
  }
}
