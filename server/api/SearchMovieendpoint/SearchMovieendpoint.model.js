'use strict';

import mongoose from 'mongoose';

var SearchMovieendpointSchema = new mongoose.Schema({
  Title: String,
Duration: String,
   Poster: String,
   Genre:String,
   Overview: String
});

export default mongoose.model('SearchMovieendpoint', SearchMovieendpointSchema);
