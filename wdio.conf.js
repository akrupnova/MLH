exports.config = {
    runner: 'local',

    specs: [
        './test/smoke/*.js',
        './test/extended/*.js'
    ],

    exclude: [
      //   './test/extended/name.js',
      //   './test/extended/gender.js',
      //   './test/extended/age.js',
      //   './test/extended/age2.js',
      //    './test/extended/storyType.js',
      //   './test/extended/storyType2.js',
      //   './test/extended/image.js',
      //  './test/extended/image2.js',
      //   './test/extended/elements.js',
      // './test/extended/story.js',
      //  './test/extended/story2.js',
      //  './test/smoke/elementsExist.js',
      //  './test/smoke/labelsCorrect.js',
      //  './test/smoke/smokeFunctional.js'
    ],

    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://qa-apps.netlify.app/hero/fix',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['selenium-standalone'],

    framework: 'mocha',

    reporters: ['spec','dot'],

    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },
 }
