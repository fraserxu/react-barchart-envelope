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

    var width = this.props.width
    var height = this.props.height
    var data = this.props.data.slice()
    var onBarchartClick = this.props.onBarchartClick || (function() {})
    var hoverEffect = this.props.hoverEffect || false
    if (data.length === 0) return

    var xScale = d3.scale.linear()
      .domain([0, data.length])
      .range([2, width - 2])

    var yScale = d3.scale.linear()
      .domain(d3.extent(data))
      .range([height - 2, 2])

    var barchartScale = d3.scale.linear()
      .domain(d3.extent(data))
      .range([2, height - 2])

    var svg = d3.select(this.getDOMNode())
      .append('svg')
      .attr('width', width)
      .attr('height', height)
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

    if (hoverEffect) {
      svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', function(d, i) {
        return xScale(i)
      })
      .attr('y', function(d) {
        return height - barchartScale(d)
      })
      .attr('width', function() {
        return width / data.length
      })
      .attr('height', function(d) {
        return barchartScale(d)
      })
      .attr('fill', 'rgba(0, 0, 0, 0)')
      .style('cursor', 'pointer')
      .on('mouseover', function(d) {
        d3.select(this)
          .attr('fill', 'orange')

        var xPosition = parseFloat(d3.select(this).attr('x')) + width / data.length / 2
        var yPosition = parseFloat(d3.select(this).attr('y')) + 14

        svg.append('text')
          .attr('id', 'tooltip')
          .attr('x', xPosition)
          .attr('y', yPosition)
          .attr('text-anchor', 'middle')
          .attr('font-family', 'sans-serif')
          .attr('font-size', '10px')
          .attr('font-weight', 'bold')
          .attr('fill', '#fff')
          .text(d)
      })
      .on('mouseout', function() {
        d3.select(this)
          .transition()
          .duration(250)
          .attr('fill', 'rgba(0, 0, 0, 0)')

        d3.select('#tooltip').remove()
      })
      .on('click', function(d) {
        onBarchartClick(d)
      })
      .append('title')
      .text(function(d) {
        return d
      })
    }
  }
})

module.exports = BarchartEnvelope