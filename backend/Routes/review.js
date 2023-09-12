import express from 'express'
import { getAllReviews, createReview} from '../Controllers/reviewController.js'
import { authenticate, restrict } from './../auth/VerifyToken.js'

const router = express.Router({ mergeParams: true});

// doctor

router.route("/").get(getAllReviews).post(authenticate, restrict(["patient"]), createReview);

export default router;