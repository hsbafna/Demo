// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyDO85KqhNkagNq0QBmXXgkCStb1xICC7Z0",
    authDomain: "payment-df85d.firebaseapp.com",
    databaseURL: "https://payment-df85d.firebaseio.com",
    projectId: "payment-df85d",
    storageBucket: "payment-df85d.appspot.com",
    messagingSenderId: "939424069766"
  }
};
