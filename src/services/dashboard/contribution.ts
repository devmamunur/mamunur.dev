import { clientEnv } from '@/config/schemas/clientSchema';
import ToastHelper from '@/helpers/toastHelper';
import { GitHubRepoData } from '@/interface/opensource';

class Contribution {
  private readonly baseURL: string;
  constructor() {
    this.baseURL = clientEnv.NEXT_PUBLIC_BASE_URL;
  }
  getData = async (): Promise<GitHubRepoData[]> => {
    try {
      const data = await fetch(`${this.baseURL}/api/github`);
      const output = await data.json();
      if (output.success === false) {
        ToastHelper.error(output.data);
        return [];
      } else {
        ToastHelper.success('Successfully fetched data');
        return output.data;
      }
    } catch (error) {
      ToastHelper.error('Failed to get repos');
      return [];
    }
  };
  postData = async (url: string, orderNum: number): Promise<boolean> => {
    try {
      const data = await fetch(`${this.baseURL}/api/github`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, orderNum }),
      });
      const output = await data.json();
      if (output.success === false) {
        ToastHelper.error(output.data);
        return false;
      } else {
        ToastHelper.success('Repo added successfully');
        return true;
      }
    } catch (error) {
      ToastHelper.error('Repo add failed');
      return true;
    }
  };
}
export const contribution: Contribution = new Contribution();
