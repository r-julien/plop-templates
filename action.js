export const SOME_METHOD = 'some_method';

export const someMethod = () => ({
  type: LOGOUT,
});

export const someMethod2 = someParams => ({
  type: SOME_METHOD,
  payload: someParams,
});
