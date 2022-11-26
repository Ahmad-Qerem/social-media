import { Button } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'
const CustomButton = ({Text,variant}) => {
  return (
    <Button variant={variant}>{Text}</Button>

  )
}

export default CustomButton