import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "60s", target: 100 },
    { duration: "60s", target: 250 },
    { duration: "60s", target: 500 },
    { duration: "60s", target: 0 }
  ],
  rps: 10000
};

export default function() {
  let res = http.get("http://localhost:1234");
  check(res, {
    "status was 200": r => r.status == 200,
    "transaction time OK": r => r.timings.duration < 200
  });
  // sleep(1);
}
