
const generateMeta = meta => {
  return meta.reduce((acc, tag) => {
    if (tag.name) {
      return `${acc}<meta name="${tag.name}" content="${tag.content}" />\n`
    }
    if (tag.property) {
      return `${acc}<meta property="${tag.property}" content="${tag.content}" />\n`
    }
    return acc
  }, '')
}

export default ({ app, paths }) => {
  return `
    <title>${app.title}</title>
    ${generateMeta(app.head.meta)}
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
    <script>
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('${paths.PUBLIC}/service-worker.js').then(registration => {
          console.log('SW registered: ', registration);
        }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
      });
    }
    </script>
  `
}
