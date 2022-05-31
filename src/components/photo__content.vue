<template>
  <div class="slider">
    <div class="slide" v-for="(url, index) in urls" v :key="index">
      <img :src="url" alt="Photo {{ index }}" />
      <h1 class="heading--1">{{ texts[index] }}</h1>
    </div>

    <button class="slider__btn slider__btn--left"></button>
    <button class="slider__btn slider__btn--right"></button>
    <div class="dots"></div>
  </div>
</template>
<script>
export default {
  name: "photo__content",
  data() {
    return {
      dotClass: ".dots",
      urls: [
        "https://svgshare.com/i/hrA.svg",
        "https://svgshare.com/i/hrB.svg",
        "https://svgshare.com/i/hrV.svg",
      ],
      texts: [
        "Accelrate Your Entire Mobile Team Workflow",
        "The Most Comprehensive Bug Reporting Tool for Mobile Apps",
        "Secure Crash Reporting With Real-Time Alerts",
      ],
    };
  },
  methods: {
    activeDot(slide) {
      document
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
    },
    slider() {
      const slides = document.querySelectorAll(".slide");
      const btnLeft = document.querySelector(".slider__btn--left");
      const btnRight = document.querySelector(".slider__btn--right");
      let currSlide = 0;
      const maxSlide = slides.length - 1;

      //Dots
      const dotsContainer = document.querySelector(this.dotClass);

      //Functions
      const self = this;
      const createDots = function () {
        slides.forEach((_, i) => {
          dotsContainer.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${i}"></button>`
          );
        });
      };
      const goToSlide = (slide) => {
        slides.forEach((s, i) => {
          s.style.transform = `translateX(${100 * (i - slide)}%)`;
        });
      };
      const nextSlide = () => {
        if (currSlide === maxSlide) {
          currSlide = 0;
        } else {
          currSlide++;
        }
        goToSlide(currSlide);
        self.activeDot(currSlide);
      };

      const perviousSlide = () => {
        if (currSlide === 0) {
          currSlide = maxSlide;
        } else {
          currSlide--;
        }
        goToSlide(currSlide);
        self.activeDot(currSlide);
      };
      const init = function () {
        goToSlide(currSlide);
        createDots();
        self.activeDot(currSlide);
      };
      init();

      //Event handller
      btnRight.addEventListener("click", nextSlide);
      btnLeft.addEventListener("click", perviousSlide);
      document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") perviousSlide();
        e.key === "ArrowRight" && nextSlide();
      });

      dotsContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("dots__dot")) {
          const { slide } = e.target.dataset;
          // console.log(slide);
          goToSlide(slide);
          self.activeDot(slide);
        }
      });
      setInterval(() => {
        btnRight.click();
      }, 5000);
    },
  },
  mounted() {
    this.slider();
  },
};
</script>
<style lang="scss" scoped>
@import "@/components/variables.scss";
@import "@/components/photo__content.scss";
</style>
