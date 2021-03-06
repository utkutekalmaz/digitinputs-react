import React, { useEffect, useRef } from 'react'
import styles from './Digit.module.css'

export function Digit({ index, value, onDigitChange, focused, hidden }) {
  const digitRef = useRef(null)

  useEffect(() => {
    focused && digitRef.current.focus()
  })

  const handleChange = (event) => {
    onDigitChange(index, event.target.value)
  }

  const validateDigit = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault()
    }
  }

  return (
    <input
      className={styles.digit}
      name={`digit-index-${index}`}
      type={hidden ? 'password' : 'text'}
      autoComplete='off'
      value={value || ''}
      ref={digitRef}
      maxLength={1}
      onChange={handleChange}
      onKeyPress={validateDigit}
    />
  )
}
