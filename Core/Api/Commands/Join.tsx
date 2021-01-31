import { API } from "../../Core";

export class Cmd_Join {
  static async Send(username: string) {
    const res = await API.post("Join", { username: username });

    return res;
  }
}
