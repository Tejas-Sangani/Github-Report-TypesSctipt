"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var _lodash = __importStar(require("lodash"));
var svc = new GithubApiService_1.GithubApiService();
// Get github user
// svc.getUserInfo('tejas777', (user: User) => {
//     console.log(user);
// });
// Get github repos for user
// svc.getRepos('tejas777', (repos: Repo[]) => {
//     console.log(repos);
// });
// Get github user and its associated repos
// svc.getUserInfo('tejas777', (user: User) => {
//     svc.getRepos('tejas777', (repos: Repo[]) => {
//         user.repos = repos;
//         console.log(user);
//     });
// });
// Sort the repos by size in ascending order
// svc.getUserInfo('tejas777', (user: User) => {
//     svc.getRepos('tejas777', (repos: Repo[]) => {
//         let sortedReposByForkSizeAsc = _lodash.sortBy(repos, [(repo: Repo) => (repo.size)])
//         user.repos = sortedReposByForkSizeAsc;
//         console.log(user);
//     });
// });
// Sort the repos by size in descending order
// svc.getUserInfo('tejas777', (user: User) => {
//     svc.getRepos('tejas777', (repos: Repo[]) => {
//         let sortedReposByForkSizeDesc = _lodash.sortBy(repos, [(repo: Repo) => (repo.size * -1)])
//         user.repos = sortedReposByForkSizeDesc;
//         console.log(user);
//     });
// });
// Gets first 5 repos sorted by size ascending
// svc.getUserInfo('tejas777', (user: User) => {
//     svc.getRepos('tejas777', (repos: Repo[]) => {
//         let sortedReposByForkSize = _lodash.sortBy(repos, [(repo: Repo) => (repo.size)]),
//             filteredRepos = _lodash.take(sortedReposByForkSize, 5);
//         user.repos = filteredRepos;
//         console.log(user);
//     });
// });
// console output for process.argv
// process.argv = [ '/usr/local/bin/node',
//     '/Users/tejassangani/TEJAS/github-report/out/index.js',
//     'tejas777' ];
// Gets first 5 repos sorted by size ascending using commandline aurgument. If agrument not passed it will give error.
if (process.argv.length < 3) {
    console.log("Please pass the username as an aurgument");
}
else {
    var username_1 = process.argv[2];
    svc.getUserInfo(username_1, function (user) {
        svc.getRepos(username_1, function (repos) {
            var sortedReposByForkSize = _lodash.sortBy(repos, [function (repo) { return (repo.size); }]), filteredRepos = _lodash.take(sortedReposByForkSize, 5);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}
