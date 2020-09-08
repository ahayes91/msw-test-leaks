import axios from 'axios';
import getAndSetupServer from './getAndSetupServer';

getAndSetupServer();

describe('getAndSetupServer.js: ', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  
  it('an error exception will be thrown with a console error when the test attempts to make a get request using axios', async () => {
    jest.spyOn(console, 'error');
    axios
      .get('/fakeUrl')
      .then(response => {
        expect(response).toBeFalsy(); // the test should never get here but putting an expect just in case something goes wrong
      })
      .catch(error => {
        expect(error).toBeTruthy();
        expect(console.error).toHaveBeenCalled();
        expect(console.error.mock.calls[0][0]).toContain(
          `Found an unhandled GET request to http://localhost/fakeUrl`,
        );
      });
  });
});
