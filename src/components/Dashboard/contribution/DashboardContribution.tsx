'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { clientEnv } from '@/config/schemas/clientSchema';

const DashboardContribution = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [output, setOutput] = useState<string>('');
  const [url, setURL] = useState<string>('');
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setLoader(true);
      const res = await fetch(`${clientEnv.NEXT_PUBLIC_BASE_URL}/api/github`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const output = await res.json();
      console.log('final output is : ', output);
      if (output) {
        setLoader(false);
        setOutput(output);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="mx-auto max-w-screen-xl mt-6 grid grid-cols-1">
        <div className="col-span-1 section-card-wrapper">
          <div className="group section-card">
            {clientEnv.NEXT_PUBLIC_BASE_URL}
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
              <div className="text-white mt-6"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardContribution;
