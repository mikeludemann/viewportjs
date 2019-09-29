# Viewport JS

A viewport object-oriented method

## Documentation

### How to use this Method

Define your viewports:

```javascript
// New Instance

var viewport = new inViewport();

// Set the viewports

viewport.setViewports({
  'mobile': 586,
  'portrait': 768,
  'desktop': 1024,
  'tv': 1280
});

// Is viewport

viewport.is(200);
viewport.is('<=500px');
viewport.is('<portrait');

// Add viewports

viewport.addViewports("4K TV", 4096);

// Get viewports

viewport.getViewports(200);
```

### Methods

- **is(String|Number)**
Returns ``true|false`` 
If the current window width accords to the given param

- **setViewports(Object)**
Expects an object with viewports defined values

- **addViewport('String', number)**
Adds a new viewport to the current existing viewport and set

- **getViewports()**
Returns a object with all defined viewports