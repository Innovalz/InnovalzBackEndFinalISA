export const __decorate = function (
  decorators: string | any[],
  target: Object,
  key?: PropertyKey,
  desc?: PropertyDescriptor
): any {
  const c = arguments.length;
  let r =
    c < 3
      ? target
      : desc === null
      ? (desc = Object.getOwnPropertyDescriptor(target, key as any))
      : desc;
  let d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators as any, target, key as any, desc as any);
  else
    for (let i = decorators.length - 1; i >= 0; i--)
      if ((d = decorators[i]))
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key as any, r), r;
};
