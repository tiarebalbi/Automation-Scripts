import { check, sleep, group } from "k6";
import http from "k6/http";
import { Rate } from "k6/metrics";

const targetUser = __ENV.TARGET_VUS ? __ENV.TARGET_VUS : 500;
const minTime = __ENV.MIN_TIME ? __ENV.MIN_TIME : '10s';
const maxTime = __ENV.MAX_TIME ? __ENV.MAX_TIME : '1m';
const domain = __ENV.TARGET_DOMAIN
  ? `https://${__ENV.TARGET_DOMAIN}`
  : "https://beta.newdimensionsactive.ie/";
let printed = 0;

if (printed === 0) {
  console.log(`### Starting test with ${targetUser} VUS with domain ${domain} (${minTime} / ${maxTime})`);
  printed = 1;
}

export let errorRate = new Rate("errors");
export let options = {
  /*vus: 250,
  duration: 5m,*/
  stages: [
    { duration: minTime, target: targetUser },
    { duration: maxTime, target: targetUser },
    { duration: minTime, target: 0 },
  ],
  thresholds: {
    errors: ["rate<0.2"], // <10% errors
  },
};

const PAUSE_EVENT = 1.5; // sleep works with seconds

export default function () {
  let response = {};
  const vars = {};

  group("Visit Homepage", function () {
    response = http.get(`${domain}`);
    check(response, {
      "is status 200": (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(PAUSE_EVENT);
  });

  group("Visit Shop", function () {
    response = http.get(`${domain}/shop`);
    check(response, {
      "is status 200": (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(PAUSE_EVENT);

    response = http.get(`${domain}/shop/page/2/`);
    check(response, {
      "is status 200": (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(PAUSE_EVENT);

    response = http.get(`${domain}/shop/page/3/`);
    check(response, {
      "is status 200": (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(PAUSE_EVENT);

    response = http.get(`${domain}/shop/page/4/`);
    check(response, {
      "is status 200": (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(PAUSE_EVENT);

    response = http.get(`${domain}/shop/page/5/`);
    check(response, {
      "is status 200": (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(PAUSE_EVENT);
  });

  group("Add Product to Cart", function () {
    const url = `${domain}/product/compression-3-0-black/`;
    response = http.get(url);
    check(response, {
      "is status 200": (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(PAUSE_EVENT);

    response = http.post(url, {
      attribute_pa_size: "m-size-12-14",
      quantity: 1,
      "add-to-cart": "45778",
      product_id: "45778",
      variation_id: "45782",
    });
    check(response, {
      "is status 200": (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(PAUSE_EVENT);
  });

  group("View Cart", function () {
    response = http.get(`${domain}/cart/`);
    check(response, {
      "is status 200": (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(PAUSE_EVENT);
  });

  group("Go to Checkout", function () {
    response = http.get(`${domain}/checkout/`);
    check(response, {
      "is status 200": (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(PAUSE_EVENT);
  });
}
