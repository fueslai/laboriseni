import { queue } from '@ngrx/router-store';

const action = queue({
  path: '/new-route',
  queryParams: { foo: 'bar' }
});
