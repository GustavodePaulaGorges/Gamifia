import { ref, computed } from "vue";
import { defineStore } from "pinia";
import GameApi from "@/api/games";
const gameApi = new GameApi();

export const UseGameInfo = defineStore("getgame", () => {
  const games = ref([]);
  async function getGames() {
    try {
      games.value = await gameApi.getGames();
    } catch {
      games.value = "wrong";
    }
  }

  return { games, getGames };
});
