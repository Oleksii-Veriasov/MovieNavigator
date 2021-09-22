export const log = store => next => action => {
    console.log('before action ', action, store.getState());
    next(action);
    console.log('after cation', action, store.getState())
  }