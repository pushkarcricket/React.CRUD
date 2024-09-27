import axios from "axios";
import { useFormik } from "formik";
export default function CreateUser() {
    const navigate = useNavigate();
    const myFormik= userFormik({
        initialValues:{
            name: '',
            email: '',
            password:'',
            number: '',

        },

        onSubmit: async (values)=>{
            asiox.post('',values)
            .then((res)=>{
                console.log(res);
                toast.success("user created")
            })
            .catch((err)=>{
                toast.error(err.message)

            })
        }
    })
  return (
    <>
    <div className="container my-5">
        <form onSubmit={myFormik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                onChange={myFormik.handleChange}
                value={myFormik.values.name}
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                onChange={myFormik.handleChange}
                value={myFormik.values.email}
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                onChange={myFormik.handleChange}
                value={myFormik.values.password}
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="">Number</label>
              <input
                name="number"
                type="number"
                className="form-control"
                onChange={myFormik.handleChange}
                value={myFormik.values.number}
              />
            </div>
            <div className="my-3">
              <input className="btn btn-outline-success" type="submit" />
            </div>
          </div>
        </form>
      </div>
      <Toaster />

    </>
  )
}
