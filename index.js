'use strict'

var React = require('react')
var d3 = require('d3')

var BarchartEnvelope = React.createClass({
  getDefaultProps: function() {
    return {
      width: 700,
      height: 200,
      strokeColor: 'black',
      strokeWidth: '0.5px',
      data: [15, 12, 25, 8, 20]
    }
  },

  componentDidMount: function() {
    this.renderBarchart()
  },

  render: function() {
    return React.createElement('div', null)
  },

  renderBarchart: function() {
    var el = this.getDOMNode()
    while (el.firstChild) {
      el.removeChild(el.firstChild)
    }

    var data = this.props.data.slice()
    if (data.length === 0) return

    var xScale = d3.scale.linear()
      .domain([0, data.length])
      .range([2, this.props.width - 2])

    var yScale = d3.scale.linear()
      .domain(d3.extent(data))
      .range([this.props.height - 2, 2])

    var svg = d3.select(this.getDOMNode())
      .append('svg')
      .attr('width', this.props.width)
      .attr('height', this.props.height)
      .append('g')

    var line = d3.svg.line()
      .interpolate('step-after')
      .x(function(d, i) {
        return xScale(i)
      })
      .y(function(d, i) {
        return yScale(d)
      })

    svg.append('path')
      .datum(data)
      .attr('class', 'envelope')
      .style('fill', 'none')
      .style('stroke', this.props.strokeColor)
      .style('stroke-width', this.props.strokeWidth)
      .attr('d', line)

  }
})

module.exports = BarchartEnvelope