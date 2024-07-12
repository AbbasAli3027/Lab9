$(document).ready(function () {
  function filterImages(category) {
    if (category === "all") {
      $(".image-item").fadeIn();
    } else {
      $(".image-item").hide();
      $('.image-item[data-category="' + category + '"]').fadeIn();
    }
  }

  function openLightbox(src) {
    $(".lightbox-content").attr("src", src);
    $(".lightbox").fadeIn();
  }

  function closeLightbox() {
    $(".lightbox").fadeOut();
  }

  $(".filter-button").on("click", function () {
    let category = $(this).data("category");
    filterImages(category);
  });

  $(".image-item img").on("click", function () {
    let src = $(this).attr("src");
    openLightbox(src);
  });

  $(".close, .lightbox").on("click", function () {
    closeLightbox();
  });
});
