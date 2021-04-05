import { check, sleep, group } from "k6";
import http from "k6/http";
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export const options = { 
  /*vus: 250,
  duration: 5m,*/
  stages: [
    { duration: '1m', target: 300 },
    { duration: '28m', target: 300 },
    { duration: '1m', target: 0 },
  ],
  thresholds: {
    errors: ['rate<0.2'], // <10% errors
  }, 
};

export default function main() {
  let response;

  const vars = {};

  group("Visit Homepage", function () {
    response = http.get("https://beta.newdimensionsactive.ie/");
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(1000);
  });

  group("Visit Shop", function () {
    response = http.get("https://beta.newdimensionsactive.ie/shop");
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(1000);

    response = http.get("https://beta.newdimensionsactive.ie/shop/page/2/");
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(1000);

    response = http.get("https://beta.newdimensionsactive.ie/shop/page/3/");
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(1000);

    response = http.get("https://beta.newdimensionsactive.ie/shop/page/4/");
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(1000);

    response = http.get("https://beta.newdimensionsactive.ie/shop/page/5/");
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(1000);

    
  });

  group("Add Product to Cart", function () {
      response = http.get("https://beta.newdimensionsactive.ie/product/compression-3-0-black-2/");
      check(response, {
        'is status 200': (r) => r.status === 200,
      });
      errorRate.add(!response);
      sleep(1000);

      response = http.post("https://beta.newdimensionsactive.ie/product/compression-3-0-black-2/",
        {
          attribute_pa_size: "m-size-12-14",
          quantity: 1,
          "add-to-cart":"45778",
          product_id:"45778",
          variation_id:"45782"
        });
      check(response, {
        'is status 200': (r) => r.status === 200,
      });
      errorRate.add(!response);
      sleep(1000);

    }
  );

  sleep(1);

  group("View Cart", function () {
    response = http.get("https://beta.newdimensionsactive.ie/cart/");
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(1000);
  });

  group("Go to Checkout", function () {
    response = http.get("https://beta.newdimensionsactive.ie/checkout/");
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
    errorRate.add(!response);
    sleep(1000);
  });

  sleep(1000);
}