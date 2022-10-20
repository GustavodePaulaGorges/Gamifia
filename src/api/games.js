import axios from "axios";

export default class GameApi {
  async getGames() {
    const  {data}  = await axios.get('http://localhost:3000/games')
    return data
  }
}