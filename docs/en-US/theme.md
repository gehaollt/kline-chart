# Theme customization

The chart has two built-in themes, `dark` and `light`, and the default is `light`. If you need to customize other topics, you need to complete the style customization of the core chart and the customization of the CSS.

## Customization of core chart

Set through the API `setStyles(styles)`.

## CSS related styles

The css style uses css variables to control the color, as follows,

```css
.klinechart-view {
  /* Light theme colors */
  --klinechart-view-primary-color: #1677ff;
  --klinechart-view-hover-background-color: rgba(22, 119, 255, 0.15);
  --klinechart-view-background-color: #ffffff;
  --klinechart-view-popover-background-color: #ffffff;
  --klinechart-view-text-color: #051441;
  --klinechart-view-text-second-color: #76808f;
  --klinechart-view-border-color: #ebedf1;
  --klinechart-view-selected-color: rgba(22, 119, 255, 0.15);
}

/* Dark theme colors  */
.klinechart-view[data-theme='dark'] {
  --klinechart-view-hover-background-color: rgba(22, 119, 255, 0.15);
  --klinechart-view-background-color: #151517;
  --klinechart-view-popover-background-color: #1c1c1f;
  --klinechart-view-text-color: #f8f8f8;
  --klinechart-view-text-second-color: #929aa5;
  --klinechart-view-border-color: #292929;
}
```
