export default {
  name: 'mimo-loader',
  props: ['loading'],
  template: `
  <div v-if="loading" class="loader-bg">
    <div class="lds-roller">
        <!-- https://loading.io/css/ -->
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  </div>
    `,
}
