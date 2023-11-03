import {NextResponse} from "next/server";
import getGitHubRepo from "@/services/github/getRepo";

export async function GET(request: Request) {
    try{
        const gitRepos = await getGitHubRepo();
        return NextResponse.json({success : true, data : gitRepos}, {status : 200})
    }catch (error){
        return NextResponse.json({success : false, data : ''}, {status : 500})
    }
}