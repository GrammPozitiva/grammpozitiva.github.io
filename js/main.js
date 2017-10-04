const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

$(document).ready(() => {
  const a = randomNumber(6, 9);
  const sum = randomNumber(11, 14);
  const b = sum - a;
  const numberA = $('#number_a').text(a);
  const numberB = $('#number_b').text(b);
  const inputLeft = $('.left');
  const inputRigth = $('.rigth');

  const lineLeft = $('.start');
  const lineRigth = $('.end');
  const answer = $('.answer');

  lineLeft.css('width', `${(39*a)}px`);

  inputLeft.keyup(() => {
    if (parseInt(inputLeft.val()) !== a) {
      inputLeft.css('color', 'red');
      numberA.css('background', 'yellow');
    } else {

      numberA.css('background', 'white');
      inputLeft.replaceWith("<div class = 'pos'>" + a + "</div>");

      lineRigth.css({
        'width': `${(39*b)}px`,
        'margin-left': `${(39*a)+35}px`
      });
      lineRigth.show();
      inputRigth.show();
    }
  });

  inputRigth.keyup(() => {

    if (parseInt(inputRigth.val()) !== b) {
      inputRigth.css('color', 'red');
      numberB.css('background', 'yellow');
    } else {
      numberB.css('background', 'white');
      inputRigth.replaceWith("<div class = 'pos rigth'>" + b + "</div>");

      $(".replace").hide();
      $(".answer").show();
    }
  });

  answer.keyup(() => {
    if (parseInt(answer.val()) !== sum) {
      answer.css('color', 'red');
    } else {
      answer.replaceWith("<div>" + sum + "</div>");
    }
  });
});
