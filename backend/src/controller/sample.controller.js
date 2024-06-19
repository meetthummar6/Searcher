import asyncHandler from "../utils/asyncHandler.js";
import { sampleModel } from "../model/sample.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export const getSearchdata = asyncHandler(async (req, res) => {
    try {
        const sampledata = await sampleModel.find({ $text: { $search: req.params.search } }, { name: 1, author: 1, email: 1 })
        if (!sampledata) {
            throw new ApiError(404, "No data found");
        }
        return res.status(200).json(
            new ApiResponse(
                200,
                sampledata,
                "Data fetched successfully"
            )
        )


    } catch (error) {
        return res.status(error.statusCode || 500).json(error.message)
    }
})