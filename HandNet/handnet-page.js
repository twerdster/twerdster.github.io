// Resize only the same-origin, locally hosted research viewer.
(() => {
  const frame = document.getElementById('handnet-explorer');
  if (!frame) return;
  window.addEventListener('message', event => {
    if (event.origin !== window.location.origin || event.source !== frame.contentWindow) return;
    if (event.data?.type !== 'handnet-explorer-height') return;
    const height = Number(event.data.height);
    if (Number.isFinite(height) && height > 200 && height < 20000) {
      const value = Math.ceil(height);
      if (Math.abs(frame.height - value) > 2) frame.height = String(value);
    }
  });
})();
