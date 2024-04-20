import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    // const user = new User(req.body);
    // await user.save();
    // res.send(user);
    // ===========================

    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) return res.status(404).json("User not found.");

    const updatedUser = await User.findById(id);

    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json("User not found.");

    res.status(201).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const createUser = async (req, res) => {
//   try {
//     // const user = new User(req.body);
//     // await user.save();
//     // res.send(user);
//     let newUser = new User(req.body);
//     newUser.save((err, user) => {
//       if (user) {
//         return res.status(400).send({
//           success: false,
//           message: "Registration failed!",
//         });
//       } else {
//         return res.status(200).send({
//           success: true,
//           id: user._id,
//           name: user.name,
//           email: user.email,
//           password: user.password,
//         });
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
