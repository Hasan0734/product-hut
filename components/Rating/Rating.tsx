import { NextPage } from "next";
import ActiveRating from "../ActiveRating/ActiveRating";
import InActiveRating from "../InActiveRating/InActiveRating";

function Rating({ rating }: any) {
    const ratingarr = [...Array(5)];

    return (
        <>
            {ratingarr.slice(0, rating).map((index) => {
                return (
                    <ActiveRating/>
                );
            })}
            {ratingarr.slice(rating, 5).map((index) => {
                return (
                   <InActiveRating/>
                );
            })}
        </>
    );
};
export default Rating;
