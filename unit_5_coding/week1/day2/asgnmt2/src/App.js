import "./App.css";

const links = ["Services", "Projects", " About"];

function App() {
  return (
    <div className="navbar">
      <Logo></Logo>
      <div className="link_box">
        {links.map((ele) => {
          return <Link link={ele} />
        })}
      </div>
      <Btn></Btn>
    </div>
  );
}

function Logo() {
  return <div>
    <h3>LGOBAKERY</h3>
  </div>;
}

function Link({ link }) {
 return <spam>{link}</spam>;
}

function Btn() {
  return <div>
    <button>Connect</button>
  </div>;
}

export default App;
