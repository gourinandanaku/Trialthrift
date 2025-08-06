// src/components/Profile.jsx

import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Profile = () => {
  const [user, setUser] = useState({
    fullName: "Gouri Nandhana",
    username: "gourin",
    email: "gouri@example.com",
    bio: "Computer Science Student at Adi Shankara Institute.",
    phone: "9876543210",
    address: "Kerala, India",
  });

  const [editOpen, setEditOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditChange = (field, value) => {
    setEditedUser({ ...editedUser, [field]: value });
  };

  const handleSaveChanges = () => {
    setUser(editedUser);
    setEditOpen(false);
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ width: 64, height: 64 }}
                  src="/default-profile.jpg"
                  alt="Profile"
                />
              }
              action={
                <Button variant="outlined" onClick={() => setEditOpen(true)}>
                  Edit Profile
                </Button>
              }
              title={user.fullName}
              subheader={`@${user.username}`}
            />
            <CardContent>
              <Typography>Email: {user.email}</Typography>
              <Typography sx={{ mt: 1 }}>Bio: {user.bio}</Typography>
              <Typography sx={{ mt: 1 }}>Phone: {user.phone}</Typography>
              <Typography sx={{ mt: 1 }}>Address: {user.address}</Typography>

              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Change Password
              </Button>
              <Button variant="outlined" color="error" sx={{ mt: 2, ml: 2 }}>
                Log Out
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            label="Full Name"
            fullWidth
            margin="dense"
            value={editedUser.fullName}
            onChange={(e) => handleEditChange("fullName", e.target.value)}
          />
          <TextField
            label="Username"
            fullWidth
            margin="dense"
            value={editedUser.username}
            onChange={(e) => handleEditChange("username", e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            value={editedUser.email}
            onChange={(e) => handleEditChange("email", e.target.value)}
          />
          <TextField
            label="Bio"
            fullWidth
            margin="dense"
            multiline
            rows={2}
            value={editedUser.bio}
            onChange={(e) => handleEditChange("bio", e.target.value)}
          />
          <TextField
            label="Phone"
            fullWidth
            margin="dense"
            value={editedUser.phone}
            onChange={(e) => handleEditChange("phone", e.target.value)}
          />
          <TextField
            label="Address"
            fullWidth
            margin="dense"
            value={editedUser.address}
            onChange={(e) => handleEditChange("address", e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button onClick={handleSaveChanges} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Profile;
