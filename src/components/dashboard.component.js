export default {
    name: 'mimo-dashboard',
    template: `
    <div class="dashboard p-3 d-flex flex-column">
        <div class="flex-grow-1" v-html="$t('core.dashboard')"></div>
        <small class="align-self-center">&copy; Copyright 2021, José Javier Rodríguez Gallego</small>
    </div>
    `
}