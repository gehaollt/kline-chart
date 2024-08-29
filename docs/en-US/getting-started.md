# Getting started

## Installing

Use npm or yarn

```bash
# npm
npm install klinecharts @gehaollt/kline-chart

# yarn
yarn install klinecharts @gehaollt/kline-chart
```

If it is imported directly through a script tag, you can use either of the following two CDNs
::: warning Note
For production environments, it is recommended to use a clear version number to avoid unexpected damage caused by new versions.
:::

```html
<!-- unpkg -->
<script src="https://unpkg.com/@gehaollt/kline-chart/dist/klinecharts-pro.umd.js"></script>

<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/@gehaollt/kline-chart/dist/klinecharts-pro.umd.js"></script>
```

## Usage

### Step 1: Create a container

```html
<div id="container"></div>
```

### Step 2: Create an instance

In projects using package managers such as npm and yarn

```javascript
// Import js
import { KLineChartPro, DefaultDatafeed } from '@gehaollt/kline-chart'
// Import css
import '@gehaollt/kline-chart/dist/klinecharts-pro.css'

// Create Instance
const chart = new KLineChartPro({
  container: document.getElementById('container'),
  // Default symbol info
  symbol: {
    exchange: 'XNYS',
    market: 'stocks',
    name: 'Alibaba Group Holding Limited American Depositary Shares, each represents eight Ordinary Shares',
    shortName: 'BABA',
    ticker: 'BABA',
    priceCurrency: 'usd',
    type: 'ADRC',
  },
  // Default period
  period: { multiplier: 15, timespan: 'minute', text: '15m' },
  // The default data access is used here. If the default data is also used in actual use, you need to go to the https://polygon.io/ apply for API key
  datafeed: new DefaultDatafeed(`${polygonIoApiKey}`),
})
```

In projects introduced directly through script tags

```html
<!-- Import js -->
<script src="https://cdn.jsdelivr.net/@gehaollt/kline-chart/dist/klinecharts-pro.umd.js"></script>

<!-- Import css -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/@gehaollt/kline-chart/dist/klinecharts-pro.css"
/>
<script>
  // Create Instance
  const chart = new klinechartspro.KLineChartPro({
    container: document.getElementById('container'),
    // Default symbol info
    symbol: {
      exchange: 'XNYS',
      market: 'stocks',
      name: 'Alibaba Group Holding Limited American Depositary Shares, each represents eight Ordinary Shares',
      shortName: 'BABA',
      ticker: 'BABA',
      priceCurrency: 'usd',
      type: 'ADRC',
    },
    // Default period
    period: { multiplier: 15, timespan: 'minute', text: '15m' },
    // The default data access is used here. If the default data is also used in actual use, you need to go to the https://polygon.io/ apply for API key
    datafeed: new klinechartspro.DefaultDatafeed(`${polygonIoApiKey}`),
  })
</script>
```

The first chart is created. Working <a href="https://jsfiddle.net/mawsyh/ct65rysp/20/" target="_blank">example</a>
