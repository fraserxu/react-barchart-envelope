'use strict'

var React = require('react')
var d3 = require('d3')

var BarchartEnvelope = React.createClass({
  getDefaultProps: function() {
    return {
      width: 500,
      height: 100,
      strokeColor: 'black',
      strokeWidth: '0.5px',
      interpolate: 'basis',
      circleDiameter: 1.5,
      data: [15, 12, 25, 8, 20, 14, 15, 3, 9, 29, 23, 12, 10, 26, 17, 25, 4, 29, 23, 12, 10, 26, 17, 25, 4, 29, 23, 12, 10, 26, 17, 25, 4, 29, 23, 12, 10, 26, 17, 25, 4, 29, 23, 12, 10, 26, 17, 25, 4, 29, 23, 12, 10, 26, 17, 25, 4, 29, 23, 12, 10, 26, 17, 25, 4, 29, 23, 12, 10, 26, 17, 25, 4, 29, 23, 12, 10, 26, 17, 25, 4]
    }
  },

  componentDidMount: function() {
    this.renderBarchart()
  },

  render: function() {
    return <div></div>
  },

  renderBarchart: function() {
    var data = this.props.data.slice()

    var x = d3.scale.linear().range([2, this.props.width - 2])
    var y = d3.scale.linear().range([this.props.height - 2, 2])

    x.domain([0, data.length])
    y.domain(d3.extent(data))

    var _line = 'M'
    data.forEach(function(point, index) {
      var _l = index === 0 ? '' : 'L'
      var _point = _l + x(index).toString() + ',' + y(point).toString()
      var _next = 'L' + x(index + 1).toString() + ',' + y(point).toString()
      _line += (_point + _next)
    })

    var svg = d3.select(this.getDOMNode())
      .append('svg')
      .attr('width', this.props.width)
      .attr('height', this.props.height)
      .append('g')

    svg.append('path')
      .datum(data)
      .attr('class', 'envelope')
      .style('fill', 'none')
      .style('stroke', this.props.strokeColor)
      .style('stroke-width', this.props.strokeWidth)
      .attr('d', _line)
  }
})

module.exports = BarchartEnvelope