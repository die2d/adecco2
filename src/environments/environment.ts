// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  //configuracion extraida de firebase
  firebase: {
    apiKey: "AIzaSyBNpNZWs2OeN3jeZ5bubWLgHuzWOlm5tW8",
    authDomain: "angular-kpi-firebase-v1.firebaseapp.com",
    databaseURL: "https://angular-kpi-firebase-v1.firebaseio.com",
    projectId: "angular-kpi-firebase-v1",
    storageBucket: "angular-kpi-firebase-v1.appspot.com",
    messagingSenderId: "568031062931"
  }
};
