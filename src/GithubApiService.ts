import * as request from 'request';
import {User} from "./User";
import {Repo} from "./Repo";

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

export class GithubApiService {

    // Here the second parameter is callback function which take a user instance as its argument and returns of any type
    getUserInfo(userName: string, cb: (user: User) => any) {
        request.get('https://api.github.com/users/' + userName, OPTIONS, (error: any, response: any, body: any) => {
            let user = new User(body);
            cb(user);
        })
    }

    getRepos(userName: string, cb: (repoArray: Repo[]) => any) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, (error: any, response: any, body: any) => {
            let repoArray = body;
            // The map function executes the function passed to it for each element of the array and returns the new
            // array with the corresponding return value.
            let repos = repoArray.map((repo: any) => new Repo(repo));
            cb(repos);
        })
    }
}