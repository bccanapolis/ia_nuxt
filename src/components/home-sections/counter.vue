<template>
  <section class='counter-section'>
    <div class='container'>
      <div class='row'>
        <div class='col-lg-7 col-md-6'>
          <div class='big-icon'>
            <i class='fa fa-graduation-cap'></i>
          </div>
          <div class='counter-content'>
            <h2>NEXT COUSRE: Sales & Marketing Alignment</h2>
            <p><i class='fa fa-calendar-o'></i>07:00 PM - 09:00 PM</p>
          </div>
        </div>
        <div class='col-lg-5 col-md-6'>
          <div class='counter'>
            <div class='counter-item'><h4>20</h4>Days</div>
            <div class='counter-item'><h4>08</h4>Hrs</div>
            <div class='counter-item'><h4>40</h4>Mins</div>
            <div class='counter-item'><h4>56</h4>secs</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'counter',
  props: {
    date_countdown: {
      type: String
    }
  },
  mounted() {
    (($) => {
      $('.counter').countdown(this.date_countdown, function(event) {
        $(this).html(event.strftime('<div class=\'counter-item\'><h4>%D</h4>Days</div>' + '<div class=\'counter-item\'><h4>%H</h4>hours</div>' + '<div class=\'counter-item\'><h4>%M</h4>Mins</div>' + '<div class=\'counter-item\'><h4>%S</h4>secs</div>'))
      })
    })(jQuery)
  }
}
</script>

<style scoped>

</style>
