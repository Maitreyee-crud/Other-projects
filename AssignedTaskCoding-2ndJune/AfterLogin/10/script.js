 const thumbMin = document.getElementById("thumbMin");
    const thumbMax = document.getElementById("thumbMax");
    const highlightTrack = document.getElementById("highlightTrack");
    const rangeValue = document.getElementById("rangeValue");

    const sliderWidth = 100; // percent of container width
    const minValue = 3;
    const maxValue = 12;

    let minPos = 13;
    let maxPos = 73;

    function updateRangeDisplay() {
      const minSalary = Math.round(minValue + (maxValue - minValue) * (minPos / sliderWidth));
      const maxSalary = Math.round(minValue + (maxValue - minValue) * (maxPos / sliderWidth));
      rangeValue.innerText = `$${minSalary}K - $${maxSalary}K`;
      rangeValue.style.left = `calc(${(minPos + maxPos) / 2}% - 30px)`;
      thumbMin.style.left = `${minPos}%`;
      thumbMax.style.left = `${maxPos}%`;
      highlightTrack.style.left = `${minPos}%`;
      highlightTrack.style.width = `${maxPos - minPos}%`;
    }

    updateRangeDisplay();