const resolvers = {
    //add a Query key first
    //returns an array of Tracks that will be used to
    //populate the homepage grid of our web client
    Query: {
        tracksForHome: (_, __, {dataSources},) => {
            dataSources.trackAPI.getTracksForHome();             
    }
},
    Track: {
    author: ({authorID}, _, {dataSources}) => {
            dataSources.trackAPI.getAuthor(authorID);
        }
    }
};
module.exports = resolvers;
