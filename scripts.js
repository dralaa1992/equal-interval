const correctAnswers = {
      q1: "false",
      q2: "true",
      q3: "false",
      q4: "true",
      q5: "false",
      q6: "b",
      q7: "a",
      q8: "a",
      q9: "a",
      q10: "c"
    };

    function checkAnswers() {
      const form = document.getElementById("quizForm");
      let score = 0;

      for (let key in correctAnswers) {
        const selected = form.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === correctAnswers[key]) {
          score++;
        }
      }

      const percent = (score / 10) * 100;
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `<p>لقد حصلت على <span class="${percent >= 80 ? 'correct' : 'wrong'}">${percent}%</span></p>`;

      if (percent >= 80) {
        resultDiv.innerHTML += `<p style="color:green;">أحسنت! يمكنك الانتقال إلى دراسة الموديول الثاني ✅</p>`;
      } else {
        resultDiv.innerHTML += `<p style="color:red;">نقترح عليك دراسة الموديول الأول أولاً 📘... هيا بنا!</p>`;
      }

      // إخفاء النموذج بعد الإجابة
      form.style.display = "none";
    }
     var totalSeconds = 20 * 60; // 20 دقيقة

  function startCountdown() {
    var countdownDisplay = document.getElementById("countdown");
    var timer = setInterval(function () {
      var minutes = Math.floor(totalSeconds / 60);
      var seconds = totalSeconds % 60;

      // عرض الوقت في التنسيق mm:ss
      countdownDisplay.textContent = 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);

      totalSeconds--;

      if (totalSeconds < 0) {
        clearInterval(timer);
        countdownDisplay.textContent = "انتهى الوقت!";
        // يمكنك هنا تنفيذ أي إجراء آخر بعد انتهاء الوقت
        // مثل: alert("انتهى الوقت!") أو الانتقال لشريحة أخرى
      }
    }, 1000);
  }

  // بدء العداد عند تحميل الصفحة
  window.onload = startCountdown;
   var totalSeconds = 10 * 60; // 10 دقائق

  function startCountdown() {
    var countdownDisplay = document.getElementById("countdown");
    var timer = setInterval(function () {
      var minutes = Math.floor(totalSeconds / 60);
      var seconds = totalSeconds % 60;

      // عرض الوقت بالتنسيق mm:ss
      countdownDisplay.textContent = 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);

      totalSeconds--;

      if (totalSeconds < 0) {
        clearInterval(timer);
        countdownDisplay.textContent = "انتهى الوقت!";
        // يمكن إضافة إجراء هنا مثل alert أو الانتقال لصفحة
      }
    }, 1000);
  }

  window.onload = startCountdown;

