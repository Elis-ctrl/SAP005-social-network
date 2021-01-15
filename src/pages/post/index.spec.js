import { Post } from './index.js';
import * as services from '../../services/index.js';

describe('Post', () => {
  beforeEach(() => {
    services.loginWithEmail = jest.fn(() => Promise.resolve(true));
    services.loginGoogle = jest.fn(() => Promise.resolve(true));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should be a function', () => {
    expect(typeof Post).toBe('function');
  });
  it('shoul return PostPage', () => {
    expect(Post()).toMatchSnapshot();
  });
  it('should click submmit button', () => {
    const posTest = Post();
    const btn = posTest.querySelector('#submit-home');
    btn.dispatchEvent(new Event('click'));
    expect(services.loginWithEmail).toHaveBeenCalledWith();
  });
});
