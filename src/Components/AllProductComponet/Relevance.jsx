import React, { useState, useContext, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FilterData } from "../../hooks/AllProductComponent/FilterData";
import { DataContext } from "../../hooks/DataContext";

export default function Relevance() {
  const { FilterType, setFilterType, ApplyFilter } = useContext(FilterData);
  const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   ApplyFilter(AllData);
  //   console.log("data ", AllData);
  // }, [AllData]);

  const handleChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ width: 250 }}>
        <InputLabel
          id="demo-controlled-open-select-label"
          sx={{
            textAlign: "center",
          }}
        >
          Filter
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={FilterType}
          onChange={handleChange}
          sx={{ height: 40, borderRadius: 10 }}
        >
          <MenuItem value={"Relevance"}>Relevance</MenuItem>
          <MenuItem value={"NameAsc"}>Name, A to Z</MenuItem>
          <MenuItem value={"NameDsc"}>Name, Z to A</MenuItem>
          <MenuItem value={"priceLow"}>Price, Low To High</MenuItem>
          <MenuItem value={"priceHigh"}>Price, High To Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
