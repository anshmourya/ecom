import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../hooks/DataContext";
import { BsArrowDownCircle } from "react-icons/bs";
import NavList from "../NavList";
import DesktopNav from "./DesktopNav";
import { Skeleton } from "@mui/material";
function PosNav() {
  const [Loading, setLoading] = useState(true);
  const { Category, getCategory } = useContext(DataContext);
  useEffect(() => {
    const fetchData = async () => {
      await getCategory();
      setLoading(false);
    };
    fetchData();
  }, []);
  const [PosListDisplay, setPosListDisplay] = useState(false);

  return (
    <>
      {Loading ? (
        <Skeleton variant="rectangular" />
      ) : (
        <pos-nav>
          <div className="pos-title">
            <h2>New Arrivals</h2>
            <p>Valid on select styles online and in-store supplies last</p>
          </div>
          <div className="phone-category">
            <div
              className="phone-icon"
              onClick={() => setPosListDisplay(!PosListDisplay)}
            >
              <BsArrowDownCircle />

              <div
                className="category-list"
                style={
                  PosListDisplay ? { display: "block" } : { display: "none" }
                }
              >
                <NavList list={Category} />
              </div>
            </div>
          </div>
          <DesktopNav CategoryList={Category} />
        </pos-nav>
      )}
    </>
  );
}

export default PosNav;
