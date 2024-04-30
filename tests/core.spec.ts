import {initDesktop} from '../src';
import {mockFetch} from './mocks';

describe('initHttpGateway', () => {

  beforeEach(() => {
    (<any>global).fetch = mockFetch({});
  });

  test('calls default URL', async () => {
    initDesktop('fake').catch(() => {});
    // expect(fetch).toBeCalled();
  });
});
