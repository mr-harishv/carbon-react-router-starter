import { http } from 'msw';

export const getRouter = (mocks, networking) => {
  const apiRoute = (verb, path, handler) => {
    const mock = http[verb](path, async () => {
      const req = {
        params: {},
        query: {},
      };

      const res = {
        json: (data) => {
          networking.removeRequest(path);
          return Response.json(data);
        },
      };

      networking.addRequests(path);
      return handler(req, res);
    });

    mocks.push(mock);
  };

  return {
    get: (path, noCache, ...args) =>
      apiRoute('get', path, args[args.length - 1]),
    // TODO: add other verbs
  };
};
