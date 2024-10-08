# 快速开始

## 安装

通过 npm 或 yarn 命令安装

```bash
# npm
npm install klinecharts @gehaollt/kline-chart

# yarn
yarn install klinecharts @gehaollt/kline-chart
```

如果是直接通过 script 标签引入，可以使用下面两个 CDN 中的任意一个即可
::: warning 注意
对于生产环境，推荐使用一个明确的版本号，以避免新版本造成的不可预期的破坏。
:::

```html
<!-- unpkg -->
<script src="https://unpkg.com/@gehaollt/kline-chart/dist/klinechart-view.umd.js"></script>

<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/@gehaollt/kline-chart/dist/klinechart-view.umd.js"></script>
```

## 使用

### 第一步，创建容器

```html
<div id="container"></div>
```

### 第二步，创建实例

在使用 npm, yarn 等包管理器中项目中

```javascript
// 引入js
import { KlineChartView, DefaultDatafeed } from '@gehaollt/kline-chart'
// 引入样式
import '@gehaollt/kline-chart/dist/klinechart-view.css'

// 创建实例
const chart = new KlineChartView({
  container: document.getElementById('container'),
  // 初始化标的信息
  symbol: {
    exchange: 'XNYS',
    market: 'stocks',
    name: 'Alibaba Group Holding Limited American Depositary Shares, each represents eight Ordinary Shares',
    shortName: 'BABA',
    ticker: 'BABA',
    priceCurrency: 'usd',
    type: 'ADRC',
  },
  // 初始化周期
  period: { multiplier: 15, timespan: 'minute', text: '15m' },
  // 这里使用默认的数据接入，如果实际使用中也使用默认数据，需要去 https://polygon.io/ 申请 API key
  datafeed: new DefaultDatafeed(`${polygonIoApiKey}`),
})
```

在直接通过 script 标签引入的项目中

```html
<!-- 引入js -->
<script src="https://cdn.jsdelivr.net/@gehaollt/kline-chart/dist/klinechart-view.umd.js"></script>

<!-- 引入css -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/@gehaollt/kline-chart/dist/klinechart-view.css"
/>
<script>
  // 创建实例
  const chart = new klinechartspro.KlineChartView({
    container: document.getElementById('container'),
    // 初始化标的信息
    symbol: {
      exchange: 'XNYS',
      market: 'stocks',
      name: 'Alibaba Group Holding Limited American Depositary Shares, each represents eight Ordinary Shares',
      shortName: 'BABA',
      ticker: 'BABA',
      priceCurrency: 'usd',
      type: 'ADRC',
    },
    // 初始化周期
    period: { multiplier: 15, timespan: 'minute', text: '15m' },
    // 这里使用默认的数据接入，如果实际使用中也使用默认数据，需要去 https://polygon.io/ 申请 API key
    datafeed: new klinechartspro.DefaultDatafeed(`${polygonIoApiKey}`),
  })
</script>
```

第一个图表就创建完成了. <a href="https://jsfiddle.net/mawsyh/ct65rysp/20/" target="_blank"> 这里的工作示例 </a>
