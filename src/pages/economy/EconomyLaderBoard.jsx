import React from "react";

const EconomyLaderBoard = () => {
  return (
    <div className="my-10">
      <h1 className="text-4xl text-black my-10">Leaderboard</h1>

      {/* Table */}

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-opacity-10">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-4 py-3">
                #
              </th>
              <th scope="col" class="px-4 py-3">
                USER
              </th>
              <th scope="col" class="px-4 py-3">
                OWNED
              </th>
              <th scope="col" class="px-4 py-3">
                UNCLAIMED
              </th>
              <th scope="col" class="px-4 py-3">
                CLAIMED
              </th>
              <th scope="col" class="px-4 py-3">
                TOTAL
              </th>
              <th scope="col" class="px-4 py-3">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td class="px-4 py-4">
                0xeab23c1e3776fad145e2e3dc56bcf739f6e0a393
              </td>
              <td class="px-4 py-4">50</td>
              <td class="px-4 py-4">117300</td>
              <td class="px-4 py-4">13665</td>
              <td class="px-4 py-4">130965</td>
              <td class="px-4 py-4">A</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <td class="px-4 py-4">
                0x6e21b422ac130e4f78991d89fca78cdf54c802f5
              </td>
              <td class="px-4 py-4">11</td>
              <td class="px-4 py-4">$1999</td>
              <td class="px-4 py-4">13665</td>
              <td class="px-4 py-4">130965</td>
              <td class="px-4 py-4">A</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                3
              </th>
              <td class="px-4 py-4">
                0xe5cdeadfb631b3b3fbe0386e8d71b50c68b37d9a
              </td>
              <td class="px-4 py-4">100</td>
              <td class="px-4 py-4">$99</td>
              <td class="px-4 py-4">13665</td>
              <td class="px-4 py-4">130965</td>
              <td class="px-4 py-4">A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EconomyLaderBoard;
