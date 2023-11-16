'use client';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { GitHubRepoData } from '@/interface/opensource';
import ToastHelper from '@/helpers/toastHelper';
import { z } from 'zod';
import { contribution } from '@/services/dashboard/contribution';

const RepoAddSchema = z.object({
  url: z.string().url(),
  orderNum: z.number(),
});
const OpensourceProject = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [repos, setRepos] = useState<GitHubRepoData[]>([]);
  const [url, setURL] = useState<string>('');
  const [orderNum, setOrderNum] = useState<number>(0);

  useEffect(() => {
    contribution.getData().then(res => setRepos(res));
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      RepoAddSchema.parse({ url, orderNum });
      setLoader(true);
      await contribution.postData(url, orderNum).then((res: boolean) => {
        setLoader(false);
        if (res) {
          contribution.getData().then(res => setRepos(res));
        }
      });
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach(err => {
          if (err.path[0] === 'url') {
            ToastHelper.error(err.message);
          } else if (err.path[0] === 'orderNum') {
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
            <form className="mb-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <input
                    type="text"
                    placeholder="URL"
                    name="email"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setURL(event.target.value)
                    }
                    className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Order Number"
                    name="email"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setOrderNum(+event.target.value)
                    }
                    className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <button className="bg-amber-500 t text-white px-4 py-2 rounded-2xl mt-3">
                {loader ? 'loading...' : 'Add Repo'}
              </button>
              <div className="text-white mt-6">
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

export default OpensourceProject;
