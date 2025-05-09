export const getNetworking = () => {
  const runningRequests = new Set();

  const addRequests = (path) => {
    if (!process.env.HIDE_NETWORK_LOGGING)
      console.log('Calling BFF endpoint: ', path);
    runningRequests.add(path);
  };

  const removeRequest = (path) => {
    if (!process.env.HIDE_NETWORK_LOGGING) console.log('Request done: ', path);
    runningRequests.delete(path);
  };

  const verifyRunningRequests = () => {
    if (runningRequests.size > 0) {
      const allPaths = Array.from(runningRequests).join(' , ');
      console.error(
        'There are running requests after the test is completed: ',
        allPaths,
      );
      expect(runningRequests.size).toStrictEqual(0);
    } else {
      console.log('No running requests!');
    }
  };

  const clearRunningRequests = () => runningRequests.clear();

  const getRunningRequestCount = () => runningRequests.size;

  return {
    addRequests,
    removeRequest,
    verifyRunningRequests,
    clearRunningRequests,
    getRunningRequestCount,
  };
};
