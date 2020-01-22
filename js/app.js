$(() => {
  const mwin = $(".m_modal_window");
  const ovy = $(".m_modal_overlay");
  const btnc = $(".m_modal_btn-close");
  const mark = $(".org_modal_mark-close");
  const win = $.merge(mwin, ovy);
  $(mark).hide();
  // $('.org_modal').hide();

  $(".m_modal_open").on("click", e => {
    $(win).fadeIn();
    $(mark).fadeIn();
    // $('.org_modal').show();
  });

  $.merge(btnc, ovy, mark).on("click", e => {
    $(win).fadeOut();
    $(mark).fadeOut();
    // $('.org_modal').hide();
  });

  $(mark).on("click", e => {
    $(win).fadeOut();
    $(mark).fadeOut();
    // $('.org_modal').hide();
  });

  $(".org_modal").on("click", e => {
    e.stopPropagation();
  });

  $(".m_modal_btn-req").on("click", e => {
    alert("実行しました");
  });

  locateCenter();
  $(window).resize(locateCenter);

  function locateCenter() {
    const w = $(window).width();
    const h = $(window).height();
    const cw = $(mwin).outerWidth();
    const ch = $(mwin).outerHeight();
    const max = w / 1.2 + "px";
    $(mwin).css({
      maxWidth: max,
      left: (w - cw) / 2 - max / 2 + "px",
      top: (h - ch) / 2 + "px",
      maxHeight: calc(h - 80) + "px"

      // left: ((cw - ((cw - w) / 2))  / 2) + 10 + "px",
      // top: "50%",
      // height: "auto",
      // boxSizing: "initial",
      // width: ((cw - ((cw - w) / 2)) - 30 ) + "px",
    });
  }
});
