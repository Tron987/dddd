import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../redux/actions/fileActions';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

const FileList = () => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files.files);

  useEffect(() => {
    dispatch(getFiles());
  }, [dispatch]);

  return (
    <Container component="main" maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={8}
      >
        <Typography component="h1" variant="h5">
          Files
        </Typography>
        <List style={{ width: '100%', marginTop: '16px' }}>
          {files.map((file) => (
            <ListItem key={file.file_id} divider>
              <ListItemText primary={file.file_name} secondary={`SHA: ${file.file_sha}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default FileList;
