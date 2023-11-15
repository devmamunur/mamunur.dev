'use client';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { clientEnv } from '@/config/schemas/clientSchema';
import { GitHubRepoData } from '@/interface/opensource';
import ToastHelper from '@/helpers/toastHelper';
import { z } from 'zod';

const RepoAddSchema = z.object({
  url: z.string().url(),
});
const DashboardContribution = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [output, setOutput] = useState<string>('');
  const [repos, setRepos] = useState<GitHubRepoData[]>([]);
  const [url, setURL] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `${clientEnv.NEXT_PUBLIC_BASE_URL}/api/github`
        );
        const reposArr = await data.json();
        setRepos(reposArr.data);
        ToastHelper.success('Successfully fetched data');
      } catch (error) {
        ToastHelper.error('Error fetching data');
      }
    };
    fetchData().then();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      RepoAddSchema.parse({ url });
      setLoader(true);
      const res = await fetch(`${clientEnv.NEXT_PUBLIC_BASE_URL}/api/github`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      const output = await res.json();
      if (output.success === true) {
        setLoader(false);
        setOutput(output);
        ToastHelper.success('Repo added successfully');
      } else {
        setLoader(false);
        ToastHelper.error(output.data || 'Repo add failed');
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach(err => {
          if (err.path[0] === 'url') {
            ToastHelper.error(err.message);
          }
        });
      }
    }
  };
  return (
    <>
      <div className="mx-auto max-w-screen-xl mt-6 grid grid-cols-1">
        <div className="col-span-1 section-card-wrapper">
          <div className="group section-card">
            <span className="text-white"> DashboardContributions </span>
            <form className="mb-2" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="URL"
                name="email"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setURL(event.target.value)
                }
                className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-amber-500 t text-white px-4 py-2 rounded-2xl mt-3">
                {loader ? 'loading...' : 'Add Repo'}
              </button>
              <pre>{output}</pre>
              <div className="text-white mt-6">
                {' '}
                data : {JSON.stringify(repos[0])}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl mt-6 grid grid-cols-2">
        {repos.map((repo, i) => (
          <div
            key={i}
            className="p-6 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h4 className="text-white font-bold text-2xl mb-2">{repo.name}</h4>
            <p className="text-white font-normal">{repo.description}</p>
            <div className="mt-3">
              <span className="text-white mr-2">
                Forks: {repo.stats.forks},
              </span>
              <span className="text-white mr-1">Stars: {repo.stats.stars}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardContribution;
