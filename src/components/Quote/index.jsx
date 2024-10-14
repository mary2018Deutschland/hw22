import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuotes } from '../../features/actionCreaters';
import s from './styles.module.css';

export const Quote = () => {
  const { quotes } = useSelector(state => state.quotes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h2>Random quote</h2>
      <p>{quotes.quote}</p>
      <p className={s.author}>— {quotes.author}</p>
      <button className={s.btn} onClick={() => dispatch(getQuotes())}>
        New quote
      </button>
    </div>
  );
};
