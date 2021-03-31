<template>
  <div>
    <Hero />
    <!--    <Counter date_countdown='2021/03/31' />-->
    <Service />
    <!--    <Enroll />-->
    <!--    <Courses />-->
    <!--    <Fact />-->
    <!--    <Event />-->
    <!--    <Gallery />-->
    <!--    <Blog />-->
    <Newsletter />
  </div>
</template>

<script>
import Hero from '@/components/home-sections/hero'
import Counter from '@/components/home-sections/counter'
import Service from '@/components/home-sections/service'
import Enroll from '@/components/home-sections/enroll'
import Courses from '@/components/home-sections/courses'
import Fact from '@/components/home-sections/fact'
import Event from '@/components/home-sections/event'
import Gallery from '@/components/home-sections/gallery'
import Blog from '@/components/home-sections/blog'
import Newsletter from '@/components/home-sections/newsletter'

export default {
  name: 'Home',
  components: { Hero, Counter, Service, Enroll, Courses, Fact, Event, Gallery, Blog, Newsletter }
}
</script>

