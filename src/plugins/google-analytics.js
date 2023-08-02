export default () => {
  window.dataLayer = window.dataLayer || []

  function gtag() {
    dataLayer.push(arguments)
  }

  gtag('js', new Date())

  gtag('config', 'G-GR1F9PKS1D')
}
