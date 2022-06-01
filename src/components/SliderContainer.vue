<template>
  <div class="slider">
    <div
      class="slide"
      ref="allSlides"
      v-for="(url, index) in urls"
      :key="index"
    >
      <img :src="url" alt="Photo {{ index }}" />
      <h1 class="heading--1">{{ texts[index] }}</h1>
    </div>
    <!-- @/assets/hrA.svg -->
    <div class="slider__btn slider__btn--left"></div>
    <div
      class="slider__btn slider__btn--right"
      @click="nextSlide"
      ref="rigthBtn"
    ></div>
    <div class="dots" @click="dotsClickEvent"></div>
  </div>
</template>
<script>
import image1 from "@/assets/SliderImages/hrA.svg";
import image2 from "@/assets/SliderImages/hrB.svg";
import image3 from "@/assets/SliderImages/hrV.svg";
export default {
  name: "photo__content",
  data() {
    return {
      dotClass: ".dots",
      urls: [image1, image2, image3],
      currSlide: 0,
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
    goToSlide(slide) {
      this.$refs.allSlides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
      });
    },
    nextSlide() {
      if (this.currSlide === this.urls.length - 1) {
        this.currSlide = 0;
      } else {
        this.currSlide++;
      }
      this.goToSlide(this.currSlide);
      this.activeDot(this.currSlide);
    },
    createDots() {
      //Dots
      const dotsContainer = document.querySelector(this.dotClass);

      this.$refs.allSlides.forEach((_, i) => {
        dotsContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    },
    dotsClickEvent(e) {
      if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        this.goToSlide(slide);
        this.activeDot(slide);
      }
    },
    init() {
      this.goToSlide(this.currSlide);
      this.createDots();
      this.activeDot(this.currSlide);
    },

    slider() {
      this.init();
      setInterval(() => {
        this.$refs.rigthBtn.click();
      }, 5000);
    },
  },
  mounted() {
    this.slider();
  },
};
</script>
<style lang="scss">
@import "@/style/main.scss";
.slider {
  grid-column: full-start/col-end 6;
  background-color: $color__instabug;
  max-width: 100rem;
  height: 100%;
  position: relative;

  overflow: hidden;

  @media only screen and (max-width: 18.75em) /*300px*/ {
    & {
      display: none;
    }
  }
}
.slide {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  transition: transform 1s;
}

.slide > img {
  width: 70%;
  height: 70%;
  object-fit: contain;
}

.slider__btn--left {
  left: 6%;
  transform: translate(-50%, -50%);
}

.slider__btn--right {
  right: 6%;
  transform: translate(50%, -50%);
}

.heading--1 {
  font-size: 2rem;
  color: #bcd8e8;
}
.dots {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.dots__dot {
  background-color: transparent;
  @include customBorder(transparent, $color__gray--light);

  opacity: 0.7;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: 1.75rem;
  cursor: pointer;
  transition: all 0.5s;
}

.dots__dot:last-child {
  margin: 0;
}

.dots__dot--active {
  background-color: $color__gray--light;
  opacity: 1;
}
</style>
