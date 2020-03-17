import { useCallback } from 'react';
import { useModel } from 'umi';

export default function useMessageModel() {
  const model = useModel('useAppModel');

  const { title } = model;

  const sayHi = useCallback(() => {
    console.log('hello ', title);
  }, [title]);

  return {
    sayHi,
  };
}
