export let DeveloperError: {
  passwordsAreNotMatched: any;
  productOrOtherProduct: string | undefined;
};
(function (DeveloperError) {
  DeveloperError["passwordsAreNotMatched"] =
    "Dev-Error: Password and confirm password are not matched";
  DeveloperError["productOrOtherProduct"] =
    "Dev-Error: Should have product or otherProduct";
})((DeveloperError = exports.DeveloperError || (exports.DeveloperError = {})));
