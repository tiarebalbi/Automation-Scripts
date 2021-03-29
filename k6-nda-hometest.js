import { check, sleep } from 'k6';
import http from 'k6/http';

export default function () {
    let res = http.get('https://newdimensionsactive.ie');
    check(res, {
        'is status 200': (r) => r.status === 200,
      });
    sleep(1);
}