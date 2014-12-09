var React = require('react')
var BarchartEnvelope = require('../index')

var Graph = React.createClass({
  render: function() {

    var data = [15, 12, 25, 8, 20, 14, 15, 3, 9, 29, 23, 12, 10, 26, 17, 25, 4, 29, 23, 12, 10, 26, 17, 25, 4, 29, 23, 12, 10, 26, 17, 25]

    return (
      <div>
        <BarchartEnvelope data={data} />
      </div>
    )
  }
})

React.render(<Graph />, document.body)