var React = require('react')
var BarchartEnvelope = require('../index')

var Graph = React.createClass({
  render: function() {

    var data = [15, 12, 25, 8, 20]

    var onBarchartClick = function(d) {
      console.log(d)
    }

    return (
      <div>
        <BarchartEnvelope data={data} onBarchartClick={onBarchartClick} hoverEffect={true} tooltip={true} />
      </div>
    )
  }
})

React.render(<Graph />, document.body)