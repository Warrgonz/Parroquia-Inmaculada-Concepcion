document.addEventListener("DOMContentLoaded", () => {
  const filterType = document.getElementById("filter-type");
  const filterCost = document.getElementById("filter-cost");
  const clearDateBtn = document.getElementById("clear-date-filter");
  const activitiesGrid = document.getElementById("activities-grid");
  const cards = activitiesGrid.querySelectorAll(".activity-card");

  const datePicker = flatpickr("#filter-date-range", {
    mode: "range",
    dateFormat: "Y-m-d",
    locale: "es",
    onChange: function (selectedDates) {
      applyFilters();
      clearDateBtn.style.display =
        selectedDates.length > 0 ? "inline-block" : "none";
    },
  });

  clearDateBtn.addEventListener("click", () => {
    datePicker.clear();
  });

  function applyFilters() {
    const typeValue = filterType.value;
    const costValue = filterCost.value;
    const selectedDates = datePicker.selectedDates;

    cards.forEach((card) => {
      const cardType = card.getAttribute("data-type");
      const cardCost = card.getAttribute("data-cost");
      const cardDate = new Date(card.getAttribute("data-date"));

      const typeMatch = typeValue === "all" || typeValue === cardType;
      const costMatch = costValue === "all" || costValue === cardCost;

      let dateMatch = true;
      if (selectedDates.length === 2) {
        const startDate = selectedDates[0];
        const endDate = new Date(selectedDates[1]);
        endDate.setHours(23, 59, 59, 999);
        dateMatch = cardDate >= startDate && cardDate <= endDate;
      }

      if (typeMatch && costMatch && dateMatch) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  }

  filterType.addEventListener("change", applyFilters);
  filterCost.addEventListener("change", applyFilters);
});
