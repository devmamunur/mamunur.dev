import { NextResponse } from 'next/server';
import { addGitHubRepo } from '@/services/backend/github/addGitHubRepo';
import { serverEnv } from '@/config/schemas/serverSchema';
import { getRepos } from '@/services/backend/github/getRepos';

export async function POST(req: Request) {
  try {
    const reqBody = await req.json();
    const repo = await addGitHubRepo(
      req,
      serverEnv.GITHUB_USERNAME,
      reqBody.url
    );

    return NextResponse.json({ success: true, data: repo }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, data: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const repo = await getRepos();
    return NextResponse.json({ success: true, data: repo }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, data: (error as Error).message },
      { status: 500 }
    );
  }
}
