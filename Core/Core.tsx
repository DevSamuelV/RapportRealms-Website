import Pulse from "@pulsejs/core";

export const Core = new Pulse();

export const API = Core.API({
  options: {},
  baseURL: "localhost:4256",
  path: "/v1/",
});
