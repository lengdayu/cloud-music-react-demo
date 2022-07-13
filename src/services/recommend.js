import instance from "./request";

export function getTopBanners() {
  return instance({
    url: "/banner",
  });
}
