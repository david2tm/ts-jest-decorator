// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Type = any
export type Target<This> = (this: This, ...args: Type[]) => Type

function decorator<This>(
  target: Target<This>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  context: ClassMethodDecoratorContext
) {
  return function (this: This, ...args: Type[]) {
    const returnValue = target.call(this, ...args)
    return returnValue * 2
  }
}

export class Foo {
  @decorator
  method(a: number): number {
    return a * 2;
  }
}