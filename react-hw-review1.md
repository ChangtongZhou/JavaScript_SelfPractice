# React hw-review1

## Lifecycle:

1. Setup:
   1. constructor\(\)
   2. render\(\)
   3. **componentWillMount\(\)**
   4. render\(\)
   5. **componentDidMount\(\)** // used for data from http request
2. Update:
   1. componentWillReceiveProps\(\)
   2. **ShouldComponentUpdate\(\)** // decide if a component should be updated before moving on to the next \(true: render, false: don't render\)
   3. componentWillUpdate\(\)
   4. render\(\)
   5. componentDidUpate\(\)
3. willUnmount\(\)

## When you want to attach onClick event on each item in a list:

Use .map to iterate each element \(record\) and attach onClick like below:

onClick = {\(\)=&gt;this.getDetail\(record.id\)}

