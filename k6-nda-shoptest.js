import { check } from 'k6';
import http from 'k6/http';

export let options = {
  stages: [
    { duration: '2m', target: 100 }, // below normal load
    { duration: '1m', target: 100 },
    { duration: '2m', target: 200 }, // normal load
    { duration: '1m', target: 200 },
    /*{ duration: '2m', target: 300 }, // around the breaking point
    { duration: '1m', target: 300 },
    { duration: '2m', target: 400 }, // beyond the breaking point
    { duration: '1m', target: 400 },
    { duration: '2m', target: 500 }, // beyond the breaking point
    { duration: '1m', target: 500 },*/
    { duration: '2m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function () {
    let res = http.get('https://newdimensionsactive.ie/shop/');
    check(res, {
        'is status 200': (r) => r.status === 200,
      });
}