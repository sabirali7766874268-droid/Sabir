// BAR CHART

const barCtx = document.getElementById('barChart');

new Chart(barCtx, {

  type: 'bar',

  data: {

    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],

    datasets: [{
      label: 'Revenue',

      data: [1200,1900,3000,5000,4200,6100,7200],

      backgroundColor: [
        '#3b82f6',
        '#0ea5e9',
        '#2563eb',
        '#22c55e',
        '#14b8a6',
        '#8b5cf6',
        '#f59e0b'
      ],

      borderRadius:10
    }]
  },

  options: {

    responsive:true,

    plugins:{
      legend:{
        labels:{
          color:'white'
        }
      }
    },

    scales:{
      x:{
        ticks:{
          color:'white'
        }
      },

      y:{
        ticks:{
          color:'white'
        }
      }
    }
  }
});


// DOUGHNUT CHART

const doughnutCtx = document.getElementById('doughnutChart');

new Chart(doughnutCtx, {

  type:'doughnut',

  data:{

    labels:['Desktop','Mobile','Tablet'],

    datasets:[{

      data:[55,35,10],

      backgroundColor:[
        '#2563eb',
        '#22c55e',
        '#f59e0b'
      ],

      borderWidth:0
    }]
  },

  options:{

    responsive:true,

    plugins:{
      legend:{
        labels:{
          color:'white'
        }
      }
    }
  }
});


// BUTTON ALERT

const downloadBtn = document.querySelector('.download-btn');

downloadBtn.addEventListener('click', () => {

  downloadBtn.innerText = 'Downloading...';

  setTimeout(() => {
    downloadBtn.innerText = 'Download Complete';
  }, 2000);

});