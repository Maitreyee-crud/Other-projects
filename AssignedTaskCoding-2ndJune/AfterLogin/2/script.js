function addDigit(num) {
      const input = document.getElementById('age');
      input.value += num;
    }

    function deleteDigit() {
      const input = document.getElementById('age');
      input.value = input.value.slice(0, -1);
    }

    function submitAge() {
      const age = document.getElementById('age').value;
      if (!age) {
        alert("Please enter your age.");
      } else {
        alert("Your age is: " + age);
      }
    }