<template>
  <div class="row">
    <div class="card mb-2">
      <button class="btn btn-default active" @click="block('edit')">
        Block
      </button>
    </div>
    <div class="card mb-2">
      <button class="btn btn-default active" @click="resolved('edit')">
        Resolved
      </button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      stateBlock: 'blocked',
      stateResolved: 'resolved'
    }
  },
  methods: {
    async block () {
      const id = this.data.id
      const data = {
        state: this.stateBlock
      }
      try {
        await axios.put(
          `/http://localhost:8085/api/app/challenge/reports/${id}`, data
        )
      } catch (error) {
        console.log(error.message)
      }
    },
    async resolved () {
      const id = this.data.id
      const data = {
        state: this.stateResolved
      }
      try {
        await axios.put(
          `/http://localhost:8085/api/app/challenge/reports/${id}`, data
        )
      } catch (error) {
        console.log(error.message)
      }
    }
  },
  props: {
    // prop below is REQUIRED:
    data: {
      type: Object
    }
  }
}
</script>
