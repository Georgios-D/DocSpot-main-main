import React, { useState } from "react";
import Filter from "../components/Filter";
import Results from "../components/Results";
import BasicRating from "../components/BasicRating";
import { MuiDrawer } from "../components/MuiDrawer";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
type Props = {};

const initialData = [
    {
        id: 1,
        name: "Yogges klinik",
        address: "Lantmannagatan 59D",
        city: "Malmö",
        zip: "214 48",
        rating: 4,
    },
    {
        id: 2,
        name: "Dental clinic",
        address: "Drakegatan 10",
        city: "Göteborg",
        zip: "412 50",
        rating: 5,
    },
    {
        id: 3,
        name: "Fotmassage Stockholm",
        address: "Hjulsta Backar 12D",
        city: "Stockholm",
        zip: "163 65",
        rating: 3,
        
    },
    {
        id: 4,
        name: "Fotmassage Göteborg",
        address: "Jomsborgsgatan 2",
        city: "Göteborg",
        zip: "417 29",
        rating: 3,

    },
];

const Home = (props: Props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [data, setData] = useState(initialData);
    return (
            <div className="flex flex-1">
                <Filter className="md:flex" />

                <MuiDrawer
                    isDrawerOpen={isDrawerOpen}
                    setIsDrawerOpen={setIsDrawerOpen}
                />
                <div className="p-6 flex gap-6 flex-col w-full">
                    <div className="w-full flex">
                        <div className="flex md:hidden">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="logo"
                                onClick={() => setIsDrawerOpen(true)}
                            >
                                <FilterAltIcon />
                            </IconButton>
                        </div>
                        <div className="flex w-full gap-1 justifty-center items-center bg-white px-2">
                            <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 p-2 outline-none"
                            onChange={(e) => {
                                const filteredData = initialData.filter((item) =>
                                    item.name
                                        .toLowerCase()
                                        .includes(e.target.value.toLowerCase())
                                );
                                setData(filteredData);
                            }
                            }
                        />
                        </div>
                    </div>
                    <Results data={data} />
                </div>
            </div>
    );
};

export default Home;
