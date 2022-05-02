import Posts from "../components/Posts/Posts";

export default (posts_state = [], action) => {
    switch(action.type){
        case "DELETE":
            return posts_state.filter(post => post._id !== action.payload) 
        case "UPDATE":
        case "LIKE":
            return posts_state.map((post) => post._id == action.payload._id? action.payload: post )
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...posts_state, action.payload];
        default: 
            return posts_state;
    }

}