import mongoose from "mongoose"

const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: {
    type:String
  },
  read: {
    type: Boolean
  }
}, {
  timestamps: true
})

const Book = mongoose.model('Book', bookSchema)

export {
  Book
}