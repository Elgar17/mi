export default{
    saveUser(context, username){
        context.commit('saveUser', username);
    },
    saveCartCount(context, count){
        context.commit('saveCartCount', count);
    }
}