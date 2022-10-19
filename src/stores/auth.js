import { ref, computed } from "vue";
import { defineStore } from "pinia";
import TokenApi from "@/api/token";
const tokenApi = new TokenApi();

export const useAuthStore = defineStore("auth", () => {
  const token = ref("");
  async function getToken() {
    try {
      token.value = await tokenApi.getToken();
    } catch {
      token.value = "wrong";
    }
  }

  return { token, getToken };
});
