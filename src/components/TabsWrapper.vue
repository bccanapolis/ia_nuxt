<template>
  <div>
    <nav>
      <div class='nav nav-tabs' id='nav-tab' role='tablist'>
        <button
          v-for='(child, index) in children'
          :class='`nav-link ${index === 0 ? `active`: ``}`'
          :id='`nav-${child.info.name}-tab`'
          data-bs-toggle='tab'
          :data-bs-target='`#nav-${child.info.name}`'
          type='button'
          role='tab'
          :aria-controls='`nav-${child.info.name}`'
          aria-selected='true'
        >
          <span class='capitalize'>{{ child.info.label }}</span>
        </button>
      </div>
    </nav>
    <div class='tab-content about-text pt-4' id='nav-tabContent'>
      <div
        v-for='(child, index) in children'
        :class='`tab-pane fade show ${index === 0 ? `active`: ``}`'
        :id='`nav-${child.info.name}`'
        role='tabpanel'
        :aria-labelledby='`nav-${child.info.name}-tab`'
      >
        <component :is='child' />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsWrapper',
  props: {
    children: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style scoped>

</style>
