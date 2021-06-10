import { createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
export const User = createParamDecorator((_data, context) => {
  const ctx = GqlExecutionContext.create(context);
  return ctx.getContext().req.user;
});
