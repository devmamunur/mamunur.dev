import {serverEnv} from "@/config/schemas/serverSchema";
import logger from "@/config/logger";

const getGitHubRepo = async () : Promise<any> => {
    const ghAuth = serverEnv.GITHUB_API_TOKEN ? {
            headers: {
                Authorization: `bearer ${serverEnv.GITHUB_API_TOKEN}`,
            },
        } : {};
    let repo : any;
    let data : Response | undefined;
    try{
        data = await fetch(`https://api.github.com/users/${serverEnv.GITHUB_USERNAME}/repos`, ghAuth);
        repo = await data.json();
        return repo;
    }catch (e : any){
        logger.error(e, `github repo fetch failed for user: ${serverEnv.GITHUB_USERNAME}`);
        throw new Error(e);
    }
}
export default getGitHubRepo;