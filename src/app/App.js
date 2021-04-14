//import logo from "./logo.svg";
import "./App.css";
import ProductListing from "./components/ProductListing"

import NavBar from './components/NavBar'


//let a="<SearchBar />"
function App() {
  return (
    <section className="container mx-auto px-6 py-3 bg-gray-800">
      
      <div className="flex justify-center ...">
        
      </div>
      
      <main className="my-8 ">
        <div className="container mx-auto px-6">
          <ProductListing />
        </div>
      </main>
      <NavBar/>
    </section>
  );
}

export default App;
