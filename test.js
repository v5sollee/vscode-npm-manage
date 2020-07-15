// /*
//  * @Description:
//  * @Date: 2020-07-13 23:48:15
//  */
// const config = require('libnpmconfig');

// console.log(
//   'configured registry:',
//   config.read({
//     registry: 'https://default.registry/',
//   })
// );

/**
 * 
 * configured registry: FiggyPudding {
  cache: '/Users/liyang/.npm',
  registry: 'https://default.registry/',
  'init-author-name': '李阳',
  '//f.pr.meijian.tech/:_authToken': 'ZpkakEouTxviP4Ougx9ITQ==',
  home: 'http://cnpmjs.org',
  configNames: [ 'npmrc', '.npmrc' ],
  envPrefix: /^npm_config_/i,
  cwd: '/Users/liyang/code/gitDemo/vscode-versionlens-master',
  globalconfig: '/Users/liyang/.nvm/versions/node/v12.8.0/etc/npmrc',
  userconfig: '/Users/liyang/.npmrc'
}
 */

// const promiseSpawn = require('@npmcli/promise-spawn')

// promiseSpawn('ls', [ '-laF', 'some/dir/*.js' ], {
//   cwd: '/tmp/some/path', // defaults to process.cwd()
//   stdioString: false, // stdout/stderr as strings rather than buffers
//   stdio: 'pipe', // any node spawn stdio arg is valid here
//   // any other arguments to node child_process.spawn can go here as well,
//   // but uid/gid will be ignored and set by infer-owner if relevant.
// }, {
//   extra: 'things',
//   to: 'decorate',
//   the: 'result',
// }).then(result => {
//   // {code === 0, signal === null, stdout, stderr, and all the extras}
//   console.log('ok!', result)
// }).catch(er => {
//   // er has all the same properties as the result, set appropriately
//   console.error('failed!', er)
// })

// var assert = require("assert")
// var npa = require("npm-package-arg")
// // Pass in the descriptor, and it'll return an object
// try {
//   var parsed = npa("@bar/foo@1.2")
//   console.log(`parsed`, parsed);
// } catch (ex) {
// }

const ncu = require('npm-check-updates');

const getVersion = async () => {
  const data = await ncu.run({
    // Any command-line option can be specified here.
    // These are set by default:
    configFilePath: '/Users/liyang/code/github/vscode-npm-manage/package.json',
    jsonUpgraded: true,
    packageManager: 'npm',
    silent: true,
  });
  console.log('data:', data);
};

getVersion();
// ncu
//   .run({
//     // Any command-line option can be specified here.
//     // These are set by default:
//     jsonUpgraded: true,
//     packageManager: 'npm',
//     silent: true,
//   })
//   .then((upgraded) => {
//     console.log('dependencies to upgrade:', upgraded);
//   });

// const latestVersion = require('latest-version');

// (async () => {
//   console.log(await latestVersion('react'));
//   console.log(await latestVersion('redux'));
//   //=> '0.18.0'

//   console.log(await latestVersion('lodash'));
//   //=> '1.0.1'

//   // Also works with semver ranges and dist-tags
//   console.log(await latestVersion('npm', { version: 'latest-3' }));
//   //=> '5.5.1'
// })();

// const packageJson = require('package-json');

// (async () => {
//   console.log(await packageJson('shuqu-cli'));
//   //=> {name: 'ava', ...}

//   // Also works with scoped packages
//   console.log(await packageJson('nestjs'));
// })();

// var readJson = require('read-package-json');

// // readJson(filename, [logFunction=noop], [strict=false], cb)
// readJson('/Users/liyang/code/github/vscode-npm-manage/package.json', console.error, false, function (er, data) {
//   if (er) {
//     console.error('There was an error reading the file');
//     return;
//   }

//   console.error('the package data is', data);
// });
