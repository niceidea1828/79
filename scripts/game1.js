const answers = [null, null, null];
const keys = [0, 0, 0];

let active = true;

$(".balance").html(localStorage.balance_b79);

for (let i = 1; i < 4; i++) {
  $(`.card_${i} .option_cont`).click(function () {
    if (!active) {
      return;
    }

    let optionIndex = $(this).index(`.card_${i} .option_cont`);

    answers[i - 1] = optionIndex;

    $(`.card_${i} .box`).html("");
    $(`.card_${i} .box`).eq(optionIndex).html("+");

    console.log(answers);
  });
}

$(".check").click(function () {
  active = false
  let res = 0;

  for (let i = 0; i < 3; i++) {
    if (answers[i] === keys[i]) {
      res++;
    }
  }

  if (res == 0) {
    $(".modal_pic").remove();
  }

  $(".modal_res").html(res);
  $(".modal").removeClass("hidden");
});

window.onload = () => {
  document.querySelector(".wrapper").classList.remove("hidden");
};
