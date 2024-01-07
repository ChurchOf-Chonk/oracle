setTimeout(() => {
  document.getElementById("dots").style.animation = "dots-final 2.5s ease alternate infinite both";
  
  document.getElementById("search-box").style.opacity = "1";
  document.getElementById("search-box").style.transform = "translateY(0)";

  document.getElementById("navbar").style.opacity = "1";
  document.getElementById("navbar").style.transform = "translateY(0)";

  document.getElementById("hub-button").style.opacity = "1";
  document.getElementById("hub-button").style.transform = "translateX(0)";

  setTimeout(() => {
    document.getElementById("search-box").style.transition = "0.25s ease";

    document.getElementById("navbar").style.transition = "0.25s ease";

    document.getElementById("hub-button").style.transition = "0.25s ease";

    document.body.style.overflow = "initial";
  }, 2500);
}, 5000);

function respond() {
  document.getElementById("output").style.opacity = "0";

  setTimeout(() => {
    var input = document.getElementById("input").value;

    var inputUnsanitised = input;
    inputUnsanitised = swapPronouns(inputUnsanitised);

    input = input.toLowerCase();
    input = swapPronouns(input);

    var output;

    if (input.match(/^is (\w+) (a|an|the) (\w+)(\?)?$/i)) {
      var [, subject, article, object] = input.match(/^is (\w+) (a|an|the) (\w+)(\?)?$/i);

      var [, subjectCapitalised, article, objectCapitalised] = inputUnsanitised.match(/^is (\w+) (a|an|the) (\w+)(\?)?$/i)

      if (subject != subjectCapitalised) {
        subject = subjectCapitalised;
      }

      if (object != objectCapitalised) {
        object = objectCapitalised;
      }

      const binary = yesNo();

      var isOrNot;

      if (binary == "Yes") {
        isOrNot = "is";
      }

      else {
        isOrNot = "is not";
      }
            
      output = `${binary}, ${subject} ${isOrNot} ${article} ${object}`;
    }

    else if (input.match(/^is (\w+) (\w+)(\?)?$/i)) {
      var [, subject, object] = input.match(/^is (\w+) (\w+)(\?)?$/i);
      var [, subjectCapitalised, objectCapitalised] = inputUnsanitised.match(/^is (\w+) (\w+)(\?)?$/i);

      if (subject != subjectCapitalised) {
        subject = subjectCapitalised;
      }

      if (object != objectCapitalised) {
        object = objectCapitalised;
      }

      const binary = yesNo();

      var isOrNot;

      if (binary == "Yes" && subject == "I") {
        isOrNot = "am";
      }

      else if (binary == "No" && subject == "I") {
        isOrNot = "am not";
      }
                
      else if (binary == "Yes" && subject == "you") {
        isOrNot = "are";
      }

      else if (binary == "No" && subject == "you") {
        isOrNot = "are not";
      }

      else if (binary == "Yes") {
        isOrNot = "is";
      }

      else {
        isOrNot = "is not";
      }
            
      output = `${binary}, ${subject} ${isOrNot} ${object}`;
    }

    else if (input.match(/^are (\w+) (\w+)(\?)?$/i)) {
      var [, subject, object] = input.match(/^are (\w+) (\w+)(\?)?$/i);
      var [, subjectCapitalised, objectCapitalised] = inputUnsanitised.match(/^are (\w+) (\w+)(\?)?$/i);

      if (subject != subjectCapitalised) {
        subject = subjectCapitalised;
      }

      if (object != objectCapitalised) {
        object = objectCapitalised;
      }

      const binary = yesNo();

      var isOrNot;

      if (binary == "Yes" && subject == "I") {
        isOrNot = "am";
      }

      else if (binary == "No" && subject == "I") {
        isOrNot = "am not";
      }
          
      else if (binary == "Yes" && subject == "you") {
        isOrNot = "are";
      }

      else if (binary == "No" && subject == "you") {
        isOrNot = "are not";
      }

      else if (binary == "Yes") {
        isOrNot = "is";
      }

      else {
        isOrNot = "is not";
      }
      
      output = `${binary}, ${subject} ${isOrNot} ${object}`;
    }

    else {
      invalidInput();
      return false;
    }

    document.getElementById("output").innerText = output;

    document.getElementById("output").style.opacity = "1";
  }, 250);
}

function yesNo() {
  if (Math.random() > 0.5) {
    return "Yes";
  }

  else {
    return "No";
  }
}

function swapPronouns(sentence) {
  // Replace "you" with "I" and vice versa using regular expressions
  const swappedSentence = sentence
    .replace(/\bYou\b/gi, '###TEMP###')
    .replace(/\bI\b/gi, 'you')
    .replace(/###TEMP###/gi, 'I');

  return swappedSentence;
}

function invalidInput() {
  document.getElementById("output").style.opacity = "0";

  document.body.style.overflow = "hidden";

  document.getElementById("dots").style.transition = "0.25s ease";
  document.getElementById("navbar").style.transition = "0.25s ease";
  document.getElementById("hub-button").style.transition = "0.25s ease";
  document.getElementById("search-box").style.transition = "0.25s ease";

  document.getElementById("dots").style.color = "red";
  document.getElementById("dots").style.animation = "1s dots-final-error ease infinite alternate";
  document.getElementById("navbar").className = "navbar-error";
  document.getElementById("hub-button").className = "button-error";
  document.getElementById("search-box").classList.add("search-box-error");

  setTimeout(() => {
    document.getElementById("dots").style.transition = "2.5s ease";
    document.getElementById("navbar").style.transition = "2.5s ease";
    document.getElementById("hub-button").style.transition = "2.5s ease";
    document.getElementById("search-box").style.transition = "2.5s ease";

    document.getElementById("navbar").style.transform = "translateY(100rem) rotate(45deg)";
    document.getElementById("hub-button").style.transform = "translateY(50rem) rotate(450deg)";
    document.getElementById("search-box").style.transform = "translateY(50rem) rotate(-50deg)";

    document.getElementById("dots").style.animation = "5s ease dots-error reverse";
  }, 1000);

  setTimeout(() => {
    const orb = document.createElement("div");
    orb.className = "orb";
    orb.classList.add("perfect-center");
    orb.style.opacity = "0";

    document.body.appendChild(orb);

    setTimeout(() => {
      document.getElementById("dots").remove();

      orb.style.opacity = "1";
      orb.style.transition = "30s ease";
      orb.style.width = "25rem";
      orb.style.height = "25rem";

      setTimeout(() => {
        orb.style.transition = "25s ease";
        orb.style.opacity = "0";

        setTimeout(() => {
          location.href = "https://churchof-chonk.github.io/hell";
        }, 4000);
      }, 6000);
    }, 1000);
  }, 5000);
}