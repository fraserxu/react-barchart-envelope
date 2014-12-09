react-barchart-envelope
=======================

React component for simple barchart envelope

### Installation

```
$ npm install react-barchart-envelope --save
```

### Usage

```JavaScript
var ChartistGraph = require('react-chartist')

var Pie = React.createClass({
  render: function() {

    var type = 'Pie'
    var data = {
      series: [20, 10, 30, 40]
    }

    return (
      <div>
        <ChartistGraph data={data} type={type} />
      </div>
    )
  }
})
```

### License

MIT