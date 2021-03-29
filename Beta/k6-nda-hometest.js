import { check } from 'k6';
import http from 'k6/http';

export default function () {
    let res = http.get('http://34.255.40.57');
    check(res, {
        'is status 200': (r) => r.status === 200,
      });
}