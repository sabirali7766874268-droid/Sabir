// Line Chart

const lineCtx = document.getElementById('lineChart');

new Chart(lineCtx, {
  type: 'line',

  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

    datasets: [{
      label: 'Revenue',
      data: [1200, 1900, 3000, 2500, 4200, 5000],
      borderWidth: 3,
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(59,130,246,0.2)',
      borderColor: '#3b82f6',
      pointBackgroundColor: '#38bdf8'
    }]
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },

    scales: {
      x: {
        ticks: {
          color: 'white'
        }
      },

      y: {
        ticks: {
          color: 'white'
        }
      }
    }
  }
});


// Pie Chart

const pieCtx = document.getElementById('pieChart');

new Chart(pieCtx, {
  type: 'doughnut',

  data: {
    labels: ['Desktop', 'Mobile', 'Tablet'],

    datasets: [{
      data: [55, 35, 10],

      backgroundColor: [
        '#3b82f6',
        '#22c55e',
        '#f59e0b'
      ]
    }]
  },

  options: {
    responsive:true,

    plugins: {
      legend: {
        labels: {
          color:'white'
        }
      }
    }
  }
});