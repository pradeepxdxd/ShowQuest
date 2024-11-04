import jsCookie from "js-cookie";

export default function useCookies(name: string) {
  return jsCookie.get(name);
}
