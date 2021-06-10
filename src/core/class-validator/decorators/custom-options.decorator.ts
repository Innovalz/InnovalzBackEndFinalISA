import { createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
export const CustomOptions = createParamDecorator((_data, _context) => {
  const ctx = GqlExecutionContext.create(_context);
  const context = ctx.getContext();
  return {
    user: context.req.user,
    language: context.i18nLang,
  };
});
