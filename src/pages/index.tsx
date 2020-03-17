import React, {useEffect} from 'react';
import {useModel} from 'umi';
import styles from './index.less';

export default () => {
  const {sayHi} = useModel('useMessageModel')
  const {sayHiError} = useModel('useMessageModelHasError')

  useEffect(() => {
    sayHi()
    sayHiError()
  }, [sayHi, sayHiError])
  
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
