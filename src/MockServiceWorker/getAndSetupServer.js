import { setupServer } from 'msw/node';

export default function getAndSetupServer(handlers = []) {
  const server = setupServer(...handlers);
  beforeAll(() => {
    jest.setTimeout(30000);
    server.listen({
      onUnhandledRequest(req) {
        const errorMessage = `Found an unhandled ${req.method} request to ${req.url.href}`;
        console.error(errorMessage);
        throw errorMessage;
      },
    });
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
    jest.clearAllMocks();
  });
  return server;
}
