import React, { useRef, useState, useEffect } from 'react';
import classList from 'classnames';
import './style.scss';

export type DropdownType = {
  options: Array<'male' | 'female'>;
  isError?: boolean;
  DropdownValidator: any;
};

export const Dropdown: React.FC<DropdownType> = ({ options, isError, DropdownValidator }) => {
  const [isActive, setActive] = useState<boolean>(false);
  const [Selected, setSelected] = useState<string>('');

  /* const componentRef = useRef(null);
    
      useEffect(() => {
        const onClick = (e: any): void => {
          if (componentRef.current) {
            const rootEl: HTMLInputElement = componentRef.current;
            if (!rootEl.contains(e.target)) setActive(false);
          }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
      }, [componentRef.current]); */

  type GendersType = {
    id: string;
    gender: string;
  };

  const [Genders, setGenders] = useState<Array<GendersType>>([]);
  useEffect(() => {
    fetch('http://109.194.37.212:93/api/auth')
      .then(response => response.json())
      .then(response => setGenders(response.genders));
  }, []);
  return (
    <div className={classList('dropdown', { _active: isActive }, { _error: isError })}>
      <input
        {...DropdownValidator}
        readOnly
        type="text"
        placeholder="Your gender"
        value={Selected || '1'}
        className="dropdown__main"
        onClick={() => setActive(!isActive)}
        id="gender"
      />
      {isActive && (
        <ul className="dropdown__content">
          {Genders.map(genders => (
            <li
              role="presentation"
              className="dropdown__item"
              onClick={() => {
                setActive(false);
                setSelected(genders.gender);
              }}
              key={genders.id}
            >
              {genders.gender}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
