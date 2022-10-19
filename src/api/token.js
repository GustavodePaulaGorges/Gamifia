import axios from "axios";

export default class TokenApi {
  async getToken() {
    const { data } = await axios.post(
      `https://id.twitch.tv/oauth2/token?client_id=ifkbm8zyz72nykbtv2rfwyb5syb1qt&client_secret=fzikhase1smtam0f2iolgd8ydjxqz3&grant_type=client_credentials`
    );
    return data.access_token;
  }
}
