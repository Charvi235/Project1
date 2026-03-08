import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema= new Schema(
    {
        videoFile :
        {
            type:String,//cloudinary url
            required:true
        },
        thumbnail :
        {
            type:String,//cloudinary url
            required:true
        } ,
        duration:
        {
            type :Number,//cloudinary
            required:true
        },
        views :
        {
            type:Number,
            dafault :0,
            required:true
        }  ,
        isPublished :
        {
            type :Boolean,
            default:true
        },
        owner :
        {
            type:Schema.Types.ObjectId,
            reference :"User"
        }

    },{timestamps:true})


videoSchema.plugin(mongooseAggregatePaginate)
export const Video= new mongoose.model("Video",videoSchema)