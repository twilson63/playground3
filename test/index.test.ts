import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { run } from '../src/index.ts'

test('ok', async () => {
  const result = await run('https://g8way.io').toPromise()
  assert.ok(result)
})

test.run()