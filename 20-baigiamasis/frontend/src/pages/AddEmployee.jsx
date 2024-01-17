import AddEmpForm from "../components/addEmployee/AddEmpForm"

const AddEmployee = () => {


  return (
    <div className="my-12 border-solid border-2 m-auto w-[800px] shadow-lg shadow-purple-100">
      <div className="bg-purple-600 py-5 px-12 text-white text-xl">
        <p>Add New Employee</p>
      </div>

      <div className="px-12 py-5">
        <AddEmpForm />
      </div>
    </div>
  )
}

export default AddEmployee