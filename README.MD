# Media Query JS

media.query is a simple utility that you can use when you need media queries in js.

media.query(breakpoint, operator)
### Parameters

| Parameter | Default | Explanation |
| ------ | ------ | ------ |
| breakpoint | "md" | string, a value defined inside media.breakpoints OR a numeric value which will be passed  |
| operator | "<=" | string, only ">=" and "<=" is supported for now, "max-width" and "min-width" |

## Usage
```js
 if ( window.MatchMedia( media.query("1200px",">=") ) {
    // do your thang
 }
```
