document.addEventListener("DOMContentLoaded", function() {
  new TradingView.widget({
    container_id: "tv-container",
    symbols: [
      { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
      { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
      { proName: "FX_IDC:EURUSD",   title: "EUR to USD" },
      { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
      { proName: "BITSTAMP:ETHUSD", title: "Ethereum" }
    ],
    showSymbolLogo: true,
    isTransparent: false,
    displayMode: "adaptive",
    colorTheme: "light",
    locale: "en"
  });
});
