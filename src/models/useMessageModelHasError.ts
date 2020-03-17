import { useCallback } from 'react';
import { useModel } from 'umi';

export default function useMessageModel() {
  const { title } = useModel('useAppModel');

  const sayHiError = useCallback(() => {
    console.log('error hello ', title);
  }, [title]);

  return {
    sayHiError,
  };
}
