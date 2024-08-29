# 主题定制

图表内置了`dark`和`light`两种主题，默认是`light`。如果需要定制其它主题，需要完成核心图表的样式定制和 css 的定制。

## 核心图表的定制

通过 api `setStyles(styles)`设置。

## css 相关样式

css 样式采用 css 变量控制颜色，具体如下，

```css
.klinechart-view {
  /* 亮色主题颜色 */
  --klinechart-view-primary-color: #1677ff;
  --klinechart-view-hover-background-color: rgba(22, 119, 255, 0.15);
  --klinechart-view-background-color: #ffffff;
  --klinechart-view-popover-background-color: #ffffff;
  --klinechart-view-text-color: #051441;
  --klinechart-view-text-second-color: #76808f;
  --klinechart-view-border-color: #ebedf1;
  --klinechart-view-selected-color: rgba(22, 119, 255, 0.15);
}

/* 暗色主题颜色 */
.klinechart-view[data-theme='dark'] {
  --klinechart-view-hover-background-color: rgba(22, 119, 255, 0.15);
  --klinechart-view-background-color: #151517;
  --klinechart-view-popover-background-color: #1c1c1f;
  --klinechart-view-text-color: #f8f8f8;
  --klinechart-view-text-second-color: #929aa5;
  --klinechart-view-border-color: #292929;
}
```
