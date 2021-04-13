//import logo from "./logo.svg";
import "./App.css";
import ProductListing from "./components/ProductListing"
import SearchBar from "./components/SearchBar"
import Login from "./components/Login"
import NavBar from './components/NavBar'
import SignUp from "./components/SignUp"
function InputLogin(props) {
  return (
    <div className="px-4 pb-4">
      <label htmlFor="email" className="text-sm block font-bold  pb-2">
        {props.text}
      </label>
      <input
        type={props.type}
        name={props.type}
        id=""
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
        placeholder={props.placeholder}
      />
    </div>
  );
}

function Button(props){
  return(
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        {props.text}
      </button>
    </div>
  );
}

function LoginForm() {
  return (
    <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
      <InputLogin text="Email" type="email" placeholder="FriedBaboy@gmail.com"/>
      <InputLogin text="Password" type="password" placeholder="easypassword"/>
      <Button text="Sign In"/>
    </form>
  );
}


//let a="<SearchBar />"
function App() {
  return (
    <section className="container mx-auto px-6 py-3 bg-gray-800">
      <SearchBar/>
      <div className="flex justify-center ...">
        
      </div>
      <SignUp />
      <main className="my-8 ">
        <div className="container mx-auto px-6">
          <ProductListing />
        </div>
      </main>
    </section>
  );
}

export default App;
