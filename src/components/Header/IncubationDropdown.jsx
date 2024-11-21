 "use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSchemes } from "../../app/store/Action/FetchAllSchgemedetails"; 
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Link from "next/link";

export default function IncubationDropdown() {
  const dispatch = useDispatch();
  const { loading, data, success, error } = useSelector((state) => state.schemes); 

  useEffect(() => {
   if(!success){
    dispatch(FetchSchemes());
   }
    
  }, []);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="none"
          size="lg"
          className="text-[18px] px-0"
        >
          {loading ? "Loading..." : "Incubation"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {error ? (
          <DropdownItem key="error" disabled>
            {error}
          </DropdownItem>
        ) : (
          data.map((schemeName) => (
            <DropdownItem key={schemeName}>
              <Link href={`/incubation/${schemeName.toLowerCase()}`}>
                {schemeName}
              </Link>
            </DropdownItem>
          ))
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
