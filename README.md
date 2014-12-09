react-barchart-envelope
=======================

React component for simple barchart envelope

![react-barchart-envelope](https://cloud.githubusercontent.com/assets/1183541/5359251/d2e0c660-7ff6-11e4-8f24-f717d6bf6b6e.png)

### Demo

[http://fraserxu.me/react-barchart-envelope/](http://fraserxu.me/react-barchart-envelope/)

### Installation

```
$ npm install react-barchart-envelope --save
```

### Usage

```JavaScript
var React = require('react')
var BarchartEnvelope = require('react-barchart-envelope')

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
```

### Options

* width
* height
* strokeColor
* strokeWidth

### License

MIT