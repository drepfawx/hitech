new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: ["Януари", "Февруари", "Март", "Април"],
    
    datasets: [
      {
        label: "Доход през 2022 г.",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
        data: [26374,32047,31117,28599]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: false,
      
    }
  }
});



