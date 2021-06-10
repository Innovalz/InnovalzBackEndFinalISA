import {
  isDefined,
  ValidatorConstraint,
  registerDecorator,
  ValidateIf,
} from "class-validator";
import { __decorate } from "../../../helpers/decorate";

let IsNotSiblingOfConstraint = class IsNotSiblingOfConstraint {
  validate(value: any, args: any) {
    if (isDefined(value)) {
      return this.getFailedConstraints(args).length === 0;
    }
    return true;
  }
  defaultMessage(args: {
    property: any;
    constraints: any[];
    object: { [x: string]: any };
  }) {
    return `${
      args.property
    } cannot exist alongside the following defined properties: ${this.getFailedConstraints(
      args
    ).join(", ")}`;
  }
  getFailedConstraints(args: {
    constraints: any[];
    object: { [x: string]: any };
  }) {
    return args.constraints.filter((prop: string | number) => {
      return isDefined(args.object[prop]);
    });
  }
};
IsNotSiblingOfConstraint = __decorate(
  [ValidatorConstraint({ async: false })],
  IsNotSiblingOfConstraint
);
function IsNotSiblingOf(props: any, validationOptions?: undefined) {
  return function (target: { constructor: any }, propertyName: any) {
    registerDecorator({
      target: target.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: props,
      validator: IsNotSiblingOfConstraint,
    });
  };
}
function incompatibleSiblingsNotPresent(incompatibleSiblings: any[]) {
  return function (o: { [x: string]: any }, v: any) {
    return Boolean(
      isDefined(v) ||
        incompatibleSiblings.every(
          (prop: string | number) => !isDefined(o[prop])
        )
    );
  };
}
function IncompatibleWith(incompatibleSiblings: any) {
  const notSibling = IsNotSiblingOf(incompatibleSiblings);
  const validateIf = ValidateIf(
    incompatibleSiblingsNotPresent(incompatibleSiblings)
  );
  return function (target: Object, key: string | symbol) {
    notSibling(target, key);
    validateIf(target, key);
  };
}
const _IncompatibleWith = IncompatibleWith;
export { _IncompatibleWith as IncompatibleWith };
