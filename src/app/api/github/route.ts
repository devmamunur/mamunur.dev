import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { getRepoApi } from '@/services/backend/github/getRepoApi';
import { serverEnv } from '@/config/schemas/serverSchema';

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const context = { req, res };

    //  const repo = await getRepoApi(context, serverEnv.GITHUB_USERNAME, req.body);

    return NextResponse.json({ success: true, data: req }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, data: error.message },
      { status: 500 }
    );
  }
}
