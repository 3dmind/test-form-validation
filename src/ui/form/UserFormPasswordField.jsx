import { IconButton, InputAdornment, Tooltip } from '@material-ui/core'
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
  const tooltipTitle = showPassword ? 'Hide password' : 'Show password'
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
            <Tooltip title={tooltipTitle}>
              <IconButton edge="end" onClick={handleClick}>
                {icon}
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }}
    />
  )
}
