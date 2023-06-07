import { of, fromPromise } from 'hyper-async'

export const run = x => of(x)
  .chain(fromPromise(fetch))
  .chain(res => fromPromise(res.json.bind(res))())