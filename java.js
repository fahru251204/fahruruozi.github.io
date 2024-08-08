function selectItem(element) {
  // Hapus kelas 'selected' dari semua item
  var items = document.querySelectorAll('.diamond-options .item');
  items.forEach(function (item) {
    item.classList.remove('selected');
  });

  // Tambahkan kelas 'selected' ke item yang diklik
  element.classList.add('selected');
}

function goToPage(url) {
  window.location.href = 'index.html';
}
