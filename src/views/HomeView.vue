<script>
import GameCard from '../components/GameCard.vue';
import { mapStores, mapActions, mapState} from 'pinia'
import { UseGameInfo } from '@/stores/gameinfo'

export default {
  components: { GameCard },
  computed: {
    ...mapStores(UseGameInfo),
    ...mapState(UseGameInfo, ['games'])
  },
  methods: {
    ...mapActions(UseGameInfo, ['getGames'])
  },
  async created() {
    await this.getGames()
  }
}
</script>
  
<template>
  <main>
    game - {{ games }}
    <div>
      <div class="row alt">
        <div class="col">
          <GameCard />
        </div>
        <div class="col">
          <GameCard />
        </div>
        <div class="col">
          <GameCard />
        </div>
        <div class="col">
          <GameCard />
        </div>
        <div class="col">
          <GameCard />
        </div>
        <div class="col">
          <GameCard />
        </div>
      </div>
      <div class="row alt">
        <div class="col">
          <GameCard />
        </div>
        <div class="col">
          <GameCard />
        </div>
        <div class="col">
          <GameCard />
        </div>
        <div class="col">
          <GameCard />
        </div>
        <div class="col">
          <GameCard />
        </div>
        <div class="col">
          <GameCard />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
  .alt{
    --bs-gutter-x: 0;
    margin-top: 1vh;
  }
</style>
