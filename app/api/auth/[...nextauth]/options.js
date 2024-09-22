import GitHubProveder from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
        GitHubProveder({
        /**
         * @param {import("next-auth/providers/github").Profile} profile
         * @return {import("next-auth/providers/github").Profile}
         */
            profile(profile) {
                console.log("profile Github", profile)

                let userRole = "GitHub User"
                if(profile?.email == "yaredcode7@gmail.com") {
                    userRole = "admin"
                }

                // the function profile return the profile of the user, but we can add 
                // or modify the props of the profile. In this case we are adding a 
                // new prop called role, which is a string. Depending on the condition
                // we are assigning a different value to the role
                return {
                    // ...profile is the spread operator, which allows us to get all the
                    // props of the profile and add them to the new object
                    ...profile,
                    // and then we are adding the new prop role with the value of userRole
                    role: userRole,
                }
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            /**
             * @param {import("next-auth/providers/github").Profile} profile
             * @return {import("next-auth/providers/github").Profile}
             */
                profile(profile) {
                    console.log("profile Google", profile)
    
                    
                    return {                        
                        ...profile,
                        id: profile.sub,
                        role: userRole,
                    }
                },
                clientId: process.env.GOOGLE_ID,
                clientSecret: process.env.GOOGLE_SECRET,
            })
    ],
    callbacks: {
        /**
         * This callback is called whenever a JSON Web Token is created or updated.
         * We are adding the role of the user to the token.
         * @param {Object} - The object with the token and the user
         * @property {Object} token - The token of the user
         * @property {Object} user - The user object
         * @returns {Object} The token with the role of the user
         */
        async jwt({token, user}){
            if(user) token.role = user.role
            return token
        },
        /**
         * This callback is called whenever a session is checked.
         * We are adding the role of the user to the session.
         * @param {Object} session - The session object
         * @param {Object} token - The token of the user
         * @returns {Object} The session with the role of the user
         */
        async session({session, token}) {
            if(session?.user) session.user.role = token.role
            return session
        }
    }
}