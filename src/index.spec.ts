import { Foo } from './index'

describe("index", () => {
  it('works', () => {
    const foo = new Foo()
    expect(foo.method(2)).toEqual(8)
  })
});