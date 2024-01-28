import PropTypes from 'prop-types';

import Alert from '@mui/material/Alert';

export default function NotFound({ message }) {
  return (
    <Alert variant="filled" severity="error">
      { message }
    </Alert>
  )
}

NotFound.propTypes = {
  message: PropTypes.string
}
