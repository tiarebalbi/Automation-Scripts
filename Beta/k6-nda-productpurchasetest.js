import { sleep, group } from "k6";
import http from "k6/http";

export const options = { vus: 100, duration: "3m22s" };

export default function main() {
  let response;

  const vars = {};

  group("Visit Homepage", function () {
    response = http.get("https://beta.newdimensionsactive.ie/", {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en,it;q=0.9",
        "cache-control": "max-age=0",
        dnt: "1",
        "sec-ch-ua":
          '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
      },
    });
  });

  group("Visit Shop", function () {
    response = http.get("https://beta.newdimensionsactive.ie/shop", {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en,it;q=0.9",
        dnt: "1",
        "sec-ch-ua":
          '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
      },
    });

    response = http.get("https://beta.newdimensionsactive.ie/shop/page/2/", {
      headers: {
        accept: "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en,it;q=0.9",
        dnt: "1",
        "sec-ch-ua":
          '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
      },
    });

    vars["filter_colour1"] = response
      .html()
      .find("input[name=filter_colour]")
      .first()
      .attr("value");

    vars["paged1"] = response
      .html()
      .find("input[name=paged]")
      .first()
      .attr("value");

    response = http.get("https://beta.newdimensionsactive.ie/shop/page/3/", {
      headers: {
        accept: "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en,it;q=0.9",
        dnt: "1",
        "sec-ch-ua":
          '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
      },
    });

    response = http.get("https://beta.newdimensionsactive.ie/shop/page/4/", {
      headers: {
        accept: "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en,it;q=0.9",
        dnt: "1",
        "sec-ch-ua":
          '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
      },
    });

    response = http.get("https://beta.newdimensionsactive.ie/shop/page/5/", {
      headers: {
        accept: "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en,it;q=0.9",
        dnt: "1",
        "sec-ch-ua":
          '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
      },
    });

    response = http.post("https://beta.newdimensionsactive.ie/?wc-ajax=add_to_cart",
      {
        product_sku: `${vars["filter_colour1"]}`,
        product_id: "43517",
        quantity: `${vars["paged1"]}`,
      },
      {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en,it;q=0.9",
          "content-type":
            "application/x-www-form-urlencoded;type=content-type;mimeType=application/x-www-form-urlencoded",
          dnt: "1",
          origin: "https://beta.newdimensionsactive.ie",
          "sec-ch-ua":
            '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
        },
      }
    );
  });

  group("Add Product 1 to Cart", function () {
      response = http.get("https://beta.newdimensionsactive.ie/product/functional-tech-hoodie-2-0-black/",
        {
          headers: {
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en,it;q=0.9",
            dnt: "1",
            "sec-ch-ua":
              '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
          },
        }
      );

      response = http.post("https://beta.newdimensionsactive.ie/product/functional-tech-hoodie-2-0-black/",
        {
          attribute_pa_size: "large",
          quantity: `${vars["paged1"]}`,
          "add-to-cart": "44218",
          product_id: "44218",
          variation_id: "44221",
        },
        {
          headers: {
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en,it;q=0.9",
            "content-type":
              "application/x-www-form-urlencoded;type=content-type;mimeType=application/x-www-form-urlencoded",
            dnt: "1",
            origin: "https://beta.newdimensionsactive.ie",
            "sec-ch-ua":
              '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
          },
        }
      );

      response = http.post("https://beta.newdimensionsactive.ie/?wc-ajax=get_refreshed_fragments",
        {
          time: "1615840358466",
        },
        {
          headers: {
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en,it;q=0.9",
            "content-type":
              "application/x-www-form-urlencoded;type=content-type;mimeType=application/x-www-form-urlencoded",
            dnt: "1",
            origin: "https://beta.newdimensionsactive.ie",
            "sec-ch-ua":
              '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
          },
        }
      );
    }
  );

  group("View Cart", function () {
    response = http.get("https://beta.newdimensionsactive.ie/cart/", {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en,it;q=0.9",
        dnt: "1",
        "sec-ch-ua":
          '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
      },
    });
  });

  group("Go to Checkout", function () {
    response = http.get("https://beta.newdimensionsactive.ie/checkout/", {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en,it;q=0.9",
        dnt: "1",
        "sec-ch-ua":
          '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
      },
    });

    response = http.post("https://beta.newdimensionsactive.ie/?wc-ajax=update_order_review",
      {
        security: "1a583473a4",
        payment_method: "cod",
        country: "IE",
        state: "D",
        postcode: `${vars["filter_colour1"]}`,
        city: `${vars["filter_colour1"]}`,
        address: `${vars["filter_colour1"]}`,
        address_2: `${vars["filter_colour1"]}`,
        s_country: "IE",
        s_state: "D",
        s_postcode: `${vars["filter_colour1"]}`,
        s_city: `${vars["filter_colour1"]}`,
        s_address: `${vars["filter_colour1"]}`,
        s_address_2: `${vars["filter_colour1"]}`,
        has_full_address: "false",
        post_data:
          "billing_first_name%3D%26billing_last_name%3D%26billing_company%3D%26billing_country%3DIE%26billing_address_1%3D%26billing_address_2%3D%26billing_city%3D%26billing_state%3DD%26billing_postcode%3D%26billing_phone%3D%26billing_email%3D%26account_password%3D%26shipping_first_name%3D%26shipping_last_name%3D%26shipping_company%3D%26shipping_country%3DIE%26shipping_address_1%3D%26shipping_address_2%3D%26shipping_city%3D%26shipping_state%3DD%26shipping_postcode%3D%26order_comments%3D%26shipping_method%255B0%255D%3Dflat_rate%253A1%26payment_method%3Dcod%26terms-field%3D1%26card_number%3D%26woocommerce-process-checkout-nonce%3D1cc49577f6%26_wp_http_referer%3D%252Fcheckout%252F",
        "shipping_method%5B0%5D": "flat_rate%3A1",
      },
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en,it;q=0.9",
          "content-type":
            "application/x-www-form-urlencoded;type=content-type;mimeType=application/x-www-form-urlencoded",
          dnt: "1",
          origin: "https://beta.newdimensionsactive.ie",
          "sec-ch-ua":
            '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
        },
      }
    );

    response = http.post("https://beta.newdimensionsactive.ie/?wc-ajax=update_order_review",
      {
        security: "1a583473a4",
        payment_method: "cod",
        country: "IE",
        state: "D",
        postcode: "D09YV76",
        city: "DUBLIN%209",
        address: "5%20Dromlee%20Crescent",
        address_2: `${vars["filter_colour1"]}`,
        s_country: "IE",
        s_state: "D",
        s_postcode: "D09YV76",
        s_city: "DUBLIN%209",
        s_address: "5%20Dromlee%20Crescent",
        s_address_2: `${vars["filter_colour1"]}`,
        has_full_address: "true",
        post_data:
          "billing_first_name%3DDeclan%26billing_last_name%3DFlynn%26billing_company%3D%26billing_country%3DIE%26billing_address_1%3D5%2520Dromlee%2520Crescent%26billing_address_2%3D%26billing_city%3DDUBLIN%25209%26billing_state%3DD%26billing_postcode%3DD09YV76%26billing_phone%3D0879984455%26billing_email%3Dflynnd6%26account_password%3DM4hhvm3e!%26shipping_first_name%3D%26shipping_last_name%3D%26shipping_company%3D%26shipping_country%3DIE%26shipping_address_1%3D%26shipping_address_2%3D%26shipping_city%3D%26shipping_state%3DD%26shipping_postcode%3D%26order_comments%3D%26shipping_method%255B0%255D%3Dflat_rate%253A1%26payment_method%3Dcod%26terms-field%3D1%26woocommerce-process-checkout-nonce%3D1cc49577f6%26_wp_http_referer%3D%252F%253Fwc-ajax%253Dupdate_order_review",
        "shipping_method%5B0%5D": "flat_rate%3A1",
      },
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en,it;q=0.9",
          "content-type":
            "application/x-www-form-urlencoded;type=content-type;mimeType=application/x-www-form-urlencoded",
          dnt: "1",
          origin: "https://beta.newdimensionsactive.ie",
          "sec-ch-ua":
            '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
        },
      }
    );

    response = http.post("https://beta.newdimensionsactive.ie/?wc-ajax=checkout",
      {
        billing_first_name: "Declan",
        billing_last_name: "Flynn",
        billing_company: `${vars["filter_colour1"]}`,
        billing_country: "IE",
        billing_address_1: "5%20Dromlee%20Crescent",
        billing_address_2: `${vars["filter_colour1"]}`,
        billing_city: "DUBLIN%209",
        billing_state: "D",
        billing_postcode: "D09YV76",
        billing_phone: "0879984455",
        billing_email: "flynnd6%40gmail.com",
        account_password: "M4hhvm3e!",
        shipping_first_name: `${vars["filter_colour1"]}`,
        shipping_last_name: `${vars["filter_colour1"]}`,
        shipping_company: `${vars["filter_colour1"]}`,
        shipping_country: "IE",
        shipping_address_1: `${vars["filter_colour1"]}`,
        shipping_address_2: `${vars["filter_colour1"]}`,
        shipping_city: `${vars["filter_colour1"]}`,
        shipping_state: "D",
        shipping_postcode: `${vars["filter_colour1"]}`,
        order_comments: `${vars["filter_colour1"]}`,
        "shipping_method%5B0%5D": "flat_rate%3A1",
        payment_method: "cod",
        terms: "on",
        "terms-field": `${vars["paged1"]}`,
        "woocommerce-process-checkout-nonce": "1cc49577f6",
        _wp_http_referer: "%2F%3Fwc-ajax%3Dupdate_order_review",
      },
      {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en,it;q=0.9",
          "content-type":
            "application/x-www-form-urlencoded;type=content-type;mimeType=application/x-www-form-urlencoded",
          dnt: "1",
          origin: "https://beta.newdimensionsactive.ie",
          "sec-ch-ua":
            '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
        },
      }
    );
  });

  group("View Order Confirmation", function () {
      response = http.get("https://beta.newdimensionsactive.ie/checkout/order-received/44315/?key=wc_order_bEqih2chtfjbu",
        {
          headers: {
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en,it;q=0.9",
            dnt: "1",
            "sec-ch-ua":
              '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "upgrade-insecure-requests": "1",
          },
        }
      );

      response = http.post("https://beta.newdimensionsactive.ie/?wc-ajax=get_refreshed_fragments",
        {
          time: "1615840415096",
        },
        {
          headers: {
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en,it;q=0.9",
            "content-type":
              "application/x-www-form-urlencoded;type=content-type;mimeType=application/x-www-form-urlencoded",
            dnt: "1",
            origin: "https://beta.newdimensionsactive.ie",
            "sec-ch-ua":
              '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
          },
        }
      );
    }
  );

  // Automatically added sleep
  sleep(1);
}