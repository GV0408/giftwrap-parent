import * as zoid from 'zoid/dist/zoid.frameworks';
// import zoid from 'zoid'
let MyWidget = zoid.create({
tag: "my-widget-3",
url: 'https://9688905edada.ngrok.io',
  dimensions: {
    width: '100%',
    height: '450px'
  },
  scrolling: false,
  autoResize: {
    width: false,
    height: true,
    element: '#root'
  },        
  props: {
    domain: {
      type: 'string',
      required: true
    },
    getCurrentProduct: {
      type: 'function',
      required: true
    }
  }
})

export default MyWidget

