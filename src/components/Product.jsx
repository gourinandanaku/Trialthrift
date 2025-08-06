import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Paper
} from '@mui/material';

const categories = ['Books', 'Electronics', 'Stationery', 'Furniture'];
const departments = ['CSE', 'ECE', 'Mechanical', 'Civil', 'EEE'];
const conditions = ['New', 'Like New', 'Used', 'Damaged'];

const ListItemForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [department, setDepartment] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('Free');
  const [photos, setPhotos] = useState([]);

  const handleFileChange = (e) => {
    setPhotos([...photos, ...Array.from(e.target.files)]);
  };

  const handleTypeChange = (_, newType) => {
    if (newType) {
      setType(newType);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Item listed successfully!');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        List an Item
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <TextField
          label="Title"
          placeholder="e.g., Calculus Textbook"
          fullWidth
          variant="outlined"
          sx={{ mb: 3 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Category */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Select Category</InputLabel>
          <Select
            value={category}
            label="Select Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Department */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Select Department</InputLabel>
          <Select
            value={department}
            label="Select Department"
            onChange={(e) => setDepartment(e.target.value)}
          >
            {departments.map((dept) => (
              <MenuItem key={dept} value={dept}>
                {dept}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Condition */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Select Condition</InputLabel>
          <Select
            value={condition}
            label="Select Condition"
            onChange={(e) => setCondition(e.target.value)}
          >
            {conditions.map((cond) => (
              <MenuItem key={cond} value={cond}>
                {cond}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Price */}
        <TextField
          label="Price (if selling)"
          placeholder="Enter Price"
          fullWidth
          variant="outlined"
          sx={{ mb: 2 }}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          disabled={type === 'Free'}
        />

        {/* Free or For Sale Toggle */}
        <ToggleButtonGroup
          value={type}
          exclusive
          onChange={handleTypeChange}
          sx={{ mb: 4 }}
          fullWidth
        >
          <ToggleButton value="Free">Free</ToggleButton>
          <ToggleButton value="For Sale">For Sale</ToggleButton>
        </ToggleButtonGroup>

        {/* Photo Upload */}
        <Box
          sx={{
            border: '2px dashed #ccc',
            borderRadius: 2,
            p: 4,
            textAlign: 'center',
            mb: 3
          }}
        >
          <Typography fontWeight={600} mb={1}>
            Add Photos
          </Typography>
          <Typography variant="body2" mb={2}>
            Drag and drop or click to upload photos of the item.
          </Typography>
          <Button variant="contained" component="label">
            Upload Photos
            <input type="file" hidden multiple onChange={handleFileChange} />
          </Button>
        </Box>

        {/* List Button */}
        <Button variant="contained" fullWidth type="submit" sx={{ bgcolor: '#1565c0' }}>
          List Item
        </Button>
      </form>
    </Container>
  );
};

export default ListItemForm;
