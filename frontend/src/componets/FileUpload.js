import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadFile } from '../redux/actions/fileActions';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const FileUpload = ({ history }) => {
  const [fileData, setFileData] = useState({ artistId: '', fileName: '', fileType: '', fileSha: '', url: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => setFileData({ ...fileData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadFile(fileData));
    history.push('/files');
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={8}
      >
        <Typography component="h1" variant="h5">
          Upload File
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '8px' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="artistId"
            label="Artist ID"
            name="artistId"
            autoComplete="artistId"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fileName"
            label="File Name"
            name="fileName"
            autoComplete="fileName"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fileType"
            label="File Type"
            name="fileType"
            autoComplete="fileType"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fileSha"
            label="File SHA"
            name="fileSha"
            autoComplete="fileSha"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="url"
            label="File URL"
            name="url"
            autoComplete="url"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '24px 0 16px' }}
          >
            Upload
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default FileUpload;
