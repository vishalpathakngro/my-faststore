
module.exports = {
  seo: {
  "title": "FastStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "nagarropartnerind",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "SGD",
      symbol: "S$",
    },
    locale: "en-SG",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "SGP",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://nagarropartnerind.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/skin%20care",
    search: "/s?q=Cashmere",
    pdp: "/tranquil-retreat-mask/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/tranquil-retreat-mask/p",
      collection: "/skin%20care",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/tranquil-retreat-mask/p",
      collection: "/skin%20care",
      collection_filtered: "/skin%20care/?category-1=skin%20care&brand=Cashmere&facets=category-1%2Cbrand%27",
      search: "/s?q=Cashmere",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://nagarropartnerind.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
