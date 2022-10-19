import axios from "axios";

export default class GameApi {
  async getGame() {
    const { data } = await axios.post(
      `https://api.igdb.com/v4/games`, 
      { headers: 
        {'Accept': 'application/json', 
      'Client-ID': 'ifkbm8zyz72nykbtv2rfwyb5syb1qt', 
      'Authorization': 'Bearer 6cum8uszav0n3d5rhz9oqriaddnqhy',}}
    );
    return data.game_info;
  }
}