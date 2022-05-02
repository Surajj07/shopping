import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: "20px", display:"flex", gap:"20px", color:"white", }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
     <div>
       <Link to="/home">Home</Link>
       </div>
       <div>
       <Link to="/about">About</Link>
       </div>
       <div>
       <Link to="/products">Products</Link>
     </div>
       <div>
       <Link to="/products/men">Men</Link>
     </div>
       <div>
       <Link to="/products/women">Women</Link>
     </div>
       <div>
       <Link to="/products/kids">Kids</Link>
     </div>
       <div>
       <Link to="/products/homedecor">Home Decor</Link>
     </div>
    </nav>
  );
};
