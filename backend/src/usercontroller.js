const {Auth,user} = require('./usermodel')

var Getdata = async (req, res) => {
    try {
        const emp = await user.find({})
        if (emp.length > 0) {
            res.status(200).json({
                success: true,
                message: 'data recieved successfully',
                data: emp
            })
        }
    } catch (e) {
        res.status(404).json({
            success: false,
            message: 'data recieved failed',
            data: e

        })
    }


}
var Createdata = async (req, res) => {
    try {
        const emp = await user.create(req.body)
        if (emp) {
            res.status(200).json({
                success: true,
                message: 'data saved successfully',
                data: emp
            })
        }
    } catch (e) {
        res.status(404).json({
            success: false,
            message: 'data saved failed',

        })
    }

}
var Updatedata = async (req, res) => {
    try {
        const User = await user.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (User) {
            res.status(200).json({
                success: true,
                message: 'data updated successfully',
                data: emp
            })
        }
    } catch (e) {
        res.status(404).json({
            success: false,
            message: 'data updated failed',

        })
    }
}

var deletedata = async (req, res) => {
    try {
        const emp = await user.findByIdAndDelete(req.params.id)
        if (emp) {
            res.status(200).json({
                success: true,
                message: 'data deleted successfully',
                data: emp
            })
        }
    } catch (e) {
        res.status(404).json({
            success: false,
            message: 'data deleted failed',

        })
    }
}
var register = async (req, res) => {
    try {
        const User = await Auth.create(req.body)
        if (User) {
            res.status(200).json({
                success: true,
                message: 'User Registered successfully',
                user: {
                    id: User._id,
                    UserName: User.Email,
                    Password: User.Password
                }
            })
        }
    } catch (error) {
        res.status(500).json({
            User: error
        })
    }
}
const loginUser = async (req, res) => {
        try {
          const {Email, Password} = req.body;
          const user = await Auth.findOne({ Email });
          if (!user) {
            return res.status(401).json({
              success: false,
              message: "Invalid Email",
            });
          }
          if (Password !== user.Password) {
            return res.status(401).json({
              success: false,
              message: "Invalid Password",
            });
          }
          res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
              id: user._id,
              Email: user.Email,
            },
          });
        } catch (error) {
          console.error("Error during login:", error);
          res.status(500).json({
            success: false,
            message: "An error occurred during login",
            error: error.message,
          });
        }
      };
var UserData=async(req,res)=>{
    try {
        const users = await Auth.find()
        if (!users.length) {
          return res.status(404).json({ success: false, message:'No users found'});
        }
        res.status(200).json({ success:true,users });
      } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ success: false, message: 'Error fetching user data', error: error.message });
      }
}
module.exports = {
    Getdata,
    Createdata,
    Updatedata,
    deletedata,
    register,
    loginUser,UserData
}