
console.log("Content Detox Extension Loaded");

function hideYouTubeJunk() {
  document.querySelectorAll('ytd-rich-section-renderer').forEach(el => {
    el.style.display = 'none';
  });

  const comments = document.getElementById('comments');
  if (comments) comments.style.display = 'none';

  const related = document.getElementById('related');
  if (related) related.style.display = 'none';
}

chrome.storage.local.get('enabled', (data) => {
  if (data.enabled ?? true) {
    hideYouTubeJunk();
    new MutationObserver(hideYouTubeJunk).observe(document.body, {
      childList: true,
      subtree: true
    });
  }
});
