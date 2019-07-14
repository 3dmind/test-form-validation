import { IconButton, InputAdornment } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import React, { useState } from 'react'

export function UserFormPasswordField() {
  const [showPassword, setShowPassword] = useState(false)

  function handleClick() {
    setShowPassword(!showPassword)
  }

  const inputType = showPassword ? 'text' : 'password'
  const icon = showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />
  return (
    <Field
      fullWidth
      name="password"
      label="Password"
      variant="filled"
      component={TextField}
      type={inputType}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={handleClick}>
              {icon}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
