import test from 'ava'
import ensureSlash from '.'

test('appends a trailing slash if there is none', t => {
  t.is(ensureSlash('/home/foo'), '/home/foo/')
})

test('does nothing if there is already a trailing slash', t => {
  t.is(ensureSlash('/home/bar/'), '/home/bar/')
})

test('throws a TypeError if the argument is not a string', t => {
  t.throws(() => ensureSlash(null), TypeError)
})
