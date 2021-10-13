const openReply = (id) => {
  const formComment = document.querySelector(
    `.user_comment-form[data-id="${id}"]`
  );
  const formReply = formComment.querySelector(".user_reply");

  if (formReply.style.display === "flex") {
    formReply.style.display = "none";
  } else {
    formReply.style.display = "flex";
  }
};
