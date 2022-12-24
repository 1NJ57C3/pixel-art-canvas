import { useMemo } from 'react';

function Counter({ subject, count, setSubject }) {
  const capitalizeSubject = useMemo (() => {
    return subject[0].toUpperCase() + subject.slice(1, subject.length);
  }, [subject]);

  function handleDecrement(e) {
    e.preventDefault();
    if (count > 1) setSubject(count - 1);
  }

  function handleIncrement(e) {
    e.preventDefault();
    if (count < 50) setSubject(count + 1);
  }

  return (
    <div className={subject}>
      <button className='decrement-btn' id={'dec' + capitalizeSubject} onClick={handleDecrement}>-</button>
      {capitalizeSubject}: {count}
      <button className='increment-btn' id={'inc' + capitalizeSubject} onClick={handleIncrement}>+</button>
    </div>
  )
}

export default Counter;