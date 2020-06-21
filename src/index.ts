import {GithubApiService} from "./GithubApiService";
import {User} from "./User";
import {Repo} from "./Repo";
import * as _lodash from 'lodash';

let svc = new GithubApiService();
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
if(process.argv.length < 3) {
    console.log("Please pass the username as an aurgument");
} else {
    let username = process.argv[2];
    svc.getUserInfo(username, (user: User) => {
        svc.getRepos(username, (repos: Repo[]) => {
            let sortedReposByForkSize = _lodash.sortBy(repos, [(repo: Repo) => (repo.size)]),
                filteredRepos = _lodash.take(sortedReposByForkSize, 5);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}