// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  eshopUrl: 'http://localhost:8000/api/eshopus',
  eshopPriceUrl: 'http://localhost:8000/api/eshopprice',
  exchangeUrl: 'http://localhost:8000/api/exchange',
  cartDataUrl: 'http://localhost:8000/api/eshopcarts/'
};
