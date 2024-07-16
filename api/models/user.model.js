import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // This creates a unique index
    },
    email: {
      type: String,
      required: true,
      unique: true, // This creates a unique index
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
