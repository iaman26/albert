$(".list__block").click(function () {
  console.log(14124214);
  $(this).toggleClass("active");

  $(this).find(".block__content").slideToggle();
});
