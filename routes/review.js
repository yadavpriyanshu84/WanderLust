const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const{validateReview,isLoggedIn,isReviewAuther}=require("../middleware.js");
const Review= require("../models/review.js");
const Listing= require("../models/listing.js");
const reviewControllers=require("../controllers/reviews.js");



// Reviews
// post review
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewControllers.createReview));

//Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuther,wrapAsync(reviewControllers.deleteReview)); ;

module.exports=router;