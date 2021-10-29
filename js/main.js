function scrollTop(elem) {
  const target = document.getElementsByClassName(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('news-item');