import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Paper,
  Link
} from '@mui/material';

const departments = [
  'Computer Science',
  'Electronics',
  'Mechanical',
  'Civil',
  'Electrical',
];

const years = ['First Year', 'Second Year', 'Third Year', 'Final Year'];

const Login = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');

  const handleSendCode = () => {
    alert(`Verification code sent to ${email}`);
  };

  const handleVerify = () => {
    alert(`Verifying code: ${code}`);
  };

  const handleRegister = () => {
    alert(`Registered with ${email}, ${department}, ${year}`);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 6, borderRadius: 4 }}>
        <Typography variant="h5" fontWeight={700} align="center" mb={3}>
          Join StudySwap
        </Typography>

        {/* College Email */}
        <TextField
          label="College Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Send Code Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleSendCode}
          sx={{ mb: 3, bgcolor: '#1565c0' }}
        >
          Send Verification Code
        </Button>

        {/* Verification Code */}
        <TextField
          label="Verification Code"
          variant="outlined"
          fullWidth
          value={code}
          onChange={(e) => setCode(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Verify Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleVerify}
          sx={{ mb: 3, bgcolor: '#1565c0' }}
        >
          Verify
        </Button>

        {/* Optional Fields */}
        <Typography variant="subtitle1" fontWeight={600} mb={2}>
          Optional: Complete Your Profile
        </Typography>

        {/* Department Dropdown */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select Department</InputLabel>
          <Select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            label="Select Department"
          >
            {departments.map((dept) => (
              <MenuItem key={dept} value={dept}>
                {dept}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Year Dropdown */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Select Year</InputLabel>
          <Select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            label="Select Year"
          >
            {years.map((yr) => (
              <MenuItem key={yr} value={yr}>
                {yr}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Complete Registration */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleRegister}
          sx={{ mb: 2, bgcolor: '#1565c0' }}
        >
          Complete Registration
        </Button>

        {/* Sign In Link */}
        <Typography variant="body2" align="center">
          Already have an account?{' '}
          <Link href="/login" underline="hover">
            Sign in
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
