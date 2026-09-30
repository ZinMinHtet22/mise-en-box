document.addEventListener('DOMContentLoaded', function () {
  const fallbackImage = 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80';

  document.querySelectorAll('img').forEach(function (img) {
    const originalSrc = img.getAttribute('src');

    if (!originalSrc || !originalSrc.startsWith('http')) {
      return;
    }

    img.addEventListener('error', function () {
      if (this.dataset.fallbackApplied === 'true') {
        return;
      }

      this.dataset.fallbackApplied = 'true';
      this.src = fallbackImage;
      this.style.objectFit = 'cover';
      this.style.background = '#f3efe8';
    });
  });
});
