import { ref, computed } from "vue";
import { defineStore } from "pinia";
import GameApi from "@/api/games";
const gameApi = new GameApi();

export const UseGameInfo = defineStore("getgame", () => {
  const game = ref([]);
  async function getGame() {
    try {
      game.value = await gameApi.getGame();
    } catch {
      game.value = "wrong";
    }
  }

  return { game, getGame };
});
