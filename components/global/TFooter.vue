<template>
  <footer class="footer-section">
    <div class="container footer-top">
      <div class="row">
        <div class="col-sm-6 col-lg-3 footer-widget">
          <div class="about-widget">
            <a class="site-logo text-dark font-weight-bold" href="index-2.html">
              <img
                src="/img/logo_ifg_light.svg"
                style="height: 4rem"
                alt="Instituto Federal de Goiás"
              />
            </a>
            <p>
              orem ipsum dolor sit amet, consecter adipiscing elite. Donec minos
              varius, viverra justo ut, aliquet nisl.
            </p>
            <div class="social pt-1">
              <a href="#"><i class="fa fa-twitter-square"></i></a>
              <a href="#"><i class="fa fa-facebook-square"></i></a>
              <a href="#"><i class="fa fa-google-plus-square"></i></a>
              <a href="#"><i class="fa fa-linkedin-square"></i></a>
              <a href="#"><i class="fa fa-rss-square"></i></a>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3 footer-widget">
          <h6 class="fw-title">USEFUL LINK</h6>
          <div class="dobule-link">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Features</a></li>
            </ul>
            <ul>
              <li><a href="#">Policy</a></li>
              <li><a href="#">Term</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Site map</a></li>
            </ul>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3 footer-widget">
          <h6 class="fw-title">RECENT POST</h6>
          <ul class="recent-post">
            <li>
              <p>
                Snackable study:How to break <br />
                up your master's degree
              </p>
              <span><i class="fa fa-clock-o"></i>24 Mar 2018</span>
            </li>
            <li>
              <p>
                Open University plans major <br />
                cuts to number of staff
              </p>
              <span><i class="fa fa-clock-o"></i>24 Mar 2018</span>
            </li>
          </ul>
        </div>

        <div class="col-sm-6 col-lg-3 footer-widget">
          <h6 class="fw-title">CONTACT</h6>
          <ul class="contact">
            <li>
              <p>
                <i class="fa fa-map-marker"></i> 40 Baria Street 133/2, NewYork
                City,US
              </p>
            </li>
            <li>
              <p><i class="fa fa-phone"></i> (+88) 111 555 666</p>
            </li>
            <li>
              <p>
                <i class="fa fa-envelope"></i>
                <a
                  class="__cf_email__"
                  data-cfemail="2e474048414a4b4b5c4d5c4b4f5a47584b6e49434f4742004d4143"
                  href="https://preview.colorlib.com/cdn-cgi/l/email-protection"
                  >[email&#160;protected]</a
                >
              </p>
            </li>
            <li>
              <p>
                <i class="fa fa-clock-o"></i> Monday - Friday, 08:00AM - 06:00
                PM
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="copyright">
      <div class="container">
        <p>
          Copyright &copy; {{ new Date().getFullYear() }} All rights reserved |
          This template is made with
          <i aria-hidden="true" class="fa fa-heart-o"></i> by
          <a href="https://colorlib.com/" target="_blank">Colorlib</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TFooter',
}
</script>

<style scoped></style>
