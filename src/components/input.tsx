import React, { FC, useCallback } from 'react';

export interface InpurProps {
  width?: number;
  placeholder?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onEnter?: () => void;
}

const Input: FC<InpurProps> = ({ width, placeholder, className, onChange, onEnter }) => {
  const handlerEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      console.log('e.keyCode:', e.keyCode);
      if (e.keyCode === 13) {
        onEnter && onEnter();
      }
    },
    [onEnter]
  );

  return (
    <input
      type="text"
      className={className}
      onKeyPress={handlerEnter}
      style={{ width }}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
