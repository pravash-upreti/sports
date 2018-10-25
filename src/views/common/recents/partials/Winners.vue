<template>
  <div>
    <div>
      <h2 class="fixture-title">WINNERS</h2>
      <h1 class="winners">
        <i class="fa fa-medal winner-trophy" />{{ winner }}<i class="fa fa-medal winner-trophy" />
      </h1>
    </div>
    <div>
      <h2 class="fixture-title">RUNNER-UP</h2>
      <h1 class="runner-up">
        <i class="fa fa-medal runner-up-trophy" />{{ runnerUp }}<i class="fa fa-medal runner-up-trophy" />
      </h1>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Winners',
  props: {
    winner: {
      type: String,
      default: ''
    },
    runnerUp: {
      type: String,
      default: ''
    }
  }
};
</script>
